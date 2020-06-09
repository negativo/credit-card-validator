/*
 * CreditCard Validator using the Luhn Formula:
 *
 * 1. From the rightmost digit and moving left,
 * double the value of every other digit: the
 * first rightmost digit is not doubled, then
 * the second rightmost digit is doubled, the
 * third is not doubled, the fourth is doubled, etc.
 *
 * 2. If the result of the doubling operation is greater
 * than 9 (e.g., 8 × 2 = 16), then subtract 9 from that
 * result (e.g., 16: 16 − 9 = 7, 18: 18 − 9 = 9).
 *
 * 3. Take the sum of all the digits.
 *
 * 4. If the total is a multiple of 10 (modulo 10 is
 * equal to 0) then the number is valid according to the
 * Luhn formula; otherwise it is not valid.
 *
 * */

import rules, { Brand } from './CreditCardsRules';

const prepareForValidation = (cardNumber: string): Array<number> => {
  return cardNumber
    .split('') //convert string to array
    .reverse() //reverse the array since we start from right
    .map(x => parseInt(x, 10)); //convert the characters to numbers
};

const luhnReducer = (
  accumulator: number,
  currentValue: number,
  i: number,
): number => {
  let value = currentValue;

  if (i % 2 !== 0) {
    value = currentValue * 2;
    value = value > 9 ? value - 9 : value;
  }

  return accumulator + value;
};

const isKnownCreditCard = (card: string): boolean => {
  return rules.some(brand => brand.validityRule.test(card));
};

export const getCardBrand = (card: string): Brand | undefined => {
  const cardValue = card.replace(/ /g, '');
  return rules.find(brand => brand.identifierRule.test(cardValue));
};

export const isCardValid = (card: string): boolean => {
  const cardValue = card.replace(/ /g, '');
  if (!isKnownCreditCard(cardValue)) {
    return false;
  }

  const preparedCard = prepareForValidation(cardValue);
  return preparedCard.reduce(luhnReducer) % 10 === 0 ? true : false;
};
