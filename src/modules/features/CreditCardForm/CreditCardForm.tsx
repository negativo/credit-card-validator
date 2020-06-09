import React, { useState } from 'react';
import {
  FormContainer,
  TextInput,
  Button,
  Label,
  LabelType,
} from '../../UI/components';

import { isCardValid, getCardBrand } from '../../utils';

const getMaskedInput = (value: string) => {
  const cardBrand = getCardBrand(value);
  if (cardBrand && cardBrand.name === 'Amex') {
    return value
      .replace(/[^\d0-9]/g, '')
      .replace(/(.{4})/, '$1 ')
      .replace(/(.{12})/, '$1 ')
      .trim();
  }
  return value
    .replace(/[^\d0-9]/g, '')
    .replace(/(.{4})/g, '$1 ')
    .trim();
};
export const CreditCardForm: React.StatelessComponent = ({ children }) => {
  const [cardNumber, setCardNumber] = useState('');
  const cardBrand = getCardBrand(cardNumber);
  const isCreditCardValid = isCardValid(cardNumber);
  return (
    <FormContainer>
      <TextInput
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          // Allow only numbers and Insert space every 4 chars
          if (e.currentTarget.value.length > 19) {
            return false;
          }
          const value = getMaskedInput(e.currentTarget.value);

          setCardNumber(value);
        }}
        label={`Card Number${cardBrand ? ': ' + cardBrand.name : ''}`}
        isValid={cardNumber ? isCreditCardValid : false}
        value={cardNumber}
      />

      {cardNumber && cardNumber.length > 17 && !isCreditCardValid && (
        <Label type={LabelType.Error}>
          Credit Card number is invalid. Please check it and try again!
        </Label>
      )}
      <Button disabled={!isCreditCardValid}>Submit</Button>
    </FormContainer>
  );
};
