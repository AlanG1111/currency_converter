import React from "react";
import { SelectType } from "../../types";

import "./index.css";

const Select: React.FC<SelectType> = ({ currency, value, onChange }) => {
  const options = currency.map((item: string, index: number) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <select
      className='curr-el'
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options}
    </select>
  );
};

export default Select;
