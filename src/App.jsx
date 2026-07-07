import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  LineChart,
  Megaphone,
  PenLine,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaSnapchat,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const navItems = ["Platforms", "Services", "Why Us", "About", "Contact"];

const platforms = [
  { name: "Facebook", icon: FaFacebookF, color: "from-[#1778f2] to-[#08a4ff]" },
  { name: "Instagram", icon: FaInstagram, color: "from-[#833ab4] via-[#fd1d86] to-[#fcb045]" },
  { name: "X", icon: FaXTwitter, color: "from-[#060606] to-[#2f3542]" },
  { name: "LinkedIn", icon: FaLinkedinIn, color: "from-[#0a66c2] to-[#35a8ff]" },
  { name: "YouTube", icon: FaYoutube, color: "from-[#ff0033] to-[#ff6b4a]" },
  { name: "TikTok", icon: FaTiktok, color: "from-[#000000] via-[#111827] to-[#25f4ee]" },
  { name: "Pinterest", icon: FaPinterestP, color: "from-[#e60023] to-[#ff4f6d]" },
  { name: "Snapchat", icon: FaSnapchat, color: "from-[#fffc00] to-[#ffb800]" },
];

const services = [
  {
    title: "Content Creation",
    text: "Scroll-stopping creatives, captions, reels, and campaign concepts built around your brand voice.",
    icon: PenLine,
    accent: "text-violet",
  },
  {
    title: "Social Media Management",
    text: "Consistent publishing, profile optimization, calendar planning, and day-to-day channel care.",
    icon: LineChart,
    accent: "text-magenta",
  },
  {
    title: "Paid Ads",
    text: "Performance campaigns across Meta, LinkedIn, YouTube, and more with practical conversion tracking.",
    icon: Megaphone,
    accent: "text-ember",
  },
  {
    title: "Community Management",
    text: "Audience replies, inbox support, comment handling, and engagement rituals that build trust.",
    icon: Users,
    accent: "text-ocean",
  },
  {
    title: "Analytics",
    text: "Clear reporting on reach, engagement, growth, and the insights that should shape next month.",
    icon: BarChart3,
    accent: "text-emerald-500",
  },
  {
    title: "Strategy Consulting",
    text: "Positioning, campaign roadmaps, content pillars, and growth systems for smarter decisions.",
    icon: Target,
    accent: "text-violet",
  },
];

const reasons = [
  {
    title: "AI-assisted precision",
    text: "Creative decisions backed by data, trend signals, and audience behavior.",
    icon: Sparkles,
  },
  {
    title: "Premium brand feel",
    text: "Every post is shaped to look consistent, polished, and unmistakably yours.",
    icon: ShieldCheck,
  },
  {
    title: "Growth-first execution",
    text: "We connect content, ads, and reporting so momentum compounds over time.",
    icon: Rocket,
  },
];

const stats = [
  ["More", "Engagement"],
  ["More", "Reach"],
  ["More", "Growth"],
];

const heroLogos = [
  { name: "Facebook", icon: FaFacebookF, className: "left-[8%] top-[20%]", color: "from-[#1778f2] to-[#08a4ff]" },
  { name: "Instagram", icon: FaInstagram, className: "right-[11%] top-[18%]", color: "from-[#833ab4] via-[#fd1d86] to-[#fcb045]" },
  { name: "X", icon: FaXTwitter, className: "left-[20%] bottom-[18%]", color: "from-[#060606] to-[#2f3542]" },
  { name: "LinkedIn", icon: FaLinkedinIn, className: "right-[22%] bottom-[16%]", color: "from-[#0a66c2] to-[#35a8ff]" },
  { name: "YouTube", icon: FaYoutube, className: "left-[42%] top-[5%]", color: "from-[#ff0033] to-[#ff6b4a]" },
  { name: "TikTok", icon: FaTiktok, className: "right-[4%] top-[48%]", color: "from-[#000000] via-[#111827] to-[#25f4ee]" },
  { name: "Pinterest", icon: FaPinterestP, className: "left-[4%] top-[55%]", color: "from-[#e60023] to-[#ff4f6d]" },
  { name: "Snapchat", icon: FaSnapchat, className: "right-[44%] bottom-[2%]", color: "from-[#fffc00] to-[#ffb800]" },
];

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Thaalam AI home">
          <img
            src="/thaalam.jpeg"
            alt="Thaalam AI logo"
            className="h-12 w-12 rounded-2xl object-contain shadow-glow"
          />
          <span className="leading-none">
            <span className="block text-xl font-black tracking-wide text-ink">Thaalam ai</span>
            <span className="mt-1 block text-[0.63rem] font-bold uppercase tracking-[0.32em] text-slate-500">
              Social Media
            </span>
          </span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-semibold text-slate-600 transition hover:text-violet"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="gradient-button inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5"
        >
          <span>Start Growth</span>
          <ArrowRight size={17} />
        </a>
      </nav>
    </header>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-extrabold uppercase tracking-[0.28em] gradient-text">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black leading-tight text-ink sm:text-4xl lg:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{text}</p> : null}
    </div>
  );
}

function SocialMediaHeroGraphic() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-glow sm:min-h-[500px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_14%,rgba(7,136,245,0.18),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(240,20,153,0.16),transparent_26%),radial-gradient(circle_at_50%_92%,rgba(255,138,25,0.18),transparent_30%)]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 520" aria-hidden="true">
        <defs>
          <linearGradient id="heroOrbit" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#0788f5" />
            <stop offset="45%" stopColor="#6112d6" />
            <stop offset="72%" stopColor="#f01499" />
            <stop offset="100%" stopColor="#ff8a19" />
          </linearGradient>
        </defs>
        <circle cx="260" cy="260" r="202" fill="none" stroke="url(#heroOrbit)" strokeWidth="2" opacity="0.3" />
        <circle cx="260" cy="260" r="142" fill="none" stroke="url(#heroOrbit)" strokeDasharray="10 12" strokeWidth="3" opacity="0.4" />
        <path
          d="M88 330 C150 410 265 450 378 392 C446 356 485 286 474 208"
          fill="none"
          stroke="url(#heroOrbit)"
          strokeLinecap="round"
          strokeWidth="18"
          opacity="0.13"
        />
        <path
          d="M64 198 C102 96 218 38 334 74 C417 100 475 173 482 258"
          fill="none"
          stroke="url(#heroOrbit)"
          strokeLinecap="round"
          strokeWidth="14"
          opacity="0.16"
        />
      </svg>

      <div className="absolute left-1/2 top-1/2 grid h-40 w-40 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[2rem] bg-white p-5 shadow-glow sm:h-48 sm:w-48">
        <div className="absolute -inset-2 rounded-[2.25rem] bg-gradient-to-br from-ocean via-violet to-magenta opacity-15 blur-xl" />
        <img src="/thaalam.jpeg" alt="Thaalam AI logo" className="relative h-full w-full object-contain" />
      </div>

      {heroLogos.map(({ name, icon: Icon, className, color }) => (
        <div
          key={name}
          className={`absolute ${className} group`}
          aria-label={name}
        >
          <div className={`grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br ${color} text-white shadow-soft transition duration-300 group-hover:-translate-y-2 group-hover:scale-110 sm:h-20 sm:w-20`}>
            <Icon size={32} />
          </div>
        </div>
      ))}

      <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] bg-ink px-5 py-4 text-white shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/70">All platforms. One strategy.</span>
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold">AI powered growth</span>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-20 sm:pt-20">
      <div className="absolute left-0 top-20 h-48 w-48 rounded-full bg-violet/10 blur-3xl" />
      <div className="absolute right-0 top-24 h-56 w-56 rounded-full bg-ocean/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-24">
        <div>
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-slate-600 shadow-soft">
            <span className="text-ocean">Smart Strategy.</span>
            <span className="text-violet">Stronger Presence.</span>
            <span className="text-ember">Real Results.</span>
          </div>
          <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[1.05] text-ink sm:text-5xl lg:text-7xl">
            Social Media Services That <span className="gradient-text">Grow Your Brand</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Build brand recognition, engage the right audience, and turn attention into measurable business growth with Thaalam AI.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="gradient-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-bold text-white shadow-glow transition hover:-translate-y-1"
            >
              <span>Explore Services</span>
              <ChevronRight size={20} />
            </a>
            <a
              href="#platforms"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-bold text-ink shadow-soft transition hover:-translate-y-1 hover:border-ocean/40"
            >
              <Zap size={20} className="text-ember" />
              View Platforms
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 overflow-hidden rounded-[1.75rem] bg-ink p-2 text-white shadow-glow">
            {stats.map(([top, bottom]) => (
              <div key={bottom} className="border-r border-white/15 px-3 py-4 text-center last:border-r-0">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/58">{top}</p>
                <p className="mt-1 text-sm font-extrabold sm:text-base">{bottom}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-ocean/20 via-magenta/20 to-ember/20 blur-2xl" />
          <SocialMediaHeroGraphic />
        </div>
      </div>
    </section>
  );
}

function Platforms() {
  return (
    <section id="platforms" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Major Platforms"
          title="We manage every channel your audience cares about"
          text="A unified strategy across discovery, engagement, paid reach, and conversion-focused social storytelling."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {platforms.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="group rounded-3xl border border-white bg-white p-4 text-center shadow-soft transition duration-300 hover:-translate-y-2 hover:border-ocean/20"
            >
              <div className={`mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg transition duration-300 group-hover:scale-110`}>
                <Icon size={30} />
              </div>
              <p className="mt-4 text-sm font-extrabold text-ink">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Everything needed to build, manage, and scale your presence"
          text="From strategy to daily execution, Thaalam AI keeps your social media active, consistent, and performance-aware."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, text, icon: Icon, accent }) => (
            <article
              key={title}
              className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-violet/20 hover:shadow-glow"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-50 transition group-hover:bg-white">
                  <Icon size={38} className={accent} />
                </div>
                <span className="h-2 w-16 rounded-full bg-gradient-to-r from-ocean via-magenta to-ember opacity-60" />
              </div>
              <h3 className="text-xl font-black text-ink">{title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-ink py-20 text-white sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px glass-line" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-magenta/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-ocean/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-orange-300">Why Choose Us</p>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Your brand. Our strategy. Real results.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/72">
            We pair creative polish with practical growth systems so your social media looks premium and performs with purpose.
          </p>
        </div>
        <div className="grid gap-5">
          {reasons.map(({ title, text, icon: Icon }) => (
            <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
              <div className="flex gap-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-violet">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-2 leading-7 text-white/68">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-ocean via-violet to-magenta p-8 text-white shadow-glow">
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-ember/70 blur-2xl" />
          <div className="absolute left-8 top-8 h-16 w-16 rounded-3xl bg-white/18" />
          <div className="relative flex h-full min-h-[300px] flex-col justify-end">
            <Rocket size={56} />
            <h2 className="mt-8 text-4xl font-black leading-tight">Building brands that move with culture.</h2>
            <p className="mt-5 max-w-md leading-8 text-white/78">
              Strategy, content, management, and reporting shaped for modern teams that want sharper social growth.
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] gradient-text">About Thaalam AI</p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-ink sm:text-4xl">
            Social media services with intelligent planning and human creativity.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Thaalam AI helps brands create a stronger digital presence through content that feels current, campaigns that stay organized, and reporting that makes the next move obvious.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {["Creative calendars", "Paid ad funnels", "Audience engagement", "Monthly reports"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-soft">
                <CheckCircle2 className="text-ocean" size={21} />
                <span className="font-bold text-ink">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-glow">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-gradient-to-br from-ocean via-violet to-magenta p-8 text-white sm:p-10 lg:p-12">
              <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-white/70">Contact</p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">Ready to grow your brand?</h2>
              <p className="mt-5 leading-8 text-white/78">
                Tell us what you want to build. We will shape a social media plan for stronger presence and real results.
              </p>
              <div className="mt-8 space-y-4">
                {["Strategy-first social planning", "Platform-specific content", "Clear monthly performance reporting"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={20} />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <form className="grid gap-5 p-8 sm:p-10 lg:p-12">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-bold text-ink">Name</span>
                  <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-violet focus:ring-4 focus:ring-violet/10" placeholder="Your name" />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-bold text-ink">Email</span>
                  <input type="email" className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-violet focus:ring-4 focus:ring-violet/10" placeholder="you@example.com" />
                </label>
              </div>
              <label className="grid gap-2">
                <span className="text-sm font-bold text-ink">Service Interest</span>
                <select className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-violet focus:ring-4 focus:ring-violet/10">
                  <option>Social Media Management</option>
                  <option>Content Creation</option>
                  <option>Paid Ads</option>
                  <option>Strategy Consulting</option>
                </select>
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold text-ink">Message</span>
                <textarea className="min-h-32 rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-violet focus:ring-4 focus:ring-violet/10" placeholder="Tell us about your brand goals" />
              </label>
              <button type="button" className="gradient-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-bold text-white shadow-glow transition hover:-translate-y-1">
                <span>Send Inquiry</span>
                <Send size={19} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 text-center sm:flex-row sm:text-left lg:px-8">
        <div>
          <p className="text-xl font-black text-ink">Thaalam ai</p>
          <p className="mt-1 text-sm font-semibold text-slate-500">Smart Strategy. Stronger Presence. Real Results.</p>
        </div>
        <div className="flex gap-3">
          {platforms.slice(0, 5).map(({ name, icon: Icon }) => (
            <a
              key={name}
              href="#platforms"
              aria-label={name}
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:-translate-y-1 hover:border-violet hover:text-violet"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Platforms />
      <Services />
      <WhyChooseUs />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
