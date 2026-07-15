import React, { useState } from 'react';
import { ArrowRight, Check, CreditCard, Mail, MapPin, Phone, Sparkles, User } from 'lucide-react';
import { getServiceOfferByPaymentPath, logoSrc } from './serviceData';

const cashfreeOrderUrl =
  import.meta.env.VITE_CASHFREE_ORDER_URL ||
  'https://mydreamstechnology.in/cashfree_api/create-order.php';

function loadCashfreeSdk() {
  return new Promise((resolve, reject) => {
    if (window.Cashfree) {
      resolve(window.Cashfree);
      return;
    }

    const existingScript = document.querySelector(
      'script[src="https://sdk.cashfree.com/js/v3/cashfree.js"]',
    );
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(window.Cashfree));
      existingScript.addEventListener('error', reject);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://sdk.cashfree.com/js/v3/cashfree.js';
    script.async = true;
    script.onload = () => resolve(window.Cashfree);
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

export default function PaymentPage() {
  const serviceOffer = getServiceOfferByPaymentPath(window.location.pathname);
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const formattedAmount = `Rs. ${serviceOffer.amount}`;

  const updateCustomer = (field) => (event) => {
    setCustomer((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleCashfreePayment = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    setStatus('Preparing secure Cashfree checkout...');

    try {
      const response = await fetch(cashfreeOrderUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceId: serviceOffer.id,
          amount: serviceOffer.amount,
          customer,
        }),
      });

      if (!response.ok) {
        const errorPayload = await response.json().catch(() => null);
        const cashfreeMessage =
          errorPayload?.cashfree?.message ||
          errorPayload?.cashfree?.code ||
          errorPayload?.details;
        throw new Error(
          cashfreeMessage
            ? `${errorPayload?.message || 'Cashfree order creation failed.'} ${cashfreeMessage}`
            : errorPayload?.message || 'Cashfree order creation failed.',
        );
      }

      const order = await response.json();
      const paymentSessionId = order.payment_session_id || order.paymentSessionId;

      if (!paymentSessionId) {
        throw new Error('Cashfree payment session id missing.');
      }

      const Cashfree = await loadCashfreeSdk();
      const cashfree = Cashfree({ mode: order.cashfree_mode || 'sandbox' });
      await cashfree.checkout({
        paymentSessionId,
        redirectTarget: '_self',
      });
    } catch (error) {
      setStatus(error.message || 'Cashfree checkout could not be started. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#edf5ef_0%,#fffaf0_100%)] px-5 py-7 text-ink sm:px-7 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-7 flex items-center justify-center">
          <a href={serviceOffer.pageLink} className="inline-flex flex-col items-center gap-2" aria-label="Back to THAALAM">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-1 shadow-glow ring-1 ring-gold/25">
              <img src={logoSrc} alt="" className="h-full w-full rounded-full object-cover" />
            </span>
            <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-gold">
              THAALAM
            </span>
          </a>
        </header>

        <div className="grid gap-5 lg:grid-cols-[0.95fr_1fr] lg:items-start">
          <section className="section-panel overflow-hidden rounded-[1.5rem] border border-forest/10 bg-white shadow-premium">
            <div className="relative aspect-[4/3] overflow-hidden bg-forest">
              <img
                src={serviceOffer.image}
                alt={serviceOffer.shortTitle}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(20,32,29,0.76)_100%)]" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                  {serviceOffer.badge || `${serviceOffer.language} Program`}
                </p>
                <h1 className="mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  {serviceOffer.shortTitle}
                </h1>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h2 className="text-xl font-extrabold leading-7 text-ink">
                {serviceOffer.expectationsTitle || 'What to expect'}
              </h2>
              <div className="mt-5 space-y-3">
                {serviceOffer.expectations.map((item, index) => (
                  <div
                    key={item}
                    className="motion-card flex items-start gap-3"
                    style={{ animationDelay: `${index * 55}ms` }}
                  >
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-forest">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <p className="text-sm font-semibold leading-6 text-ink/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-panel rounded-[1.5rem] border border-gold/55 bg-pearl p-5 shadow-premium sm:p-8">
            <div className="text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-gold">
                Secure Registration
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
                Are you ready to reserve your seat?
              </h2>
              <p className="mt-6 text-2xl font-black text-ink">
                {serviceOffer.priceLabel || 'Registration Fee'} {formattedAmount}
                <span className="ml-2 align-middle text-xs font-bold text-ink/58">
                  {serviceOffer.gstNote}
                </span>
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-forest/10 bg-white/80 p-5 text-center">
              <MapPin className="mx-auto text-leaf" size={22} />
              <h3 className="mt-2 text-lg font-extrabold text-ink">Location</h3>
              <p className="mt-2 text-sm font-bold leading-6 text-ink/76">{serviceOffer.location}</p>
              <p className="text-xs font-medium leading-5 text-ink/58">{serviceOffer.locationNote}</p>
            </div>

            <p className="mt-5 text-center text-sm font-extrabold leading-6 text-red-600">
              Note: The program will be conducted in Tamil
            </p>

            <form className="mt-5 space-y-3" onSubmit={handleCashfreePayment}>
              <label className="relative block">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/38" size={17} />
                <input
                  required
                  value={customer.name}
                  onChange={updateCustomer('name')}
                  className="h-12 w-full rounded-lg border border-forest/18 bg-white pl-10 pr-4 text-sm font-semibold outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
                  placeholder="Name"
                />
              </label>
              <label className="relative block">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/38" size={17} />
                <input
                  required
                  type="email"
                  value={customer.email}
                  onChange={updateCustomer('email')}
                  className="h-12 w-full rounded-lg border border-forest/18 bg-white pl-10 pr-4 text-sm font-semibold outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
                  placeholder="Email ID"
                />
              </label>
              <label className="relative block">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/38" size={17} />
                <input
                  required
                  value={customer.phone}
                  onChange={updateCustomer('phone')}
                  className="h-12 w-full rounded-lg border border-forest/18 bg-white pl-10 pr-4 text-sm font-semibold outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
                  placeholder="Phone Number"
                />
              </label>

              <div className="rounded-xl border border-forest/10 bg-white p-4">
                <div className="flex items-center justify-between border-b border-forest/10 pb-3 text-xs font-bold uppercase tracking-[0.14em] text-ink/52">
                  <span>Item</span>
                  <span>Price</span>
                </div>
                <div className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="font-extrabold text-ink">{serviceOffer.shortTitle}</p>
                    <p className="mt-1 text-xs font-medium text-ink/55">{serviceOffer.duration}</p>
                  </div>
                  <p className="font-black text-ink">{formattedAmount}</p>
                </div>
                <div className="flex items-center justify-between border-t border-forest/10 pt-4">
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-ink/52">Total</p>
                  <p className="text-xl font-black text-ink">{formattedAmount}.00</p>
                </div>
              </div>

              <div className="rounded-xl border border-gold/35 bg-white p-4">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-ink/52">
                  Pay via
                </p>
                <div className="mt-3 flex items-center gap-3 rounded-lg border border-leaf/20 bg-mist px-4 py-3">
                  <CreditCard className="text-leaf" size={20} />
                  <span className="font-extrabold text-ink">Cashfree Payments</span>
                </div>
              </div>

              {status ? (
                <p className="rounded-lg bg-gold/12 p-3 text-sm font-semibold leading-6 text-ink/72">
                  {status}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isProcessing}
                className="premium-action flex w-full items-center justify-center gap-2 rounded-lg bg-[#26a942] px-6 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#208c39] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isProcessing ? 'Processing...' : 'Complete Order'}
                <ArrowRight size={18} />
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
