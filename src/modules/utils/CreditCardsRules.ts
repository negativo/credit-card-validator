/*
 * list of supported credit cards with 2 RegExp rules to
 * validate and to identify the provided value.
 * It could be extended to allow adding an 'image' key to
 * add the logo for each brand, and of course more card brands.
 */

export interface Brand {
  name: string;
  identifierRule: RegExp;
  validityRule: RegExp;
}

export default [
  {
    name: 'Visa',
    identifierRule: /^4/,
    validityRule: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/,
  },
  {
    name: 'Mastercard',
    identifierRule: /^5[1-5]/,
    validityRule: /^(?:5[1-5][0-9]{14})$/,
  },
  {
    name: 'Amex',
    identifierRule: /^3[47]/,
    validityRule: /^(?:3[47][0-9]{13})$/,
  },
];
