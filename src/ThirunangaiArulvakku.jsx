import React from 'react';
import {
  ArrowRight,
  Check,
  Gem,
  Heart,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react';
import { logoSrc, phoneNumber } from './serviceData';

const imageBasePath = '/THIRUNANGAI%20ARULVAKKU';
const heroImage = `${imageBasePath}/thirunangai%20arulvakku.png`;

const whatsappLink = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(
  'வணக்கம் THAALAM, ராசி யந்திர பரிகாரம் பற்றி தெரிந்து கொள்ள வேண்டும்.',
)}`;

const rasiItems = [
  {
    name: 'மேஷம்',
    title: 'மேஷ ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra: 'பால சண்முக ஷடாக்ஷர யந்திரம்',
    images: ['rasi1.jpeg', 'rasi2.jpeg', 'rasi3.jpeg'],
  },
  {
    name: 'ரிஷபம்',
    title: 'ரிஷப ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra:
      'திருநங்கை கைகளால் உங்களுக்கு மஹாலட்சுமி யந்திரம் எந்திரம் எழுதி பூஜை செய்து உருவேற்றி தரப்படும்',
    images: ['rasi4.jpeg', 'rasi5.jpeg'],
  },
  {
    name: 'மிதுனம்',
    title: 'மிதுன ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra:
      'உங்கள் பிரச்சனைகளுக்கு ஏற்ப திருநங்கை கைகளால் உங்களுக்கு ஸ்ரீ தன ஆகர்ஷன யந்திரம் எழுதி பூஜை செய்து உருவேற்றி தரப்படும்.',
    images: ['rasi6.jpeg', 'rasi7.jpeg', 'rasi8.jpeg'],
  },
  {
    name: 'கடகம்',
    title: 'கடக ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra:
      'திருநங்கை கைகளால் உங்களுக்கு ஸ்ரீ துர்கா யந்திரம் எழுதி பூஜை செய்து உருவேற்றி தரப்படும்.',
    images: ['rasi9.jpeg'],
  },
  {
    name: 'சிம்மம்',
    title: 'சிம்ம ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra:
      'திருநங்கை கைகளால் உங்களுக்கு ஸ்ரீ சிதம்பர சக்கரம் எந்திரம் எழுதி பூஜை செய்து உருவேற்றி தரப்படும்.',
    images: ['rasi10.jpeg'],
  },
  {
    name: 'கன்னி',
    title: 'கன்னி ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra:
      'திருநங்கை கைகளால் உங்களுக்கு ஸ்ரீ சுதர்ஸன யந்திரம் எழுதி பூஜை செய்து உருவேற்றி தரப்படும்.',
    images: ['rasi11.jpeg'],
  },
  {
    name: 'துலா',
    title: 'துலா ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra:
      'திருநங்கை கைகளால் உங்களுக்கு ஸ்ரீ சூலினி யந்திரம் எழுதி பூஜை செய்து உருவேற்றி தரப்படும்.',
    images: ['rasi12.jpeg'],
  },
  {
    name: 'விருச்சிகம்',
    title: 'விருச்சிக ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra:
      'திருநங்கை கைகளால் உங்களுக்கு பாலசண்முக ஷாடத்ச்சர யந்திரம் எழுதி பூஜை செய்து உருவேற்றி தரப்படும்.',
    images: ['rasi13.jpeg'],
  },
  {
    name: 'தனுசு',
    title: 'தனுசு ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra:
      'திருநங்கை கைகளால் உங்களுக்கு தன சக்ர யந்திரம் எழுதி பூஜை செய்து உருவேற்றி தரப்படும்.',
    images: ['rasi14.jpeg'],
  },
  {
    name: 'மகரம்',
    title: 'மகரம் ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra:
      'திருநங்கை கைகளால் உங்களுக்கு ஸ்ரீ பைரவ யந்திரம் எழுதி பூஜை செய்து உருவேற்றி தரப்படும்.',
    images: ['rasi15.jpeg'],
  },
  {
    name: 'கும்பம்',
    title: 'கும்பம் ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra:
      'திருநங்கை கைகளால் உங்களுக்கு ஸ்ரீ கணபதி யந்திரம் எழுதி பூஜை செய்து உருவேற்றி தரப்படும்.',
    images: ['rasi16.jpeg'],
  },
  {
    name: 'மீனம்',
    title: 'மீன ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra:
      'திருநங்கை கைகளால் உங்களுக்கு ஸ்ரீ குபேர தன ஆகர்சண யந்திரம் எழுதி பூஜை செய்து உருவேற்றி தரப்படும்.',
    images: ['rasi17.jpeg'],
  },
];

const summaryItems = [
  'ராசிப்படி யந்திர பரிகாரம்',
  'பூஜை செய்து உருவேற்றி தரப்படும்',
  'THAALAM வழிகாட்டுதல்',
];

function imagePath(fileName) {
  return `${imageBasePath}/${fileName}`;
}

function RasiCard({ item, index }) {
  return (
    <article
      className="motion-card overflow-hidden rounded-lg border border-forest/10 bg-white shadow-premium"
      style={{ animationDelay: `${index * 45}ms` }}
    >
      <div className={`grid gap-1 bg-forest p-1 ${item.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {item.images.map((image, imageIndex) => (
          <img
            key={image}
            src={imagePath(image)}
            alt={`${item.name} ராசி யந்திரம் ${imageIndex + 1}`}
            className={`h-52 w-full object-cover ${item.images.length === 3 && imageIndex === 0 ? 'col-span-2' : ''}`}
          />
        ))}
      </div>
      <div className="p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/14 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-gold">
            <Star size={14} fill="currentColor" />
            {item.name}
          </span>
          <span className="text-xs font-black text-forest/35">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <h2 className="text-lg font-extrabold leading-8 text-ink">{item.title}</h2>
        <p className="mt-4 rounded-lg border border-forest/10 bg-mist/70 p-4 text-base font-semibold leading-8 text-forest">
          {item.yantra}
        </p>
      </div>
    </article>
  );
}

function ThirunangaiArulvakku() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fffaf0_0%,#edf5ef_100%)] font-sans text-ink">
      <section className="relative overflow-hidden bg-forest text-white">
        <img
          src={heroImage}
          alt="திருநங்கை அருள்வாக்கு"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,32,29,0.96)_0%,rgba(20,32,29,0.82)_48%,rgba(20,32,29,0.42)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-pearl to-transparent" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col px-5 py-5 sm:px-7 lg:px-10">
          <header className="flex items-center justify-between gap-4">
            <a href="/" className="flex items-center gap-3" aria-label="THAALAM home">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/35 bg-white p-1 shadow-glow">
                <img src={logoSrc} alt="" className="h-full w-full rounded-full object-cover" />
              </span>
              <span>
                <span className="block text-sm font-bold tracking-[0.2em]">THAALAM</span>
                <span className="hidden text-xs text-white/70 sm:block">திருநங்கை அருள்வாக்கு</span>
              </span>
            </a>
            <a
              href={whatsappLink}
              className="premium-action inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>
          </header>

          <div className="flex flex-1 items-center py-12 sm:py-16">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-gold backdrop-blur">
                <Sparkles size={15} />
                ராசி யந்திர பரிகாரம்
              </div>
              <h1 className="font-display text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
                திருநங்கை அருள்வாக்கு
              </h1>
              <p className="mt-6 max-w-2xl text-xl font-medium leading-9 text-white/86 sm:text-2xl">
                உங்கள் ராசிக்கேற்ப பிரச்சனைகள் தீரவும், வாழ்க்கையில் வெற்றி பெறவும்
                யந்திரம் எழுதி பூஜை செய்து உருவேற்றி தரப்படும்.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#rasi"
                  className="premium-action inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-forest shadow-glow transition hover:-translate-y-0.5"
                >
                  <Gem size={18} />
                  ராசி பார்க்க
                </a>
                <a
                  href={`tel:+91${phoneNumber}`}
                  className="premium-action inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/12 px-6 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  <Phone size={18} />
                  Call 81480 98133
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-14 px-5 sm:px-7 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-[1.25rem] border border-white/70 bg-white/90 p-4 shadow-premium backdrop-blur sm:grid-cols-3 sm:p-5">
          {summaryItems.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg bg-pearl px-4 py-4">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest text-gold">
                <Check size={18} strokeWidth={3} />
              </span>
              <p className="text-sm font-extrabold leading-6 text-ink">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="rasi" className="px-5 py-16 sm:px-7 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">
              12 ராசிகள்
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
              உங்கள் ராசிக்கான யந்திர பரிகாரம்
            </h2>
            <p className="mt-5 text-base leading-8 text-ink/68 sm:text-lg">
              கீழே உள்ள ராசிகளில் உங்கள் ராசியை பார்த்து, THAALAM-ஐ தொடர்பு கொள்ளுங்கள்.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {rasiItems.map((item, index) => (
              <RasiCard key={item.name} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest px-5 py-14 text-white sm:px-7 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">
              THAALAM
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              உங்கள் ராசி யந்திரத்திற்கு தொடர்பு கொள்ளுங்கள்
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/74">
              உங்கள் பிரச்சனை மற்றும் ராசி விவரங்களை பகிர்ந்தால் வழிகாட்டுதல் வழங்கப்படும்.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink}
              className="premium-action inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-forest shadow-glow transition hover:-translate-y-0.5"
            >
              <ShieldCheck size={18} />
              WhatsApp
            </a>
            <a
              href={`tel:+91${phoneNumber}`}
              className="premium-action inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-forest transition hover:-translate-y-0.5"
            >
              Call Now
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <a
        href={whatsappLink}
        className="fixed inset-x-4 bottom-4 z-30 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-forest shadow-glow sm:hidden"
      >
        <Heart size={18} />
        WhatsApp THAALAM
      </a>
    </main>
  );
}

export default ThirunangaiArulvakku;
