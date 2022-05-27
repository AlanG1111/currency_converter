import React from "react";
import Header from "../Header";
import Converter from "../CurrencyConverter";

import "./index.css";

const App: React.FC = () => {
  return (
    <div className='app'>
      <Header />
      <Converter />
    </div>
  );
};

export default App;
