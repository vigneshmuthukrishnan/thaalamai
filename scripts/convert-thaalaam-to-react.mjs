import { readFile, writeFile } from "node:fs/promises";

const source = await readFile("thaalaam_website/index.html", "utf8");
const style = source.match(/<style>([\s\S]*?)<\/style>/)?.[1];
const body = source.match(/<body>([\s\S]*?)<script>/)?.[1];
const script = source.match(/<script>([\s\S]*?)<\/script>/)?.[1];
if (!style || !body || !script) throw new Error("The supplied HTML page could not be parsed.");

const phases = script.match(/const phases=(\[[\s\S]*?\]);\s*const photos=/)?.[1];
const photos = script.match(/const photos=(\[[\s\S]*?\]);\s*const phaseRoot=/)?.[1];
if (!phases || !photos) throw new Error("The curriculum or gallery data could not be found.");

let jsx = body
  .replace(/\bclass=/g, "className=")
  .replace(/src="assets\//g, 'src="/thaalaam-website/assets/')
  .replace(/\sstyle="font-size:\.8rem;margin-top:20px"/g, ' style={{ fontSize: ".8rem", marginTop: 20 }}')
  .replace(/<(img|input|br|hr)(\b[^>]*?)(?<!\/)\s*>/g, "<$1$2 />")
  .replace(
    '<input id="moduleSearch" className="search" type="search" placeholder="மாட்யூலைத் தேடுங்கள்… / Search modules" aria-label="மாட்யூலைத் தேடுங்கள்" />',
    '<input id="moduleSearch" className="search" type="search" placeholder="மாட்யூலைத் தேடுங்கள்… / Search modules" aria-label="மாட்யூலைத் தேடுங்கள்" value={query} onChange={(event) => setQuery(event.target.value)} />',
  )
  .replace('<button className="btn outline" id="expandAll" type="button">அனைத்தையும் திற</button>', '<button className="btn outline" type="button" onClick={() => setExpanded(new Set(phases.map((_, index) => index)))}>அனைத்தையும் திற</button>')
  .replace('<button className="btn outline" id="collapseAll" type="button">அனைத்தையும் மூடு</button>', '<button className="btn outline" type="button" onClick={() => setExpanded(new Set())}>அனைத்தையும் மூடு</button>')
  .replace(
    '<div id="phases"></div>',
    `{visiblePhases.map(({ phase, phaseIndex, items }) => (
        <details className="phase" key={phase.title} open={Boolean(normalizedQuery) || expanded.has(phaseIndex)} onToggle={() => togglePhase(phaseIndex)}>
          <summary><span className="phase-title">{phaseIndex + 1}. {phase.title}<small>{phase.desc}</small></span><span className="count">மாட்யூல்கள் {phase.range}　＋</span></summary>
          <div className="modules">{items.map(({ item, itemIndex }) => <article className="module" key={itemIndex}><span className="modno">{String(phaseIndex * 20 + itemIndex + 1).padStart(2, "0")}</span><div><h4>{item[0]}</h4><p>{item[1]}</p></div></article>)}</div>
        </details>
      ))}`,
  )
  .replace(
    '<div className="photo-grid" id="photoGrid"></div>',
    `<div className="photo-grid">{photos.map(([fileName, caption], index) => (
        <figure className="photo-card" key={fileName}><img loading="lazy" src={\`/thaalaam-website/assets/\${fileName}\`} alt={caption} /><figcaption>{String(index + 1).padStart(2, "0")} · {caption}</figcaption></figure>
      ))}</div>`,
  )
  .replace('<span id="year"></span>', '{new Date().getFullYear()}');

const component = `import { useMemo, useState } from "react";
import pageCss from "./thaalaamWebsite.css?raw";
import { phases, photos } from "./thaalaamWebsiteData.js";

export default function ThaalaamWebsite() {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(() => new Set([0]));
  const normalizedQuery = query.trim().toLowerCase();
  const visiblePhases = useMemo(() => phases.flatMap((phase, phaseIndex) => {
    const items = phase.items
      .map((item, itemIndex) => ({ item, itemIndex }))
      .filter(({ item }) => !normalizedQuery || [phase.title, ...item].join(" ").toLowerCase().includes(normalizedQuery));
    return items.length ? [{ phase, phaseIndex, items }] : [];
  }), [normalizedQuery]);
  const togglePhase = (phaseIndex) => setExpanded((current) => {
    const next = new Set(current);
    next.has(phaseIndex) ? next.delete(phaseIndex) : next.add(phaseIndex);
    return next;
  });

  return (
    <div className="thaalaam-website-page">
      <style>{pageCss}</style>
      <>
${jsx}
      </>
    </div>
  );
}
`;

await writeFile("src/thaalaamWebsiteData.js", `export const phases = ${phases};\n\nexport const photos = ${photos};\n`);
await writeFile("src/thaalaamWebsite.css", style);
await writeFile("src/ThaalaamWebsite.jsx", component);
