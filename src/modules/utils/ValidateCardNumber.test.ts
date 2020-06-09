import React from 'react';
import { isCardValid, getCardBrand } from './ValidateCardNumber';

const validCreditCardNumber = '5555555555554444';
const invalidCreditCardNumber = '5555555555554443';
const amexCreditCardNumber = '378282246310005';

test('Test getCardBrand', () => {
  const mastercardCard = getCardBrand(validCreditCardNumber);
  expect(mastercardCard).not.toBe(undefined);
  if (mastercardCard) {
    expect(mastercardCard.name).toBe('Mastercard');
  }

  const amexCard = getCardBrand(amexCreditCardNumber);
  expect(amexCard).not.toBe(undefined);
  if (amexCard) {
    expect(amexCard.name).toBe('Amex');
  }
});

test('Test the credit cards number validator', () => {
  const validCard = isCardValid(validCreditCardNumber);
  expect(validCard).toBe(true);

  const invalidCard = isCardValid(invalidCreditCardNumber);
  expect(invalidCard).toBe(false);
});
