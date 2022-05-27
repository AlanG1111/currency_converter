import React from "react";
import { InputType } from "../../types";

import "./index.css";

const Input: React.FC<InputType> = ({ name, value, onChange }) => {
  return (
    <input
      className='curr-el'
      name={name}
      type='number'
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
};

export default Input;
