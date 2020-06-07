export interface Brand {
  name: string;
  rule: RegExp;
}

export default [
  { name: 'visa', rule: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/ },
  { name: 'mastercard', rule: /^(?:5[1-5][0-9]{14})$/ },
  { name: 'amex', rule: /^(?:3[47][0-9]{13})$/ },
];
