import { useEffect, useRef, useState } from "react";

let pageInstance = 0;

function isLocalAsset(path) {
  return path && !/^(?:[a-z][a-z\d+.-]*:|#|\/)/i.test(path);
}

/**
 * Renders one of the supplied landing-page documents in the React tree.
 *
 * The source pages contain a large curriculum/gallery and their own small
 * vanilla-JS interactions. Mounting their body inside React keeps all of that
 * original content while avoiding an iframe or a second browser page.
 */
export default function StandaloneHtmlPage({ source, assetBase, title }) {
  const pageRef = useRef(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;
    let pageStyle;
    let pageScript;
    let pageDocumentKey;

    async function mountPage() {
      try {
        const response = await fetch(source);
        if (!response.ok) throw new Error(`Could not load ${source}`);

        const html = await response.text();
        if (cancelled || !pageRef.current) return;

        const documentFragment = new DOMParser().parseFromString(html, "text/html");
        documentFragment.querySelectorAll("[src]").forEach((element) => {
          const asset = element.getAttribute("src");
          if (isLocalAsset(asset)) element.setAttribute("src", `${assetBase}/${asset}`);
        });

        const sourceStyle = documentFragment.querySelector("style");
        if (sourceStyle) {
          pageStyle = document.createElement("style");
          pageStyle.dataset.standalonePage = source;
          pageStyle.textContent = sourceStyle.textContent;
          document.head.append(pageStyle);
        }

        const sourceScript = documentFragment.querySelector("script");
        sourceScript?.remove();
        const pageRoot = pageRef.current;
        pageRoot.innerHTML = documentFragment.body.innerHTML;

        if (sourceScript?.textContent) {
          const localDocument = {
            addEventListener: (...args) => pageRoot.addEventListener(...args),
            createElement: (...args) => document.createElement(...args),
            getElementById: (id) => pageRoot.querySelector(`[id="${id}"]`),
            querySelectorAll: (...args) => pageRoot.querySelectorAll(...args),
          };
          pageDocumentKey = `__thaalamPageDocument${pageInstance++}`;
          window[pageDocumentKey] = localDocument;
          const scriptText = sourceScript.textContent.replace(
            /(["'])assets\//g,
            `$1${assetBase}/assets/`,
          );
          pageScript = document.createElement("script");
          // The wrapper scopes declarations and document queries to this React page.
          pageScript.textContent = `((document) => {\n${scriptText}\n})(window[${JSON.stringify(pageDocumentKey)}]);`;
          pageRoot.append(pageScript);
        }

        setStatus("ready");
      } catch (error) {
        console.error(error);
        if (!cancelled) setStatus("error");
      }
    }

    mountPage();
    return () => {
      cancelled = true;
      pageStyle?.remove();
      pageScript?.remove();
      if (pageDocumentKey) delete window[pageDocumentKey];
      if (pageRef.current) pageRef.current.replaceChildren();
    };
  }, [assetBase, source]);

  if (status === "error") {
    return <p className="standalone-page-error">Sorry, this page could not be loaded.</p>;
  }

  return (
    <main ref={pageRef} className="standalone-html-page" aria-label={title} aria-busy={status === "loading"} />
  );
}
