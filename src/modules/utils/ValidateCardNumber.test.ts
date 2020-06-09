import React from 'react';
import { isCardValid, getCardBrand } from './ValidateCardNumber';

const validCreditCardNumber = '5555555555554444';
const invalidCreditCardNumber = '5555555555554443';

test('Test the credit cards number validator', () => {
  const validCard = isCardValid(validCreditCardNumber);
  expect(validCard).toBe(true);

  const invalidCard = isCardValid(invalidCreditCardNumber);
  expect(invalidCard).toBe(false);
});
