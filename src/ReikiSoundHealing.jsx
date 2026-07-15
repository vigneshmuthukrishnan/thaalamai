import React from 'react';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Bed,
  Brain,
  Briefcase,
  CalendarDays,
  Check,
  Clock3,
  CloudOff,
  Frown,
  Heart,
  Languages,
  Leaf,
  MapPin,
  MessageCircle,
  Moon,
  Music2,
  Phone,
  PhoneOff,
  Shield,
  Sparkles,
  Star,
  SunMedium,
  Target,
  Timer,
  Users,
  Waves,
  Wind,
} from 'lucide-react';
import { logoSrc, paymentPageLink, phoneNumber, serviceOffer } from './serviceData';

const demoClassPrice = `${serviceOffer.amount}Rs`;

const eventDetails = [
  {
    label: 'Date',
    value: 'Date Announcing Soon',
    note: 'Workshop day',
    icon: CalendarDays,
  },
  {
    label: 'Time',
    value: '10:00 AM - 1:00 PM',
    note: '3 hours experience',
    icon: Clock3,
  },
  {
    label: 'Duration',
    value: '3 Hours',
    note: 'Reiki + sound journey',
    icon: Timer,
  },
  {
    label: 'Language',
    value: 'Tamil',
    note: 'Simple guided session',
    icon: Languages,
  },
  {
    label: 'Address',
    value: 'THAALAM Institute',
    note: 'Exact venue shared on booking',
    icon: MapPin,
  },
];
const whatsappLink = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(
  `Hi THAALAM, I want to reserve my seat for the Reiki + Sound Healing demo class (${demoClassPrice}).`,
)}`;

const painPoints = [
  'மன அழுத்தத்தில் இருக்கிறீர்களா?',
  'Anxiety, Depression, Overthinking அதிகமாக இருக்கிறதா?',
  'தூக்கம் சரியாக வரவில்லையா?',
  'எந்த வேலைக்கும் Focus இல்லையா?',
  'வாழ்க்கையில் ஏதோ ஒன்று Missing என்று தோன்றுகிறதா?',
  'Negative Energy-யிலிருந்து வெளியே வர முடியவில்லையா?',
];

const painPointIcons = [Frown, Brain, Bed, Target, Sparkles, CloudOff];

const experience = [
  {
    title: 'Body Relaxation',
    text: 'Release physical tightness through sound vibrations and breath.',
    icon: Heart,
    image: '/experience/body-relaxation.png',
    imagePosition: '68% 72%',
  },
  {
    title: 'Mind Reset',
    text: 'Slow down overthinking and return to a calmer inner rhythm.',
    icon: Brain,
    image: '/experience/mind-reset.png',
    imagePosition: '20% 52%',
  },
  {
    title: 'Emotional Cleansing',
    text: 'Create space to soften heavy emotions and feel lighter.',
    icon: Waves,
    image: '/experience/emotional-cleansing.png',
    imagePosition: '88% 58%',
  },
  {
    title: 'Energy Activation',
    text: 'Reconnect with positive energy through guided healing practices.',
    icon: Sparkles,
    image: '/experience/energy-activation.png',
    imagePosition: '78% 45%',
  },
  {
    title: 'Deep Meditation',
    text: 'Experience stillness with Himalayan bowl frequencies.',
    icon: Moon,
    image: '/experience/deep-meditation.png',
    imagePosition: '32% 65%',
  },
  {
    title: 'Spiritual Awakening',
    text: 'Open a fresh direction with awareness, balance, and inner harmony.',
    icon: SunMedium,
    image: '/experience/spiritual-awakening.png',
    imagePosition: '58% 38%',
  },
];

const learnings = [
  'Reiki Level 1 Initiation',
  'Aura Cleansing',
  'Chakra Balancing',
  'Tibetan Singing Bowl Healing',
  'Breath Reset Techniques',
  'Guided Meditation',
  'Sound Journey',
  'Stress Release Techniques',
  'Energy Protection Methods',
  'Self Healing Practice',
];

const audience = [
  'Business Owners',
  'Working Professionals',
  'Doctors',
  'Teachers',
  'Students',
  'Homemakers',
  'Entrepreneurs',
  'Spiritual Seekers',
  'Stress அதிகமாக இருப்பவர்கள்',
  'வாழ்க்கையில் ஒரு புதிய தொடக்கம் தேடுபவர்கள்',
];

const outcomes = [
  'மன அமைதி',
  'ஆழ்ந்த தூக்கம்',
  'அதிக Confidence',
  'உடல் லேசாக இருப்பது',
  'நல்ல Positive Energy',
  'Focus அதிகரித்தது',
  'Emotional Balance',
  'வாழ்க்கையை புதிய கோணத்தில் பார்க்கும் மனநிலை',
];

const whyThaalam = [
  { title: 'Experienced Trainer', icon: Award },
  { title: 'Scientific + Spiritual Approach', icon: Brain },
  { title: 'Authentic Reiki Initiation', icon: BadgeCheck },
  { title: 'Powerful Sound Healing Instruments', icon: Music2 },
  { title: 'Small Batch Training', icon: Users },
  { title: 'Personal Guidance', icon: Shield },
  { title: 'Peaceful Environment', icon: Leaf },
];

const workshopFlow = [
  { title: 'Himalayan Singing Bowls', icon: Music2 },
  { title: 'Therapeutic Sound Frequencies', icon: Waves },
  { title: 'Guided Meditation', icon: Moon },
  { title: 'Breath Work', icon: Wind },
  { title: 'Energy Healing', icon: Heart },
  { title: 'Chakra Activation', icon: Sparkles },
  { title: 'Deep Relaxation', icon: Leaf },
];

const imagineItems = [
  { title: 'Phone இல்லை', icon: PhoneOff },
  { title: 'Stress இல்லை', icon: CloudOff },
  { title: 'Overthinking இல்லை', icon: Brain },
  { title: 'இயற்கை', icon: Leaf },
  { title: 'Healing Sounds', icon: Music2 },
  { title: 'Meditation', icon: Moon },
  { title: 'Positive Energy', icon: Heart },
];

const bonuses = [
  'Reiki Level 1 Initiation',
  'Practice Guidance',
  'Healing Techniques',
  'Meditation Methods',
  'Lifetime Learning Community',
];

function IconTile({ icon: Icon, title }) {
  return (
    <div className="motion-card group rounded-lg border border-white/70 bg-white/78 p-5 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-premium">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-forest text-gold shadow-glow">
        <Icon size={21} strokeWidth={1.9} />
      </div>
      <p className="text-sm font-semibold leading-6 text-ink">{title}</p>
    </div>
  );
}

function SectionIntro({ eyebrow, title, text, align = 'center' }) {
  return (
    <div className={`mx-auto max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-5 text-base leading-8 text-ink/70 sm:text-lg">{text}</p> : null}
    </div>
  );
}

function CheckList({ items, columns = false }) {
  return (
    <div className={columns ? 'grid gap-3 sm:grid-cols-2 lg:grid-cols-3' : 'space-y-3'}>
      {items.map((item, index) => (
        <div
          key={item}
          className="motion-card flex items-start gap-3 rounded-lg border border-forest/10 bg-white/74 px-4 py-3 text-left shadow-sm"
          style={{ animationDelay: `${index * 45}ms` }}
        >
          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf text-white">
            <Check size={13} strokeWidth={3} />
          </span>
          <span className="text-sm font-medium leading-6 text-ink/82">{item}</span>
        </div>
      ))}
    </div>
  );
}

function EventDetailsSection() {
  return (
    <section className="section-reveal relative z-10 -mt-12 px-5 sm:px-7 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/86 p-4 shadow-premium backdrop-blur-xl sm:p-5 lg:p-6">
          <div className="event-glow absolute -right-20 -top-24 h-52 w-52 rounded-full bg-gold/25 blur-3xl" />
          <div className="event-glow absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-leaf/18 blur-3xl" />
          <div className="relative grid gap-4 lg:grid-cols-[0.9fr_1.6fr] lg:items-center">
            <div className="rounded-2xl bg-forest px-5 py-6 text-white shadow-glow sm:px-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">
                Workshop Details
              </p>
              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Reserve your calm space
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/74">
                Small batch healing experience with personal guidance. Pre-booking is required.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {eventDetails.map(({ label, value, note, icon: Icon }, index) => (
                <div
                  key={label}
                  className="event-card rounded-2xl border border-forest/10 bg-pearl/90 p-4 shadow-sm"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-forest shadow-sm ring-1 ring-gold/20">
                    <Icon size={21} strokeWidth={1.9} />
                  </div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold">
                    {label}
                  </p>
                  <p className="mt-2 text-base font-extrabold leading-6 text-ink">{value}</p>
                  <p className="mt-2 text-xs font-medium leading-5 text-ink/58">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="section-reveal relative overflow-hidden px-5 py-16 text-white sm:px-7 lg:px-10 lg:py-24">
      <img
        src="/experience/emotional-cleansing.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(20,32,29,0.95)_0%,rgba(20,32,29,0.88)_46%,rgba(20,32,29,0.68)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(201,149,63,0.22),transparent_34%),radial-gradient(circle_at_86%_74%,rgba(47,122,98,0.26),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold">
              Reiki + Sound Healing Experience
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              இது சாதாரண Workshop அல்ல
            </h2>
            <p className="mt-5 text-base leading-8 text-white/76 sm:text-lg">
              Body relaxation முதல் spiritual awakening வரை, உங்கள் mind, body, energy ஆகியவற்றை மெதுவாக reset செய்ய வடிவமைக்கப்பட்ட premium experience.
            </p>
            <div className="mt-8 rounded-2xl border border-white/12 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-semibold leading-7 text-white/84">
                A calm, guided journey using Reiki, singing bowls, breath reset, and meditation
                to support your body, mind, emotions, and energy.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {experience.map(({ title, text, icon: Icon, image, imagePosition }, index) => (
              <div
                key={title}
                className="experience-row group relative overflow-hidden rounded-2xl border border-white/14 bg-white/10 p-4 shadow-premium backdrop-blur"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <img
                  src={image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                  style={{ objectPosition: imagePosition }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,32,29,0.9)_0%,rgba(20,32,29,0.78)_54%,rgba(20,32,29,0.36)_100%)]" />
                <div className="relative flex items-center gap-4">
                  <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold text-forest shadow-glow">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-lg font-extrabold leading-6 text-white">{title}</p>
                    <p className="mt-1 text-sm font-medium leading-6 text-white/72">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReikiSoundHealing() {
  return (
    <main className="min-h-screen overflow-hidden bg-pearl font-sans text-ink">
      <section className="hero-section relative min-h-screen bg-forest text-white">
        <img
          src="/reiki-sound-healing-hero.png"
          alt="Premium sound healing studio with Himalayan singing bowls"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,32,29,0.93)_0%,rgba(20,32,29,0.76)_40%,rgba(20,32,29,0.28)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-pearl to-transparent" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 sm:px-7 lg:px-10">
          <header className="flex items-center justify-between gap-4">
            <a href="#top" className="flex items-center gap-3" aria-label="THAALAM home">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/35 bg-white p-1 shadow-glow">
                <img
                  src={logoSrc}
                  alt=""
                  className="h-full w-full rounded-full object-cover"
                />
              </span>
              <span>
                <span className="block text-sm font-bold tracking-[0.2em]">THAALAM</span>
                <span className="hidden text-xs text-white/70 sm:block">Reiki Sound Healing</span>
              </span>
            </a>
            <a
              href={whatsappLink}
              className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:inline-flex"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>
          </header>

          <div id="top" className="flex flex-1 items-center py-12 sm:py-16 lg:py-18">
            <div className="max-w-3xl">
              <div className="hero-kicker mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-gold backdrop-blur">
                <Sparkles size={15} />
                One Day Transformational Experience
              </div>
              <h1 className="hero-title font-display text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
                THAALAM Institute of Reiki Sound Healing
              </h1>
              <p className="hero-copy mt-6 max-w-2xl text-2xl font-medium leading-snug text-white/92 sm:text-3xl">
                உங்கள் வாழ்க்கை மாற ஒரு நாள் போதும்...
              </p>
              <p className="hero-copy mt-5 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
                Reiki, Himalayan singing bowls, breath reset, guided meditation, and energy healing
                in a peaceful small-batch workshop.
              </p>

              <div className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={paymentPageLink}
                  className="premium-action inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-forest shadow-glow transition hover:-translate-y-0.5 hover:bg-[#d8a752]"
                >
                  Reserve for Demo Class ({demoClassPrice})
                  <ArrowRight size={18} />
                </a>
                <a
                  href={`tel:+91${phoneNumber}`}
                  className="premium-action inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/12 px-6 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  <Phone size={18} />
                  Call 81480 98133
                </a>
              </div>

              {/* <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
                {['Limited Seats', 'Small Batch', 'Reiki Level 1'].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/14 bg-white/10 p-3 text-center backdrop-blur"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/82">
                      {item}
                    </p>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <EventDetailsSection />

      <section className="section-reveal relative px-5 py-16 sm:px-7 lg:px-10 lg:py-18">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-10">
            <SectionIntro
              eyebrow="You Are Not Alone"
              title="நீங்கள் இப்படி உணர்கிறீர்களா?"
              text="இந்த ஒரு நாள் அனுபவம் உங்கள் வாழ்க்கையின் திருப்புமுனையாக இருக்கலாம்."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {painPoints.map((point, index) => {
                const Icon = painPointIcons[index];
                return (
                <div
                  key={point}
                  className="pain-card group rounded-2xl border border-forest/10 bg-white p-6 text-center shadow-sm"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-mist text-forest shadow-sm ring-1 ring-gold/20 transition duration-300 group-hover:bg-forest group-hover:text-gold group-hover:shadow-glow">
                    <Icon size={29} strokeWidth={1.8} />
                  </div>
                  <p className="text-base font-semibold leading-7 text-ink/82">{point}</p>
                </div>
                );
              })}
            </div>
            <div className="motion-card rounded-2xl border border-gold/25 bg-[linear-gradient(135deg,#ffffff,#edf5ef)] p-6 text-center shadow-premium sm:p-8">
              <p className="text-lg font-bold text-leaf">💚 அப்படியானால்...</p>
              <p className="mt-3 font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
                இந்த ஒரு நாள் அனுபவம் உங்கள் வாழ்க்கையின் திருப்புமுனையாக இருக்கலாம்.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={paymentPageLink}
                  className="premium-action inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-ink"
                >
                  <Heart size={18} />
                  Reserve Demo Class ({demoClassPrice})
                </a>
                {/* <a
                  href={paymentPageLink}
                  className="premium-action inline-flex items-center justify-center gap-2 rounded-full border border-forest/15 bg-white px-6 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-forest transition hover:-translate-y-0.5 hover:bg-mist"
                >
                  Register Demo Class ({demoClassPrice})
                  <ArrowRight size={18} />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExperienceSection />

      <section className="hidden">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Reiki + Sound Healing Experience"
            title="இது சாதாரண Workshop அல்ல"
            text="Body relaxation முதல் spiritual awakening வரை, உங்கள் mind, body, energy ஆகியவற்றை மெதுவாக reset செய்ய வடிவமைக்கப்பட்ட premium experience."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {experience.map((item) => (
              <IconTile key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-reveal px-5 py-16 sm:px-7 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionIntro
              align="left"
              eyebrow="What You Learn"
              title="நீங்கள் என்ன கற்றுக்கொள்வீர்கள்?"
              text="A practical, guided learning experience with healing practices you can continue after the workshop."
            />
          </div>
          <CheckList items={learnings} columns />
        </div>
      </section>

      <section className="section-reveal bg-forest px-5 py-16 text-white sm:px-7 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold">
                Who Can Join
              </p>
              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                இந்த Course யாருக்கெல்லாம்?
              </h2>
              <p className="mt-5 text-base leading-8 text-white/72 sm:text-lg">
                Business, family, career, studies, or spiritual growth - this workshop is for
                anyone looking for calm, focus, and a fresh beginning.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {audience.map((item, index) => (
                <div
                  key={item}
                  className="motion-card flex items-center gap-3 rounded-lg border border-white/12 bg-white/8 px-4 py-3 backdrop-blur"
                  style={{ animationDelay: `${index * 45}ms` }}
                >
                  <Briefcase size={17} className="shrink-0 text-gold" />
                  <span className="text-sm font-semibold leading-6 text-white/88">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-reveal relative overflow-hidden bg-[linear-gradient(180deg,#173f35_0%,#173f35_50%,#fffaf0_50%,#fffaf0_100%)] px-5 py-16 sm:px-7 lg:bg-[linear-gradient(90deg,#173f35_0%,#173f35_50%,#fffaf0_50%,#fffaf0_100%)] lg:px-10 lg:py-24">
        <div className="absolute left-0 top-0 h-1/2 w-full lg:inset-y-0 lg:h-auto lg:w-1/2">
          <img
            src="/experience/energy-activation.png"
            alt=""
            className="h-full w-full object-cover opacity-[0.34]"
          />
          <div className="absolute inset-0 bg-forest/84" />
        </div>
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_78%_18%,rgba(201,149,63,0.16),transparent_28%),linear-gradient(180deg,#fffaf0,#edf5ef)] lg:block" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(201,149,63,0.14),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-start">
          <div className="section-panel rounded-[1.75rem] border border-white/16 bg-forest/64 p-6 text-white shadow-premium backdrop-blur-md sm:p-8 lg:p-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold">
              Why THAALAM
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Authentic, personal, peaceful
            </h2>
            <p className="mt-5 text-base leading-8 text-white/74">
              Scientific understanding and spiritual practice come together in a calm environment
              with personal guidance.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {whyThaalam.map(({ title, icon: Icon }, index) => (
                <div
                  key={title}
                  className="motion-card flex items-center gap-3 rounded-lg border border-white/14 bg-white/14 p-4 backdrop-blur"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-forest">
                    <Icon size={19} strokeWidth={2} />
                  </span>
                  <span className="text-sm font-semibold leading-6 text-white/88">{title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="section-panel rounded-[1.75rem] border border-white/45 bg-white/72 p-6 shadow-premium backdrop-blur-md sm:p-8 lg:p-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold">
              After The Course
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              பலர் பகிர்ந்த அனுபவங்கள்
            </h2>
            <p className="mt-5 text-base leading-8 text-ink/68">
              ஒவ்வொருவரின் அனுபவமும் மாறுபடலாம், ஆனால் பலருக்கு இந்த பயணம் அமைதி,
              தெளிவு, மற்றும் புதிய energy-ஐ கொடுத்துள்ளது.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {outcomes.map((item, index) => (
                <div
                  key={item}
                  className="motion-card flex items-start gap-3 rounded-lg border border-forest/10 bg-pearl/70 p-4 shadow-sm backdrop-blur"
                  style={{ animationDelay: `${index * 45}ms` }}
                >
                  <Star className="mt-0.5 shrink-0 text-gold" size={19} fill="currentColor" />
                  <p className="text-sm font-semibold leading-6 text-ink/82">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-reveal bg-[linear-gradient(180deg,#fffaf0_0%,#edf5ef_100%)] px-5 py-16 sm:px-7 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="section-panel relative overflow-hidden rounded-[2rem] bg-forest shadow-premium">
            <img
              src="/experience/deep-meditation.png"
              alt="Peaceful sound healing meditation experience"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,32,29,0.18)_0%,rgba(20,32,29,0.9)_100%)]" />
            <div className="relative z-10 flex min-h-[640px] flex-col justify-between p-5 text-white sm:p-7 lg:p-8">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold">
                  Imagine
                </p>
                <h2 className="max-w-md font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  ஒரு நாள் முழுவதும்...
                </h2>
                <p className="mt-4 max-w-md text-base leading-8 text-white/78">
                  Phone இல்லை. Stress இல்லை. Overthinking இல்லை. இயற்கை, healing sounds,
                  meditation, positive energy மட்டும்.
                </p>
              </div>

              <div className="mt-10">
                <div className="grid gap-3 sm:grid-cols-2">
                  {imagineItems.map(({ title, icon: Icon }, index) => (
                    <div
                      key={title}
                      className="imagine-chip flex items-center gap-3 rounded-lg border border-white/18 bg-white/14 p-3 shadow-sm backdrop-blur-md"
                      style={{ animationDelay: `${index * 60}ms` }}
                    >
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-leaf">
                        <Icon size={18} strokeWidth={2} />
                      </span>
                      <span className="text-sm font-extrabold leading-5 text-white">{title}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-[1.25rem] border border-white/18 bg-white/14 p-5 backdrop-blur-md">
                  <p className="font-display text-2xl font-semibold leading-tight">
                    இந்த ஒரு நாள்...
                  </p>
                  <p className="mt-3 text-sm font-medium leading-7 text-white/78">
                    உங்கள் வாழ்க்கையை புதிய திசைக்கு கொண்டு செல்லலாம்.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold">
              Workshop Experience
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
              இந்த Workshop-ல் நீங்கள் அனுபவிப்பது
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink/70 sm:text-lg">
              Sound healing, Reiki energy work, breath reset, and guided meditation are arranged
              like a calm journey from body relaxation to deep inner peace.
            </p>

            <div className="mt-9 space-y-5">
              {workshopFlow.map(({ title, icon: Icon }, index) => (
                <div
                  key={title}
                  className="journey-step relative grid grid-cols-[3rem_1fr] gap-4"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className="relative flex justify-center">
                    {index < workshopFlow.length - 1 ? (
                      <span className="absolute top-12 h-[calc(100%+1.25rem)] w-px bg-forest/12" />
                    ) : null}
                    <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-white text-leaf shadow-sm">
                      <Icon size={21} strokeWidth={1.9} />
                    </span>
                  </div>
                  <div className="border-b border-forest/10 pb-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
                      Step {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-1 text-lg font-extrabold leading-7 text-ink">{title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-reveal bg-[linear-gradient(180deg,#edf5ef_0%,#fffaf0_100%)] px-5 py-16 pb-32 sm:px-7 sm:py-20 sm:pb-32 lg:px-10 lg:py-24 lg:pb-36">
        <div className="section-panel mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-forest/10 bg-white shadow-premium">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
            <div className="relative overflow-hidden bg-forest p-7 text-white sm:p-10 lg:p-14">
              <img
                src="/experience/spiritual-awakening.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(20,32,29,0.98)_0%,rgba(20,32,29,0.92)_100%)]" />
              <div className="relative">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold">
                  Bonus + Limited Seats
                </p>
                <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  இன்று Register செய்யுங்கள்
                </h2>
                <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-white/90">
                  உங்கள் மனதிற்காக... உங்கள் உடலிற்காக... உங்கள் குடும்பத்திற்காக...
                  முக்கியமாக உங்களுக்காக.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {bonuses.map((item, index) => (
                    <div
                      key={item}
                      className="motion-card flex items-start gap-3 rounded-lg border border-white/14 bg-white/12 px-4 py-3 text-left backdrop-blur"
                      style={{ animationDelay: `${index * 55}ms` }}
                    >
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-forest">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <span className="text-sm font-semibold leading-6 text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[linear-gradient(135deg,#fffaf0,#edf5ef)] p-7 sm:p-10 lg:p-14">
              <div className="rounded-[1.5rem] border border-forest/12 bg-white p-6 shadow-premium sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-gold/14 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-gold">
                  <Sparkles size={15} />
                  Pre-booking Required
                </div>
                <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                  உங்கள் இடத்தை இப்போதே பதிவு செய்யுங்கள்.
                </h3>
                <p className="mt-4 text-base font-medium leading-8 text-ink/78">
                  எல்லோரையும் சேர்க்க முடியாது. சிறிய குழுவாக மட்டுமே நடத்தப்படுகிறது.
                </p>
                <div className="mt-8 space-y-3">
                  <a
                    href={paymentPageLink}
                    className="premium-action flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-ink"
                  >
                    <MessageCircle size={18} />
                    Book Demo Class ({demoClassPrice})
                  </a>
                  <a
                    href={`tel:+91${phoneNumber}`}
                    className="premium-action flex w-full items-center justify-center gap-2 rounded-full border border-forest/18 bg-white px-6 py-4 text-sm font-bold text-forest transition hover:bg-mist"
                  >
                    <Phone size={18} />
                    Call / WhatsApp 81480 98133
                  </a>
                  <a
                    href={paymentPageLink}
                    className="premium-action flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-forest shadow-glow transition hover:-translate-y-0.5 hover:bg-[#d7aa5b]"
                  >
                    Register for Demo Class ({demoClassPrice})
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a
        href={paymentPageLink}
        className="fixed inset-x-4 bottom-4 z-30 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-forest shadow-glow sm:hidden"
      >
        <MessageCircle size={18} />
        Register Demo Class ({demoClassPrice})
      </a>
    </main>
  );
}

export default ReikiSoundHealing;
