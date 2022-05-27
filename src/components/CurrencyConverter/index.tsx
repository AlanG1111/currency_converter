import React from "react";
import { useState, useEffect } from "react";

import Select from "../CurrencySelect";
import Input from "../CurrencyInput";

import { getCurrency, getCurrencyList } from "../../services/getCurrencies";
import { DataType } from "../../types";

import "./index.css";

const Converter: React.FC = () => {
  const FIRST_RENDER_VALUE: number = 1;
  const ROUND_UP_CURRENCY: number = 4;

  const [currency, setCurrency] = useState<string[]>([]);
  const [rate, setRate] = useState<number>();
  const [amount, setAmount] = useState<number>(FIRST_RENDER_VALUE);
  const [currencyFrom, setCurrencyFrom] = useState<string>("");
  const [currencyTo, setCurrencyTo] = useState<string>("");
  const [directConvertation, setDirectConvertation] = useState<boolean>(true);

  let toAmount, fromAmount;

  const handleFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
    setDirectConvertation(true);
  };

  const handleTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
    setDirectConvertation(false);
  };

  useEffect(() => {
    getCurrencyList().then((data: DataType) => {
      setCurrency(Object.keys(data.results));
      setCurrencyTo(Object.keys(data.results)[0]);
      setCurrencyFrom(data.base);
    });
  }, []);

  useEffect(() => {
    if (currencyFrom && currencyTo) {
      getCurrency(currencyFrom, currencyTo).then((data) => {
        setRate(data.result[currencyTo]);
      });
    }
  }, [currencyFrom, currencyTo]);

  if (directConvertation) {
    fromAmount = amount;
    toAmount = Number((amount * Number(rate)).toFixed(ROUND_UP_CURRENCY));
  } else {
    toAmount = amount;
    fromAmount = Number((amount / Number(rate)).toFixed(ROUND_UP_CURRENCY));
  }

  return (
    <div className='converter'>
      <span>From</span>
      <div className='currency-block'>
        <Input
          name={"currency-from"}
          value={fromAmount}
          onChange={handleFrom}
        />
        <Select
          currency={currency}
          value={currencyFrom}
          onChange={setCurrencyFrom}
        />
      </div>
      <span>To</span>
      <div className='currency-block'>
        <Input name={"currency-to"} value={toAmount} onChange={handleTo} />
        <Select
          currency={currency}
          value={currencyTo}
          onChange={setCurrencyTo}
        />
      </div>
    </div>
  );
};

export default Converter;
