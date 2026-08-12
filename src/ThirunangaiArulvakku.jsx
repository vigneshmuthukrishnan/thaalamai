import React, { useEffect } from 'react';
import {
  ArrowRight,
  Check,
  CreditCard,
  Gem,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  SunMedium,
} from 'lucide-react';
import {
  logoSrc,
  paymentPageLink,
  phoneNumber,
  rememberServiceOffer,
  shivashakthiAksharamOfferId,
} from './serviceData';

const imageBasePath = '/THIRUNANGAI%20ARULVAKKU';
const heroImage = `${imageBasePath}/hero.jpeg`;
const bottomImages = ['new_1.jpeg', 'new_2.jpeg'];

const whatsappLink = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(
  'வணக்கம் THAALAM, ராசி யந்திர பரிகாரம் பற்றி தெரிந்து கொள்ள வேண்டும்.',
)}`;

const rasiItems = [
  {
    name: 'மேஷம்',
    title: 'மேஷ ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra: 'பால சண்முக ஷடாக்ஷர யந்திரம்',
    images: ['rasi1.jpeg'],
    writingImages: ['writing1.jpeg'],
  },
  {
    name: 'ரிஷபம்',
    title: 'ரிஷப ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra:
      'திருநங்கை கைகளால் உங்களுக்கு மஹாலட்சுமி யந்திரம் எந்திரம் எழுதி பூஜை செய்து உருவேற்றி தரப்படும்',
    images: ['rasi5.jpeg'],
    writingImages: ['writing4.jpeg'],
  },
  {
    name: 'மிதுனம்',
    title: 'மிதுன ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra:
      'உங்கள் பிரச்சனைகளுக்கு ஏற்ப திருநங்கை கைகளால் உங்களுக்கு ஸ்ரீ தன ஆகர்ஷன யந்திரம் எழுதி பூஜை செய்து உருவேற்றி தரப்படும்.',
    images: ['rasi6.jpeg'],
    writingImages: ['writing8.jpeg'],
  },
  {
    name: 'கடகம்',
    title: 'கடக ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra:
      'திருநங்கை கைகளால் உங்களுக்கு ஸ்ரீ துர்கா யந்திரம் எழுதி பூஜை செய்து உருவேற்றி தரப்படும்.',
    images: ['rasi9.jpeg'],
    writingImages: ['writing9.jpeg'],
  },
  {
    name: 'சிம்மம்',
    title: 'சிம்ம ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra:
      'திருநங்கை கைகளால் உங்களுக்கு ஸ்ரீ சிதம்பர சக்கரம் எந்திரம் எழுதி பூஜை செய்து உருவேற்றி தரப்படும்.',
    images: ['rasi10.jpeg'],
    writingImages: ['writing10.jpeg'],
  },
  {
    name: 'கன்னி',
    title: 'கன்னி ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra:
      'திருநங்கை கைகளால் உங்களுக்கு ஸ்ரீ சுதர்ஸன யந்திரம் எழுதி பூஜை செய்து உருவேற்றி தரப்படும்.',
    images: ['rasi11.jpeg'],
    writingImages: ['writing11.jpeg'],
  },
  {
    name: 'துலா',
    title: 'துலா ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra:
      'திருநங்கை கைகளால் உங்களுக்கு ஸ்ரீ சூலினி யந்திரம் எழுதி பூஜை செய்து உருவேற்றி தரப்படும்.',
    images: ['rasi12.jpeg'],
    writingImages: ['writing12.jpeg'],
  },
  {
    name: 'விருச்சிகம்',
    title: 'விருச்சிக ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra:
      'திருநங்கை கைகளால் உங்களுக்கு பாலசண்முக ஷாடத்ச்சர யந்திரம் எழுதி பூஜை செய்து உருவேற்றி தரப்படும்.',
    images: ['rasi13.jpeg'],
    writingImages: ['writing15.jpeg'],
  },
  {
    name: 'தனுசு',
    title: 'தனுசு ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra:
      'திருநங்கை கைகளால் உங்களுக்கு தன சக்ர யந்திரம் எழுதி பூஜை செய்து உருவேற்றி தரப்படும்.',
    images: ['rasi14.jpeg'],
    writingImages: ['writing16.jpeg'],
  },
  {
    name: 'மகரம்',
    title: 'மகரம் ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra:
      'திருநங்கை கைகளால் உங்களுக்கு ஸ்ரீ பைரவ யந்திரம் எழுதி பூஜை செய்து உருவேற்றி தரப்படும்.',
    images: ['rasi15.jpeg'],
    writingImages: ['writing17.jpeg'],
  },
  {
    name: 'கும்பம்',
    title: 'கும்பம் ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra:
      'திருநங்கை கைகளால் உங்களுக்கு ஸ்ரீ கணபதி யந்திரம் எழுதி பூஜை செய்து உருவேற்றி தரப்படும்.',
    images: ['rasi16.jpeg'],
    writingImages: ['writing18.jpeg'],
  },
  {
    name: 'மீனம்',
    title: 'மீன ராசிக்காரர்கள் வாழ்க்கையில் வெற்றி பெற பிரச்சனைகள் தீர...',
    yantra:
      'திருநங்கை கைகளால் உங்களுக்கு ஸ்ரீ குபேர தன ஆகர்சண யந்திரம் எழுதி பூஜை செய்து உருவேற்றி தரப்படும்.',
    images: ['rasi17.jpeg'],
    writingImages: [ 'writing20.jpeg'],
  },
];

const summaryItems = [
  'பிரசன்னம் பார்த்து எந்திரம்',
  'ஒவ்வொருவருக்கும் தனிப்பட்ட முறை',
  'பூஜை போட்டு வழங்கப்படும்',
];

const bottomPoints = [
  'உங்கள் பெயர்',
  'உங்கள் ராசி',
  'உங்கள் நட்சத்திரம்',
  'உங்கள் பிரச்சனைக்கு ஏற்ப பிரத்யேக எந்திரம்',
];

function imagePath(fileName) {
  return `${imageBasePath}/${fileName}`;
}

function ImageGrid({ images, getAlt, className = '' }) {
  return (
    <div className={`grid gap-1 bg-forest p-1 ${images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} ${className}`}>
      {images.map((image, imageIndex) => (
        <img
          key={image}
          src={imagePath(image)}
          alt={getAlt(imageIndex)}
          className={`h-48 w-full object-cover ${images.length === 3 && imageIndex === 0 ? 'col-span-2 h-56' : ''}`}
        />
      ))}
    </div>
  );
}

function RasiCard({ item, index }) {
  return (
    <article
      className="motion-card overflow-hidden rounded-lg border border-forest/10 bg-white shadow-premium"
      style={{ animationDelay: `${index * 45}ms` }}
    >
      <ImageGrid
        images={item.images}
        getAlt={(imageIndex) => `${item.name} ராசி யந்திரம் ${imageIndex + 1}`}
      />
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
      <div className="border-t border-forest/10 bg-pearl/70 p-4">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-gold">
          எழுதும் காட்சி
        </p>
        <ImageGrid
          images={item.writingImages}
          getAlt={(imageIndex) => `${item.name} ராசி எழுதும் காட்சி ${imageIndex + 1}`}
          className="overflow-hidden rounded-lg"
        />
      </div>
    </article>
  );
}

function ThirunangaiArulvakku() {
  const captureBookingOffer = () => rememberServiceOffer(shivashakthiAksharamOfferId);

  useEffect(() => {
    document.title = 'SHIVASHAKTHI AKSHARAM';
    rememberServiceOffer(shivashakthiAksharamOfferId);
  }, []);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fffaf0_0%,#edf5ef_100%)] font-sans text-ink">
      <section className="relative overflow-hidden bg-forest text-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#173f35_0%,#281b33_58%,#5b271c_100%)]" />
        <img
          src={heroImage}
          alt="சிவசக்தி அக்ஷரம்"
          className="absolute inset-0 h-full w-full object-cover opacity-36"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,32,29,0.96)_0%,rgba(20,32,29,0.84)_48%,rgba(20,32,29,0.44)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-pearl to-transparent" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col px-5 py-5 sm:px-7 lg:px-10">
          <header className="flex items-center justify-between gap-4">
            <a href="/" className="flex items-center gap-3" aria-label="THAALAM home">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/35 bg-white p-1 shadow-glow">
                <img src={logoSrc} alt="" className="h-full w-full rounded-full object-cover" />
              </span>
              <span>
                <span className="block text-sm font-bold tracking-[0.2em]">THAALAM</span>
                <span className="hidden text-xs text-white/70 sm:block">SHIVASHAKTHI AKSHARAM</span>
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

          <div className="grid flex-1 items-center gap-10 py-12 sm:py-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-gold backdrop-blur">
                <Sparkles size={15} />
                திருநங்கை கைகளால்
              </div>
              <h1 className="font-display text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
                சிவசக்தி அக்ஷரம்
              </h1>
              <p className="mt-6 max-w-2xl text-xl font-medium leading-9 text-white/86 sm:text-2xl">
                திருநங்கை கைகளால் ஒவ்வொருவருக்கும் பிரத்தியேகமாக எழுதப்பட்டு
                பூஜை போட்டு தரப்படுகிறது.
              </p>
              <div className="mt-8 grid max-w-lg gap-3 sm:grid-cols-2">
                <a
                  href="#rasi"
                  className="premium-action flex min-h-14 items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-extrabold leading-5 text-forest shadow-glow transition hover:-translate-y-0.5"
                >
                  <Gem size={18} />
                  <span>ராசி பார்க்க</span>
                </a>
                <a
                  href={paymentPageLink}
                  onClick={captureBookingOffer}
                  className="premium-action flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-center text-sm font-extrabold leading-5 text-forest transition hover:-translate-y-0.5"
                >
                  <CreditCard size={18} />
                  <span>Advance Rs.99</span>
                </a>
              </div>
            </div>
            <div className="section-panel overflow-hidden rounded-[1.25rem] border border-white/20 bg-white/10 shadow-premium backdrop-blur">
              <img
                src={heroImage}
                alt="பிரசன்னம் பார்த்து தனிப்பட்ட எந்திரம்"
                className="aspect-video w-full object-cover"
              />
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
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">
              பிரசன்னம்
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              பிரசன்னம் பார்த்து தனிப்பட்ட எந்திரம்
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/74">
              உங்கள் பிரச்சனைகளுக்கு ஏற்ப பிரசன்னம் பார்த்து, ஒவ்வொருவருக்கும் தனிப்பட்ட
              முறையில் எந்திரம் எழுதித்தரப்படும்.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {bottomPoints.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-white/12 bg-white/10 p-4">
                  <SunMedium size={18} className="shrink-0 text-gold" />
                  <span className="text-sm font-semibold leading-6 text-white/88">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-gold/35 bg-gold/12 p-5">
              <p className="text-2xl font-black text-gold">கட்டணம்: ₹2,500 மட்டுமே</p>
              <p className="mt-3 text-sm font-medium leading-7 text-white/74">
                ஒவ்வொருவருக்கும் தனித்தனியாக தயாரித்து வழங்கப்படும். இது பாரம்பரிய
                ஆன்மிக நம்பிக்கையை அடிப்படையாகக் கொண்ட சேவை.
              </p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={paymentPageLink}
                onClick={captureBookingOffer}
                className="premium-action inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-forest shadow-glow transition hover:-translate-y-0.5"
              >
                <CreditCard size={18} />
                Advance Booking Rs.99
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
          <div className="grid gap-4">
            {bottomImages.map((image) => (
              <img
                key={image}
                src={imagePath(image)}
                alt="பிரசன்னம் பார்த்து தனிப்பட்ட எந்திரம்"
                className="w-full rounded-lg border border-white/14 object-cover shadow-premium"
              />
            ))}
          </div>
        </div>
      </section>

      <a
        href={paymentPageLink}
        onClick={captureBookingOffer}
        className="fixed inset-x-4 bottom-4 z-30 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-forest shadow-glow sm:hidden"
      >
        <CreditCard size={18} />
        Advance Booking Rs.99
      </a>
    </main>
  );
}

export default ThirunangaiArulvakku;
