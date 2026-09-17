import assert from 'node:assert/strict';
import { test, afterEach } from 'node:test';
import {
  getServiceOfferForPayment,
  getServiceOfferByPaymentPath,
  hasServiceOfferPaymentPath,
  rememberServiceOffer,
  serviceOffer,
  yercaudOfferId,
  yercaudPaymentPageLink,
  shivashakthiAksharamOfferId,
} from '../src/serviceData.js';

afterEach(() => { delete globalThis.window; });

function mockStorage() {
  const values = new Map();
  globalThis.window = { sessionStorage: {
    setItem: (key, value) => values.set(key, value),
    getItem: (key) => values.get(key) ?? null,
  } };
}

test('direct Yercaud checkout charges the 1000 advance', () => {
  const offer = getServiceOfferForPayment(yercaudPaymentPageLink);
  assert.equal(offer.id, yercaudOfferId);
  assert.equal(offer.amount, 1000);
  assert.equal(offer.pageLink, '/thaalam-yercaud');
});

test('dedicated checkout wins over a stored 99 service', () => {
  mockStorage();
  for (const id of [serviceOffer.id, shivashakthiAksharamOfferId]) {
    rememberServiceOffer(id);
    assert.equal(getServiceOfferForPayment(yercaudPaymentPageLink).id, yercaudOfferId);
    assert.equal(getServiceOfferForPayment(yercaudPaymentPageLink).amount, 1000);
  }
});

test('specific path wins over the shared payment suffix', () => {
  assert.equal(getServiceOfferByPaymentPath('/THAALAM-YERCAUD/PAYMENT/').id, yercaudOfferId);
  assert.equal(getServiceOfferByPaymentPath('/site/thaalam-yercaud/payment').amount, 1000);
  assert.equal(hasServiceOfferPaymentPath(yercaudPaymentPageLink), true);
  assert.equal(hasServiceOfferPaymentPath('/thaalam-yercaud'), false);
});

test('existing generic checkout defaults to the 99 Reiki class', () => {
  assert.equal(serviceOffer.id, 'reiki-sound-healing-workshop');
  assert.equal(getServiceOfferForPayment('/payment').id, serviceOffer.id);
  assert.equal(getServiceOfferForPayment('/payment').amount, 99);
});

test('existing selected yantra booking keeps its 99 checkout', () => {
  mockStorage();
  rememberServiceOffer(shivashakthiAksharamOfferId);
  assert.equal(getServiceOfferForPayment('/payment').id, shivashakthiAksharamOfferId);
  assert.equal(getServiceOfferForPayment('/payment').amount, 99);
});

test('restricted storage does not block direct checkout', () => {
  globalThis.window = { get sessionStorage() { throw new Error('Storage unavailable'); } };
  assert.doesNotThrow(() => rememberServiceOffer(yercaudOfferId));
  assert.equal(getServiceOfferForPayment(yercaudPaymentPageLink).amount, 1000);
  assert.equal(getServiceOfferForPayment('/payment').amount, 99);
});
