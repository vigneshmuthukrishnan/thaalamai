import { useMemo, useState } from "react";
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

<div className="topbar">THAALAM INTENSIVE SOUND HEALING MASTERCLASS · 100-MODULE LEARNING JOURNEY</div>
<header><div className="wrap nav">
<a className="brand" href="#home"><span className="brandmark">தா</span><span>THAALAM<small>REIKI • SOUND • STILLNESS</small></span></a>
<nav className="navlinks"><a href="#journey">The Journey</a><a href="#modules">100 Modules</a><a href="#gallery">Gallery</a><a href="#faq">FAQs</a><a className="btn" href="#enquire">Enquire Now ↗</a></nav>
</div></header>
<main>
<section className="hero" id="home"><div className="wrap hero-grid"><div>
<div className="eyebrow">A practical learning experience · 3-day intensive</div>
<h1>Find your rhythm.<br /><em>Learn the language of sound.</em></h1>
<p><strong>THAALAM REIKI — 100-MODULE SOUND HEALING INTENSIVE MASTERCLASS</strong> is a structured journey through body preparation, sound instruments, guided relaxation, reflective practice and ethical professional facilitation.</p>
<div className="hero-cta"><a className="btn" href="#modules">Explore all 100 modules ↓</a><a className="btn outline" href="#gallery">View workshop moments</a></div>
<div className="hero-notes"><span>Hands-on instrument practice</span><span>Guided session design</span><span>Ethics & practitioner skills</span></div>
</div><div className="hero-photo"><img src="/intensive-sound-healing/assets/workshop-01.jpg" alt="Thaalam sound healing masterclass in session" /></div></div></section>
<div className="trust"><div className="wrap trustrow"><div className="trustitem"><strong>100</strong><span>Structured learning modules</span></div><div className="trustitem"><strong>4</strong><span>Learning pathways</span></div><div className="trustitem"><strong>3 Days</strong><span>Intensive workshop format</span></div><div className="trustitem"><strong>Practice</strong><span>Demonstration & reflection</span></div></div></div>
<section id="about"><div className="wrap introgrid"><div className="introimg"><img src="/intensive-sound-healing/assets/workshop-02.jpg" alt="Participants experiencing a guided sound session" loading="lazy" /><div className="stamp">A space to listen, learn and practise.</div></div><div><div className="kicker">Welcome to Thaalam</div><div className="sectionhead"><h2>More than instruments.<br />A complete practice framework.</h2><p>Explore how to prepare a welcoming space, choose instruments thoughtfully, guide a sound journey, care for participants and develop a responsible professional practice.</p></div><ul className="checks"><li><span><strong>Learn the foundations.</strong><br />Understand sound, listening, Reiki traditions and safe session preparation.</span></li><li><span><strong>Build practical confidence.</strong><br />Practise singing bowls, gong, chimes, drums, tuning forks and complementary instruments.</span></li><li><span><strong>Guide with care.</strong><br />Use consent, accessible language, participant choice and clear professional boundaries.</span></li><li><span><strong>Plan your next steps.</strong><br />Create session formats, workshop plans, ethical marketing and a realistic launch roadmap.</span></li></ul><a className="btn dark" href="#journey">See the four pathways →</a></div></div></section>
<section id="journey"><div className="wrap"><div className="sectionhead center"><div className="kicker">The learning architecture</div><h2>Four pathways. One integrated journey.</h2><p>The 100 modules are arranged in four clear stages. Open the full curriculum below to search module names and read every description.</p></div><div className="pathgrid">{tracks.map((track) => (
        <article className="path" key={track.name}>
          <div className="pathtop"><span>MODULES {String(track.start).padStart(2, "0")}–{track.end}</span><span className="dot" /></div>
          <h3>{track.name}</h3><h4>{track.subtitle}</h4><p>{trackSummaries[track.name]}</p>
          <a className="textlink" href="#modules" onClick={() => setSelectedTrack(track.name)}>Explore modules ↗</a>
        </article>
      ))}</div></div></section>
<section className="modulessection" id="modules"><div className="wrap"><div className="sectionhead"><div className="kicker">Complete curriculum</div><h2>All 100 modules, clearly organised.</h2><p>Search in English or Tamil. Select a pathway to focus on its 25 modules, or open each section to explore the complete syllabus.</p></div><div className="tools"><input id="search" type="search" placeholder="Search modules (e.g. Reiki, Gong, மூச்சு…)" aria-label="Search modules" value={query} onChange={(event) => setQuery(event.target.value)} /><select id="filter" aria-label="Filter by pathway" value={selectedTrack} onChange={(event) => setSelectedTrack(event.target.value)}>
          <option value="all">All 100 modules</option>
          {tracks.map((track) => <option key={track.name} value={track.name}>{track.name}</option>)}
        </select><span className="count" id="count">{shownModules.length} of 100 modules</span></div>{filteredTracks.map(({ track, modules: trackModules }, index) => (
        <details className="group" key={track.name} open={Boolean(query) || selectedTrack !== "all" || index === 0}>
          <summary><div className="gtitle"><strong>{track.name}</strong><span>{track.subtitle}</span></div><span className="pill">{trackModules.length} modules · {String(track.start).padStart(2, "0")}–{track.end}</span></summary>
          <div className="modulelist">{trackModules.map((module) => <article className="module" key={module.n}><span className="num">{String(module.n).padStart(2, "0")}</span><div><h4>{module.title}</h4><p>{module.desc}</p></div></article>)}</div>
        </details>
      ))}
      {shownModules.length === 0 ? <div className="empty shown">No matching modules. Try another keyword.</div> : null}</div></section>
<section id="gallery"><div className="wrap"><div className="sectionhead"><div className="kicker">Real workshop moments</div><h2>Learn together. Practise together.</h2><p>Photos from group sessions, instrument demonstrations, guided relaxation, participant experiences and certificate moments.</p></div><div className="gallery"><figure className="photo"><img src="/intensive-sound-healing/assets/workshop-01.jpg" alt="Thaalam sound healing workshop photograph 1" loading="lazy" /><figcaption>Sound journey</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-02.jpg" alt="Thaalam sound healing workshop photograph 2" loading="lazy" /><figcaption>Group practice</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-03.jpg" alt="Thaalam sound healing workshop photograph 3" loading="lazy" /><figcaption>Instrument demonstration</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-04.jpg" alt="Thaalam sound healing workshop photograph 4" loading="lazy" /><figcaption>Guided relaxation</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-05.jpg" alt="Thaalam sound healing workshop photograph 5" loading="lazy" /><figcaption>Learning community</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-06.jpg" alt="Thaalam sound healing workshop photograph 6" loading="lazy" /><figcaption>Sound journey</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-07.jpg" alt="Thaalam sound healing workshop photograph 7" loading="lazy" /><figcaption>Group practice</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-08.jpg" alt="Thaalam sound healing workshop photograph 8" loading="lazy" /><figcaption>Instrument demonstration</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-09.jpg" alt="Thaalam sound healing workshop photograph 9" loading="lazy" /><figcaption>Guided relaxation</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-10.jpg" alt="Thaalam sound healing workshop photograph 10" loading="lazy" /><figcaption>Learning community</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-11.jpg" alt="Thaalam sound healing workshop photograph 11" loading="lazy" /><figcaption>Sound journey</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-12.jpg" alt="Thaalam sound healing workshop photograph 12" loading="lazy" /><figcaption>Group practice</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-13.jpg" alt="Thaalam sound healing workshop photograph 13" loading="lazy" /><figcaption>Instrument demonstration</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-14.jpg" alt="Thaalam sound healing workshop photograph 14" loading="lazy" /><figcaption>Guided relaxation</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-15.jpg" alt="Thaalam sound healing workshop photograph 15" loading="lazy" /><figcaption>Learning community</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-16.jpg" alt="Thaalam sound healing workshop photograph 16" loading="lazy" /><figcaption>Sound journey</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-17.jpg" alt="Thaalam sound healing workshop photograph 17" loading="lazy" /><figcaption>Group practice</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-18.jpg" alt="Thaalam sound healing workshop photograph 18" loading="lazy" /><figcaption>Instrument demonstration</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-19.jpg" alt="Thaalam sound healing workshop photograph 19" loading="lazy" /><figcaption>Guided relaxation</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-20.jpg" alt="Thaalam sound healing workshop photograph 20" loading="lazy" /><figcaption>Learning community</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-21.jpg" alt="Thaalam sound healing workshop photograph 21" loading="lazy" /><figcaption>Sound journey</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-22.jpg" alt="Thaalam sound healing workshop photograph 22" loading="lazy" /><figcaption>Group practice</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-23.jpg" alt="Thaalam sound healing workshop photograph 23" loading="lazy" /><figcaption>Instrument demonstration</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-24.jpg" alt="Thaalam sound healing workshop photograph 24" loading="lazy" /><figcaption>Guided relaxation</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-25.jpg" alt="Thaalam sound healing workshop photograph 25" loading="lazy" /><figcaption>Learning community</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-26.jpg" alt="Thaalam sound healing workshop photograph 26" loading="lazy" /><figcaption>Sound journey</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-27.jpg" alt="Thaalam sound healing workshop photograph 27" loading="lazy" /><figcaption>Group practice</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-28.jpg" alt="Thaalam sound healing workshop photograph 28" loading="lazy" /><figcaption>Instrument demonstration</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-29.jpg" alt="Thaalam sound healing workshop photograph 29" loading="lazy" /><figcaption>Guided relaxation</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-30.jpg" alt="Thaalam sound healing workshop photograph 30" loading="lazy" /><figcaption>Learning community</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-31.jpg" alt="Thaalam sound healing workshop photograph 31" loading="lazy" /><figcaption>Sound journey</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-32.jpg" alt="Thaalam sound healing workshop photograph 32" loading="lazy" /><figcaption>Group practice</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-33.jpg" alt="Thaalam sound healing workshop photograph 33" loading="lazy" /><figcaption>Instrument demonstration</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-34.jpg" alt="Thaalam sound healing workshop photograph 34" loading="lazy" /><figcaption>Guided relaxation</figcaption></figure>
<figure className="photo"><img src="/intensive-sound-healing/assets/workshop-35.jpg" alt="Thaalam sound healing workshop photograph 35" loading="lazy" /><figcaption>Learning community</figcaption></figure></div></div></section>
<section className="darksection"><div className="wrap experiencegrid"><div><div className="sectionhead"><div className="kicker">Inside the masterclass</div><h2>From first sound to confident facilitation.</h2><p>Build a repeatable process for preparing the room, choosing instruments, guiding a session, checking participant comfort and reflecting on your practice.</p></div><div className="features"><div className="feature"><strong>Instrument Lab</strong><span>Explore sound textures, tone, rhythm and transitions.</span></div><div className="feature"><strong>Guided Practice</strong><span>Practise openings, relaxation journeys and closing routines.</span></div><div className="feature"><strong>Participant Care</strong><span>Consent, accessibility, volume awareness and referral boundaries.</span></div><div className="feature"><strong>Professional Skills</strong><span>Session planning, feedback, workshop operations and ethical promotion.</span></div></div></div><div className="experienceimg"><img src="/intensive-sound-healing/assets/workshop-03.jpg" alt="Thaalam instructor demonstrating sound instruments" loading="lazy" /></div></div></section>
<section id="format"><div className="wrap"><div className="sectionhead center"><div className="kicker">Suggested 3-day flow</div><h2>A clear rhythm for learning.</h2><p>The instructor may adjust timings based on group size, participant needs and practical activities.</p></div><div className="timeline"><article className="day"><div className="daynum">DAY 01 · FOUNDATION</div><h3>Prepare & Listen</h3><p>Build a safe foundation for personal practice and instrument handling.</p><ul><li>Welcome, intention and consent</li><li>Body preparation and sound awareness</li><li>Singing bowls and core instruments</li><li>Guided listening and reflection</li></ul></article><article className="day"><div className="daynum">DAY 02 · PRACTICE</div><h3>Explore & Facilitate</h3><p>Move from individual instruments to structured sound journeys.</p><ul><li>Instrument combinations and transitions</li><li>Guided relaxation and reflective practice</li><li>Group session design</li><li>Supervised practical exercises</li></ul></article><article className="day"><div className="daynum">DAY 03 · MASTERY</div><h3>Integrate & Plan</h3><p>Strengthen professional boundaries and build a realistic next-step plan.</p><ul><li>Session planning and participant care</li><li>Ethics, evidence and communication</li><li>Teaching and feedback practice</li><li>Personal 30-day action plan</li></ul></article></div><div className="note"><strong>Important:</strong> This is a learning and wellbeing-practice program, not a substitute for medical or mental-health diagnosis or treatment. Sound and Reiki experiences vary from person to person. No guaranteed healing outcomes are promised.</div></div></section>
<section id="faq"><div className="wrap"><div className="sectionhead center"><div className="kicker">Helpful details</div><h2>Frequently asked questions</h2></div><div className="faq">
<details><summary>Who is this masterclass for?</summary><p>People interested in learning sound instruments, guided relaxation and responsible facilitation. Beginners should follow the instructor’s guidance and practise within their skill level.</p></details>
<details><summary>Are all 100 modules shown here?</summary><p>Yes. The complete numbered curriculum is available above, organised into four pathways with concise descriptions.</p></details>
<details><summary>Is this a medical treatment or clinical qualification?</summary><p>No medical treatment or clinical qualification is implied. Any certificate should reflect the actual training completed and the provider’s stated scope.</p></details>
<details><summary>What should I bring?</summary><p>Comfortable clothing, a notebook, water and any items specified by the organiser. Confirm instrument arrangements before attending.</p></details>
<details><summary>How do I ask about dates and fees?</summary><p>Use the enquiry button below and add your official email, confirmed dates, venue and fee details before publishing.</p></details>
<details><summary>Can I use these photos on my website?</summary><p>Use photos only when you have the necessary permission from the photographer and identifiable participants, especially for promotional use.</p></details>
</div></div></section>
<section className="ctaband" id="enquire"><div className="wrap ctainner"><div><h2>Ready to explore the Thaalam learning journey?</h2><p>Ask about upcoming batches, course details and registration.</p></div><a className="btn dark" href="mailto:YOUR-EMAIL@example.com?subject=THAALAM%20Sound%20Healing%20Masterclass%20Enquiry">Enquire by Email ↗</a></div></section>
</main>
<footer><div className="wrap"><div className="footgrid"><div><a className="brand" href="#home"><span className="brandmark">தா</span><span>THAALAM<small>REIKI • SOUND • STILLNESS</small></span></a><p style={{ marginTop: 18 }}>THAALAM Reiki — 100-Module Sound Healing Intensive Masterclass.</p><p>Listen with care. Practise with intention. Facilitate responsibly.</p></div><div><h4>Explore</h4><div className="footlinks"><a href="#journey">Four pathways</a><a href="#modules">All 100 modules</a><a href="#gallery">Workshop gallery</a><a href="#faq">Frequently asked questions</a></div></div><div><h4>Before publishing</h4><p>Replace the sample email link with your official contact details. Add confirmed dates, venue, fee and registration terms only after they are final.</p></div></div><p className="disclaimer">Wellbeing and educational content only. Reiki and sound-based practices are complementary experiences and should not be represented as proven cures or replacements for professional healthcare. Always respect consent, sound sensitivity and individual choice.</p><div className="copyright"><span>© {new Date().getFullYear()} THAALAM. All rights reserved.</span><span>Responsive landing page · English + Tamil curriculum</span></div></div></footer>
<a className="btn floating" href="#enquire">Enquire ↗</a>

      </>
    </div>
  );
}
