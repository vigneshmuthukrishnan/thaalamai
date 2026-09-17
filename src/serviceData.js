export const phoneNumber = '8148098133';
export const logoSrc = '/logo.jpeg';
export const reikiPageLink = '/Reiki-Sound-Healing';
export const shivashakthiAksharamPageLink = '/shivashakthiAksharam';
export const shivashakthiAksharamAltPageLink = '/SHIVASHAKTHI-AKSHARAM';
export const paymentPageLink = '/payment';
export const yercaudPageLink = '/thaalam-yercaud';
export const yercaudPaymentPageLink = '/thaalam-yercaud/payment';
export const yercaudOfferId = 'thaalam-yercaud-advance';
export const shivashakthiAksharamOfferId = 'shivashakthi-aksharam-booking';
const selectedServiceOfferStorageKey = 'thaalam:selected-service-offer';

export const serviceOffers = [
  {
    id: yercaudOfferId,
    pageLink: yercaudPageLink,
    paymentPageLink: yercaudPaymentPageLink,
    title: 'Thaalam Yercaud Advance Payment',
    shortTitle: 'Thaalam Yercaud',
    badge: 'Retreat Advance Booking',
    priceLabel: 'Advance Payment',
    checkoutLabel: 'Secure Advance Payment',
    checkoutTitle: 'Reserve your Thaalam Yercaud stay',
    submitLabel: 'Pay ₹1,000 Advance',
    expectationsTitle: 'Your retreat booking',
    amount: 1000,
    gstNote: 'Advance only',
    image: '/yercaud/retreat.jpg',
    location: 'Thaalam, Kommakadu, Yercaud',
    locationNote: 'Ayurvedic Sound Healing Retreat & Spa',
    duration: 'Retreat booking advance',
    description: 'Advance payment for a Thaalam Yercaud retreat booking.',
    note: 'This ₹1,000 payment is an advance only, not the full retreat package price.',
    expectations: [
      '₹1,000 advance payment for your Thaalam Yercaud retreat booking.',
      'Ayurvedic Sound Healing Retreat & Spa in Kommakadu, Yercaud.',
      'The remaining amount depends on your selected retreat package.',
    ],
  },
  {
    id: 'reiki-sound-healing-workshop', 
    pageLink: reikiPageLink,
    paymentPageLink,
    title: 'THAALAM Reiki + Sound Healing Demo Class',
    shortTitle: 'Reiki + Sound Healing Demo Class',
    badge: 'Tamil Demo Class',
    priceLabel: 'Demo Class Fee',
    expectationsTitle: 'What to expect from this demo class',
    amount: 99,
    gstNote: 'Inclusive of GST',
    image: '/reiki-sound-healing-hero.png',
    location: 'THAALAM Institute',
    locationNote: 'Exact venue shared after booking',
    language: 'Tamil',
    duration: 'Demo class only',
    description:
      'A Reiki and sound healing demo class for calm, focus, and positive energy.',
    expectations: [
      'Demo introduction to Reiki and sound healing practices.',
      'Simple guided relaxation and breath reset experience.',
      'Basic understanding of energy healing and singing bowl vibrations.',
      'A peaceful session to experience calm, focus, and positive energy.',
      'Guidance for the next full workshop or healing program.',
    ],
  },
  {
    id: shivashakthiAksharamOfferId,
    pageLink: shivashakthiAksharamPageLink,
    paymentPageLink,
    title: 'SHIVASHAKTHI AKSHARAM Advance Booking',
    shortTitle: 'SHIVASHAKTHI AKSHARAM',
    badge: 'Advance Booking',
    priceLabel: 'Advance Booking Fee',
    expectationsTitle: 'What this booking includes',
    amount: 99,
    gstNote: 'Advance only',
    image: '/THIRUNANGAI%20ARULVAKKU/hero.jpeg',
    location: 'THAALAM',
    locationNote: 'Booking details shared after confirmation',
    language: 'Tamil',
    duration: 'Personal yantra booking advance',
    description:
      'Advance booking for SHIVASHAKTHI AKSHARAM personal yantra guidance.',
    note: 'Note: This is an advance booking amount only.',
    expectations: [
      'Advance confirmation for SHIVASHAKTHI AKSHARAM service.',
      'Your name, rasi, nakshatra, and problem details will be collected.',
      'Prasannam-based personal yantra guidance will be shared.',
      'Final service details and next steps will be confirmed after booking.',
    ],
  },
];

export const serviceOffer = serviceOffers.find((offer) => offer.id === 'reiki-sound-healing-workshop');

function normalizePath(pathname) {
  const normalizedPath = pathname.replace(/\/+$/, '').toLowerCase() || '/';
  return normalizedPath;
}

export function rememberServiceOffer(offerId) {
  try {
    window.sessionStorage.setItem(selectedServiceOfferStorageKey, offerId);
  } catch {
    // Session storage may be unavailable in private or restricted browser contexts.
  }
}

export function getServiceOfferById(offerId) {
  return serviceOffers.find((offer) => offer.id === offerId) || null;
}

export function getSelectedServiceOffer() {
  try {
    return getServiceOfferById(window.sessionStorage.getItem(selectedServiceOfferStorageKey));
  } catch {
    return null;
  }
}

export function getServiceOfferByPaymentPath(pathname) {
  const normalizedPath = normalizePath(pathname);

  return (
    [...serviceOffers].sort((a, b) => b.paymentPageLink.length - a.paymentPageLink.length).find((offer) => {
      const normalizedPaymentPath = offer.paymentPageLink.toLowerCase();
      return (
        normalizedPath === normalizedPaymentPath ||
        normalizedPath.endsWith(normalizedPaymentPath)
      );
    }) || serviceOffer
  );
}

export function getServiceOfferForPayment(pathname) {
  const pathOffer = getServiceOfferByPaymentPath(pathname);
  // A dedicated checkout URL must not be overridden by an earlier booking.
  if (pathOffer.paymentPageLink !== paymentPageLink) return pathOffer;
  return getSelectedServiceOffer() || pathOffer;
}

export function hasServiceOfferPaymentPath(pathname) {
  const normalizedPath = normalizePath(pathname);

  return serviceOffers.some((offer) => {
    const normalizedPaymentPath = offer.paymentPageLink.toLowerCase();
    return (
      normalizedPath === normalizedPaymentPath ||
      normalizedPath.endsWith(normalizedPaymentPath)
    );
  });
}
