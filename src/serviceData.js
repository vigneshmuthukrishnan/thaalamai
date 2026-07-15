export const phoneNumber = '8148098133';
export const logoSrc = '/logo.jpeg';
export const reikiPageLink = '/Reiki-Sound-Healing';
export const paymentPageLink = `${reikiPageLink}/payment`;

export const serviceOffers = [
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
];

export const serviceOffer = serviceOffers[0];

export function getServiceOfferByPaymentPath(pathname) {
  const normalizedPath = pathname.replace(/\/+$/, '').toLowerCase() || '/';

  return (
    serviceOffers.find((offer) => {
      const normalizedPaymentPath = offer.paymentPageLink.toLowerCase();
      return (
        normalizedPath === normalizedPaymentPath ||
        normalizedPath.endsWith(normalizedPaymentPath)
      );
    }) || serviceOffer
  );
}

export function hasServiceOfferPaymentPath(pathname) {
  const normalizedPath = pathname.replace(/\/+$/, '').toLowerCase() || '/';

  return serviceOffers.some((offer) => {
    const normalizedPaymentPath = offer.paymentPageLink.toLowerCase();
    return (
      normalizedPath === normalizedPaymentPath ||
      normalizedPath.endsWith(normalizedPaymentPath)
    );
  });
}
