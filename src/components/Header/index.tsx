import React, { useEffect, useState } from "react";
import { getCurrency } from "../../services/getCurrencies";

import "./index.css";

const Header: React.FC = () => {
  const [rateUSD, setRateUSD] = useState<number>();
  const [rateEUR, setRateEUR] = useState<number>();

  const ROUND_UP_CURRENCY: number = 4;

  useEffect(() => {
    getCurrency("USD", "UAH").then(({ result: { UAH } }) => {
      setRateUSD(UAH.toFixed(ROUND_UP_CURRENCY));
    });
    getCurrency("EUR", "UAH").then(({ result: { UAH } }) => {
      setRateEUR(UAH.toFixed(ROUND_UP_CURRENCY));
    });
  }, []);

  return (
    <header className='header'>
      <div className='currency-rate'>
        <span className='secondary-currency'>1 USD = </span>
        <span>{rateUSD} UAH</span>
      </div>
      <div className='currency-rate'>
        <span className='secondary-currency'>1 EUR = </span>
        <span>{rateEUR} UAH</span>
      </div>
    </header>
  );
};

export default Header;
