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
  return rules.some(brand => brand.rule.test(card));
};

export const getCardBrand = (card: string): Brand | undefined => {
  return rules.find(brand => brand.rule.test(card));
};

export const isCardValid = (card: string): boolean => {
  if (!isKnownCreditCard(card)) {
    return false;
  }
  return prepareForValidation(card).reduce(luhnReducer) % 10 === 0
    ? true
    : false;
};
