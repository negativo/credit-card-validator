import React, { useState } from 'react';
import './App.css';
import { isCardValid, getCardBrand } from './modules/utils/index';

function App() {
  const [cardNumber, setCardNumber] = useState('');
  const cardBrand = getCardBrand(cardNumber);
  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          onChange={e => setCardNumber(e.currentTarget.value)}
        />
        <p>{cardNumber && isCardValid(cardNumber).toString()}</p>
        <p>{cardBrand && cardBrand.name}</p>
      </header>
    </div>
  );
}

export default App;
