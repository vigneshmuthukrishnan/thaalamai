import { readFile, writeFile } from "node:fs/promises";

const sourcePath = "Intensive sound healing/index.html";
const source = await readFile(sourcePath, "utf8");
const style = source.match(/<style>([\s\S]*?)<\/style>/)?.[1];
const body = source.match(/<body>([\s\S]*?)<script>/)?.[1];
const script = source.match(/<script>([\s\S]*?)<\/script>/)?.[1];

if (!style || !body || !script) throw new Error("The supplied HTML page could not be parsed.");

const modules = script.match(/const modules = (\[[\s\S]*?\]);\s*const tracks/ )?.[1];
const tracks = script.match(/const tracks = (\[[\s\S]*?\]);\s*const root=/)?.[1];
if (!modules || !tracks) throw new Error("The module curriculum data could not be found.");

let jsx = body
  .replace(/\bclass=/g, "className=")
  .replace(/src="assets\//g, 'src="/intensive-sound-healing/assets/')
  .replace(/\sstyle="margin-top:18px"/g, ' style={{ marginTop: 18 }}')
  .replace(/<(img|input|br|hr)(\b[^>]*?)(?<!\/)\s*>/g, "<$1$2 />")
  .replace(
    '<div className="pathgrid" id="pathCards"></div>',
    `<div className="pathgrid">{tracks.map((track) => (
        <article className="path" key={track.name}>
          <div className="pathtop"><span>MODULES {String(track.start).padStart(2, "0")}–{track.end}</span><span className="dot" /></div>
          <h3>{track.name}</h3><h4>{track.subtitle}</h4><p>{trackSummaries[track.name]}</p>
          <a className="textlink" href="#modules" onClick={() => setSelectedTrack(track.name)}>Explore modules ↗</a>
        </article>
      ))}</div>`,
  )
  .replace(
    '<input id="search" type="search" placeholder="Search modules (e.g. Reiki, Gong, மூச்சு…)" aria-label="Search modules" />',
    '<input id="search" type="search" placeholder="Search modules (e.g. Reiki, Gong, மூச்சு…)" aria-label="Search modules" value={query} onChange={(event) => setQuery(event.target.value)} />',
  )
  .replace(
    '<select id="filter" aria-label="Filter by pathway"><option value="all">All 100 modules</option></select>',
    `<select id="filter" aria-label="Filter by pathway" value={selectedTrack} onChange={(event) => setSelectedTrack(event.target.value)}>
          <option value="all">All 100 modules</option>
          {tracks.map((track) => <option key={track.name} value={track.name}>{track.name}</option>)}
        </select>`,
  )
  .replace('<span className="count" id="count">100 modules</span>', '<span className="count" id="count">{shownModules.length} of 100 modules</span>')
  .replace(
    '<div className="groups" id="groups"></div><div className="empty" id="empty">No matching modules. Try another keyword.</div>',
    `{filteredTracks.map(({ track, modules: trackModules }, index) => (
        <details className="group" key={track.name} open={Boolean(query) || selectedTrack !== "all" || index === 0}>
          <summary><div className="gtitle"><strong>{track.name}</strong><span>{track.subtitle}</span></div><span className="pill">{trackModules.length} modules · {String(track.start).padStart(2, "0")}–{track.end}</span></summary>
          <div className="modulelist">{trackModules.map((module) => <article className="module" key={module.n}><span className="num">{String(module.n).padStart(2, "0")}</span><div><h4>{module.title}</h4><p>{module.desc}</p></div></article>)}</div>
        </details>
      ))}
      {shownModules.length === 0 ? <div className="empty shown">No matching modules. Try another keyword.</div> : null}`,
  )
  .replace('<span id="year"></span>', '{new Date().getFullYear()}');

const component = `import { useMemo, useState } from "react";
import pageCss from "./intensiveSoundHealing.css?raw";
import { modules, tracks } from "./intensiveSoundHealingData.js";

const trackSummaries = {
  "DEHA NADA": "Prepare the body and senses for a grounded, comfortable sound-healing practice.",
  "CHITTA NADA": "Develop listening, emotional awareness and structured session skills.",
  "ATMA NADA": "Explore contemplative practices respectfully, with participant choice.",
  "PARAMA NADA DIKSHA": "Build ethical facilitation, teaching, participant care and professional practice.",
};

export default function IntensiveSoundHealing() {
  const [query, setQuery] = useState("");
  const [selectedTrack, setSelectedTrack] = useState("all");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredTracks = useMemo(() => tracks.flatMap((track) => {
    if (selectedTrack !== "all" && selectedTrack !== track.name) return [];
    const visibleModules = modules.filter((module) => module.track === track.name && (!normalizedQuery || [module.n, module.title, module.desc, module.track].join(" ").toLowerCase().includes(normalizedQuery)));
    return visibleModules.length ? [{ track, modules: visibleModules }] : [];
  }), [normalizedQuery, selectedTrack]);
  const shownModules = filteredTracks.flatMap(({ modules: trackModules }) => trackModules);

  return (
    <div className="intensive-sound-healing-page">
      <style>{pageCss}</style>
      <>
${jsx}
      </>
    </div>
  );
}
`;

await writeFile("src/intensiveSoundHealingData.js", `export const modules = ${modules};\n\nexport const tracks = ${tracks};\n`);
await writeFile("src/intensiveSoundHealing.css", style);
await writeFile("src/IntensiveSoundHealing.jsx", component);
