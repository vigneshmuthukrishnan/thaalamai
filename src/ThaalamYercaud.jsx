import { useEffect } from 'react';
import { ArrowDown, ArrowRight, Leaf, Mountain, Heart, Sparkles, Waves, Sun, BedDouble, Coffee, MapPin, Check, Music, Flame, Car, Utensils, Wind, Menu } from 'lucide-react';
import { bodyMindSoul, therapies, rooms, roomIncludes, reikiBenefits, soundBenefits, instruments, frequencies, reikiResearch, soundScience, vegMenu, nonVegMenu, packageIncludes, activities } from './yercaudContent';
import './ThaalamYercaud.css';
import { yercaudPaymentPageLink } from './serviceData';

const links = [['The Retreat', '#retreat'], ['Therapies', '#therapies'], ['Stay', '#rooms'], ['Healing', '#healing'], ['Food', '#vegetarian-menu'], ['Packages', '#packages']];
const photo = (name) => `/yercaud/${name === 'reiki' ? 'meditation' : name}.jpg`;

function Photo({ name, alt, className = '', eager = false }) {
  return <img className={`yr-photo ${className}`} src={photo(name)} alt={alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" />;
}

function Heading({ eyebrow, title, subtitle, children }) {
  return <div className="yr-heading"><span className="yr-eyebrow">{eyebrow}</span><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}{children}<span className="yr-heading-mark" aria-hidden="true"><span /><Leaf size={20} /><span /></span></div>;
}

function List({ items, className = '' }) {
  return <ul className={`yr-list ${className}`}>{items.map((item) => <li key={item}><Leaf size={15} aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

function Button({ children, href = yercaudPaymentPageLink }) {
  return <a href={href} className="yr-button">{children}<ArrowRight size={17} aria-hidden="true" /></a>;
}

function HarmonyStrip() {
  return <div className="yr-harmony">{[[Leaf, 'Body', 'Detoxified'], [Waves, 'Mind', 'Relaxed'], [Sparkles, 'Soul', 'Rejuvenated']].map(([Icon, title, text]) => <div key={title}><Icon size={28} aria-hidden="true" /><span><b>{title}</b>{text}</span></div>)}</div>;
}

function Hero() {
  return <section className="yr-hero" id="yercaud-hero" aria-labelledby="yr-title">
    <Photo name="hills" alt="The green hills of Yercaud" eager />
    <div className="yr-hero-shade" />
    <div className="yr-hero-content yr-container">
      <span className="yr-location"><MapPin size={15} />Yercaud</span>
      <p className="yr-script">Welcome to</p>
      <Mountain size={65} strokeWidth={1} className="yr-hero-mountain" aria-hidden="true" />
      <h1 id="yr-title">Thaalam</h1>
      <p className="yr-hero-description">An Ayurvedic Sound Healing Retreat and Spa</p>
      <div className="yr-hero-rule" />
      <h2>Reborn Yourself</h2>
      <p className="yr-eyebrow">Retreat Package</p>
      <p className="yr-hero-mantra">Relax <span>•</span> Rebalance <span>•</span> Reborn</p>
      <Button>Book Your Retreat Now</Button>
      <a href="#retreat" className="yr-scroll" aria-label="Explore the retreat"><ArrowDown size={18} /></a>
    </div>
    <div className="yr-hero-bottom yr-container">{[[Leaf, 'Body', 'Healthier'], [Sun, 'Mind', 'Calmer'], [Sparkles, 'Soul', 'Happier']].map(([Icon, title, text]) => <div key={title}><Icon size={29} strokeWidth={1.3} /><span><strong>{title}</strong><small>{text}</small></span></div>)}<p>Nature Heals You<br /><em>A Better You Awaits ♡</em></p></div>
  </section>;
}

function Retreat() {
  return <section className="yr-section yr-paper" id="retreat"><div className="yr-container">
    <Heading eyebrow="Not just a getaway… A new you!" title="Rejuvenate and Reborn" subtitle="in Thaalam Retreat"><p>Rewire your body mind and soul</p><p>Better Body Calmer Mind Brighter Soul</p></Heading>
    <div className="yr-three-grid">{bodyMindSoul.map((item, index) => <article key={item.title} className={`yr-overview yr-overview-${index}`}>
      <div className="yr-card-image"><Photo name={item.image} alt={index === 2 ? 'Meditation hall at Thaalam' : `${item.title === 'Body' ? 'Foot detoxification' : 'Sound healing'} at Thaalam`} /><span className="yr-number">0{index + 1}</span></div>
      <div className="yr-card-body"><p className="yr-eyebrow">For</p><h3>{item.title}</h3><p className="yr-card-subtitle">{item.subtitle}</p><List items={item.lines} /><p className="yr-card-note">{item.note}</p>{index === 0 && <p className="yr-small-caps">Cleanse • Detox • Refresh • Revive</p>}</div>
    </article>)}</div>
    <blockquote className="yr-quote">“When your body is light,<br />your mind is clear,<br />your soul smiles…<br /><em>Life becomes Beautiful!</em>”</blockquote>
    <div className="yr-feature-line">{['Ayurveda Therapies', 'Sound Healing', 'Reiki Healing', 'Nature Stay', 'Healthy Food', 'Peaceful Surroundings', 'A New You'].map((text) => <span key={text}><Leaf size={16} />{text}</span>)}</div>
    <div className="yr-retreat-banner"><Photo name="retreat" alt="Thaalam retreat building in Yercaud" /><div><span className="yr-eyebrow">More Than a Stay… A Transformation ♡</span><h3>Disconnect from Stress<br />Reconnect with Yourself</h3><p>Nature Heals Sound Transforms You ♡</p><p>A Happier Healthier Calmer You ♡</p><p className="yr-small-caps">Relax | Rejuvenate | Rewire | Reborn</p></div></div>
  </div></section>;
}

function Therapies() {
  return <section className="yr-section yr-dark" id="therapies"><div className="yr-container">
    <Heading eyebrow="Cleanse • Relax • Rejuvenate • Rebalance" title="Ancient Therapies for a Healthier, Happier You" subtitle="Nature Heals You Completely" />
    <div className="yr-three-grid">{therapies.map((item) => <article className="yr-therapy" key={item.title}>
      <Photo name={item.image} alt={`${item.title} at Thaalam`} />
      <div className="yr-card-body"><h3>{item.title}</h3><p className="yr-eyebrow">{item.subtitle}</p><p className="yr-card-subtitle">{item.tagline}</p>{item.caption && <p className="yr-photo-caption">{item.caption}</p>}<h4>Key Uses & Benefits</h4><List items={item.benefits} /><p className="yr-card-note">{item.closing}</p></div>
    </article>)}</div>
    <HarmonyStrip /><div className="yr-section-ending"><p>Experience the Difference at Thaalam</p><Button>Book Your Wellness Experience Today</Button><span>Heal Stay Reconnect</span></div>
  </div></section>;
}

function Rooms() {
  return <section className="yr-section yr-paper" id="rooms"><div className="yr-container">
    <Heading eyebrow="Thaalam Special" title="Room Categories" subtitle="Different Stays | A Deeper Experience | Same Healing Vibes"><p>More Than a Stay — A Deeper You</p></Heading>
    <div className="yr-room-grid">{rooms.map((room, index) => <article className="yr-room" key={room.title}>
      <div className="yr-card-image"><Photo name={room.image} alt={`${room.title} at Thaalam Yercaud`} /><span className="yr-room-tag">0{index + 1} / Stay</span></div>
      <div className="yr-card-body"><span className="yr-eyebrow">{room.subtitle}</span><h3>{room.title}</h3><p>{room.description}</p><ul className="yr-room-features">{room.features.map((text) => <li key={text}><Check size={16} />{text}</li>)}</ul><div className="yr-room-badge">{room.badge}</div></div>
    </article>)}</div>
    <div className="yr-room-includes"><h3>All Rooms Include</h3><div>{roomIncludes.map((text, index) => { const Icon = [Wind, Sun, Waves, Sparkles, Coffee, Mountain][index]; return <span key={text}><Icon size={26} strokeWidth={1.3} />{text}</span>; })}</div></div>
    <div className="yr-section-ending"><p>Choose Your Space. Discover a New You</p><span>Stay Unwind Rebalance — In Nature’s Rhythm</span><Button>Book Your Stay</Button><span>Heal • Rest • Explore • Repeat</span></div>
  </div></section>;
}

function Healing() {
  return <section className="yr-section yr-healing" id="healing"><div className="yr-container">
    <Heading eyebrow="Body Mind Soul in Harmony" title="Ancient Wisdom. Modern Science. Real Transformation." subtitle="“Healing is not a treatment, it’s a return to your natural balance.”" />
    <div className="yr-two-grid yr-healing-columns">
      <article className="yr-healing-card"><Photo name="meditation" alt="Thaalam meditation hall" /><div className="yr-card-body"><span className="yr-eyebrow">Universal Life Energy</span><h3>Reiki Healing</h3><p>Reiki (Rei = Universal, Ki = Life Energy) is a Japanese energy healing technique that channels universal life force energy to balance the body, mind and spirit.</p><div className="yr-chakras">{['Clears energy blocks', 'Balances chakras', 'Restores natural flow of energy', 'Promotes physical, mental and emotional well-being'].map((text, index) => <span key={text}><i style={{ '--chakra': ['#9c60c5', '#4c85b6', '#799e46', '#d8ae44'][index] }} />{text}</span>)}</div><blockquote>“Reiki activates your body’s natural healing ability.”</blockquote><h4>Uses & Power of Reiki</h4><List items={reikiBenefits} /><div className="yr-research"><h4>Proven Benefits <small>(Research Based)</small></h4><List items={reikiResearch} /></div><p className="yr-card-note">Reiki Touches Energy<br />Sound Moves Energy<br />Together They Transform Lives</p></div></article>
      <article className="yr-healing-card"><Photo name="sound" alt="Sound healing space at Thaalam" /><div className="yr-card-body"><span className="yr-eyebrow">Vibrations for a Better Life</span><h3>Sound Healing</h3><p>Sound healing uses specific frequencies and vibrations from Gong bowls, Tibetan singing bowls and various instruments to bring the mind, body and emotions into harmony. Every cell in your body vibrates – when exposed to the right sound frequency, it can heal, relax and regenerate.</p><p className="yr-small-caps">Vibrate • Release • Balance • Heal • Elevate</p><h4>Instruments We Use</h4><div className="yr-instruments">{instruments.map((text) => <span key={text}><Music size={16} />{text}</span>)}</div><h4>Uses & Power of Sound Healing</h4><List items={soundBenefits} /><h4>Common Frequencies Used in Sound Healing</h4><div className="yr-table-wrap" tabIndex={0} role="region" aria-label="Sound healing frequencies"><table><thead><tr><th>Frequency (Hz)</th><th>Purpose / Effect</th><th>Scientific Insights</th></tr></thead><tbody>{frequencies.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={index}>{cell}</th> : <td key={index}>{cell}</td>)}</tr>)}</tbody></table></div></div></article>
    </div>
    <div className="yr-science"><div><span className="yr-eyebrow">Vibration Changes Your Brain Changes Your Life</span><h3>Science Behind Sound Healing</h3><List items={soundScience} /></div><aside><Waves size={48} strokeWidth={1} /><h3>It’s Not Just a Therapy…<br />It’s a Real Experience</h3><p>Feel lighter ♡ Sleep deeper ♡ Think clearer<br />Heal faster ♡ Live happier</p><p>Experience the combination of Reiki & Sound Healing at Thaalam</p></aside></div>
    <HarmonyStrip /><div className="yr-section-ending"><p>Nature Heals You Completely</p><Button>Book Your Healing Journey Today</Button><span>Heal Stay Reconnect</span></div>
  </div></section>;
}

function FoodSection({ nonVeg = false }) {
  const menu = nonVeg ? nonVegMenu : vegMenu;
  return <section className={`yr-section yr-food ${nonVeg ? 'yr-food-nonveg' : ''}`} id={nonVeg ? 'non-vegetarian-menu' : 'vegetarian-menu'}><div className="yr-container">
    <Heading eyebrow={nonVeg ? 'Food tastes better in the Hills! ♡' : 'Pure Food Positive Vibes Happier Lives ♡'} title={nonVeg ? 'Non Vegetarian Menu' : 'Vegetarian Menu'} subtitle="Good Food Good Mood High Altitude Happier You!" />
    <div className="yr-food-intro"><Coffee size={28} strokeWidth={1.2} /><span>Kohinoor Special Tea</span><span>Yercaud Coffee = Happiness</span><span>Real Milk Only (No Creamer!!)</span><em>{nonVeg ? 'Calories don’t count in Yercaud!' : 'From the Hills With Love'}</em></div>
    <div className="yr-menu-grid">{menu.map((meal, index) => <article className={`yr-menu-card yr-meal-${index}`} key={meal.title}><div className="yr-meal-heading"><span className="yr-meal-number">0{index + 1}</span>{meal.time && <span className="yr-meal-time">{meal.time}</span>}</div><h3>{meal.title}</h3>{meal.subtitle && <p className="yr-meal-subtitle">{meal.subtitle}</p>}<List items={meal.items} /><p className="yr-card-note">{meal.note}</p></article>)}</div>
    <div className="yr-food-notes">{(nonVeg ? ['Idly, Vadai, Pongal… Life is Beautiful!', 'Hot Tea / Coffee + Cool Climate = Super Combination!', 'Eat Relax Repeat in Yercaud!', 'More Flavour More Happiness!'] : ['Happy Cows Happier People! ♡', 'Eat Green Stay Serene Live Thaalam', 'Breakfast = Happiness Served Hot!', 'Good Food Good Energy!', 'Snack Time = Smile Time', 'Sip Chill Repeat', 'Good Food Brighter Days']).map((text) => <span key={text}>{text}</span>)}</div>
    <div className="yr-menu-footer"><div><p className="yr-script">Food Friends Nature — Perfect Life ♡</p><p>{nonVeg ? 'Fresh Ingredients • Homely Taste • Hygienic Preparation • Seasonal & Local • Served with Love' : 'Fresh Ingredients • Homely Taste • Healthy Living • Yercaud Vibes'}</p>{!nonVeg && <p>Satvik | Fresh | Local | Seasonal | Served with Love</p>}</div><p className="yr-menu-disclaimer">( Menu slightly tentative depends on Yercaud climate and Raw material availability)</p></div>
  </div></section>;
}

function Packages() {
  const inclusionIcons = [BedDouble, Utensils, Music, Leaf, Heart, Wind, Sun, Waves, Mountain];
  return <section className="yr-section yr-dark yr-packages" id="packages"><div className="yr-container">
    <Heading eyebrow="More Than a Stay… A Deeper You" title="Same Healing Vibes. Different Days. Unbeatable Value." subtitle="Stay Unwind Rebalance — In Nature’s Rhythm" />
    <div className="yr-challenge"><Sparkles size={27} /><div><p>We Challenge — No One Can Give</p><h3>This Best Package Cost</h3><p>And We Are the Best in Entire Retreat Industry</p></div></div>
    <div className="yr-prices">{[{ title: 'Weekday', days: '(Monday - Friday)', veg: '2,500', nonVeg: '2,900' }, { title: 'Weekend', days: '(Saturday - Sunday)', veg: '2,900', nonVeg: '3,400' }].map((price) => <article key={price.title}><h3>{price.title}</h3><p>{price.days}</p><div>{[['Veg', price.veg], ['Non Veg', price.nonVeg]].map(([label, amount]) => <div key={label}><span>{label}</span><strong>₹{amount}</strong><small>/ PAX</small></div>)}</div></article>)}</div>
    <p className="yr-no-extra"><Check size={23} />No Hidden / Extra Charges</p><p className="yr-package-memory">Create Memories Not Just Bookings ♡</p>
    <div className="yr-package-includes"><h3>Package Includes</h3><div>{packageIncludes.map((text, index) => { const Icon = inclusionIcons[index]; return <div key={text}><Icon size={32} strokeWidth={1.2} /><span>{text}</span></div>; })}</div><p className="yr-script">Stay • Heal • Eat • Explore • Reconnect</p></div>
    <div className="yr-checkin"><article><h3>Flexible Check In & Check Out Timing</h3><div className="yr-checkin-times"><div><span>Property Check In</span><strong>9 AM</strong><p>to Next Day 5 PM</p></div><div><span>Room Check In</span><strong>12 PM</strong><p>to Next Day 11 AM</p></div></div></article><article><h3>Early Arrival? No Problem!</h3><p>You can use our hall for refreshment, keep your luggage and start your retreat package at 9 AM.</p><p>If room is available, we will give direct room check in.</p></article></div>
    <div className="yr-feature-line">{['Heal Your Body', 'Rest Your Mind', 'Explore Nature', 'Spend Time With Loved Ones', 'Repeat A Healthier You'].map((text) => <span key={text}><Heart size={17} />{text}</span>)}</div>
    <div className="yr-section-ending"><p>Not Just a Stay… It’s a Better You</p><Button>Book Your Retreat Now</Button><span>Good Food Great Healing Happier You</span><span>Thaalam — Where Nature Heals. Yercaud Waits for You</span></div>
  </div></section>;
}

function Experiences() {
  return <section className="yr-section yr-paper" id="experiences"><div className="yr-container">
    <Heading eyebrow="Thaalam Resort — Yercaud" title="Don’t Miss Our" subtitle="One Stay So Many Experiences!"><p>Nature’s Calm… Our Comfort…</p><p>Life is Better at Thaalam!</p></Heading>
    <div className="yr-activities">{activities.map((item, index) => { const Icon = [Waves, Flame, Car, Music, Music][index]; return <article className={`yr-activity yr-activity-${index}`} key={item.title}><Photo name={item.image} alt={`${item.title} at Thaalam Yercaud`} /><div><Icon size={26} /><h3>{item.title}</h3><p>{item.subtitle}</p></div></article>; })}</div>
    <div className="yr-final-callout"><Leaf size={44} strokeWidth={1.2} /><h3>All Included in the Same Cost!</h3><p>Same Stay More Memories ♡</p><Button>Book Now</Button><span>Relax • Connect • Rejuvenate • Be Happy</span></div>
  </div></section>;
}

export default function ThaalamYercaud() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content');
    description?.setAttribute('content', 'Thaalam Ayurvedic Sound Healing Retreat & Spa, Kommakadu, Yercaud. Rejuvenate and Reborn in Thaalam Retreat. Rewire your body mind and soul.');
    document.title = 'Thaalam Yercaud | Ayurvedic Sound Healing Retreat & Spa';
    return () => {
      document.title = previousTitle;
      if (description && previousDescription !== null) description.setAttribute('content', previousDescription);
    };
  }, []);

  return <div className="yr-page">
    <a href="#retreat" className="yr-skip">Skip to content</a>
    <header className="yr-header"><nav className="yr-container" aria-label="Thaalam Yercaud navigation"><a href="#yercaud-hero" className="yr-brand"><Mountain size={29} strokeWidth={1.2} /><span>Thaalam<small>Yercaud</small></span></a><div className="yr-desktop-nav">{links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div><a href={yercaudPaymentPageLink} className="yr-nav-book">Book Your Stay <ArrowRight size={14} /></a><details className="yr-mobile-nav"><summary aria-label="Open navigation"><Menu size={24} /></summary><div>{links.map(([label, href]) => <a href={href} key={label} onClick={(event) => event.currentTarget.closest('details').removeAttribute('open')}>{label}</a>)}<a href="#experiences" onClick={(event) => event.currentTarget.closest('details').removeAttribute('open')}>Experiences</a></div></details></nav></header>
    <main><Hero /><div className="yr-welcome-strip">{['Ayurveda', 'Therapies', 'Sound Healing', 'Yoga & Meditation', 'Spa & Wellness', 'Nature Stay', 'Holistic Food'].map((text) => <span key={text}>{text}</span>)}</div><Retreat /><Therapies /><Rooms /><Healing /><FoodSection /><FoodSection nonVeg /><Packages /><Experiences /></main>
    <footer className="yr-footer"><div className="yr-container"><a className="yr-brand" href="#yercaud-hero"><Mountain size={36} strokeWidth={1.2} /><span>Thaalam<small>Ayurvedic Sound Healing Retreat & Spa</small></span></a><p><MapPin size={15} />Kommakadu, Yercaud</p><a href="/">Thaalam ai <ArrowRight size={15} /></a><a href="#yercaud-hero">Back to top ↑</a></div></footer>
  </div>;
}
