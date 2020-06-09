/*
 * list of supported credit cards with RegExp rule to
 * validate the provided value.
 * It could be extended to allow adding an 'image' key to
 * add the logo for each brand.
 */

export interface Brand {
  name: string;
  rule: RegExp;
}

export default [
  { name: 'Visa', rule: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/ },
  { name: 'Mastercard', rule: /^(?:5[1-5][0-9]{14})$/ },
  { name: 'Amex', rule: /^(?:3[47][0-9]{13})$/ },
];
