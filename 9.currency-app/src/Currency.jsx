import React, { useState } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import axios from "axios";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const exchange = async () => {
    const response = await axios.get(
      `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_IxqBrF7tMDvorINnqLO2bSNBqDbAb8Jd1cjIe0HR&base_currency=${fromCurrency}`
    );

    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col space-y-6 justify-center items-center border p-8 rounded-md">
        <h4 className="head text-[min(10vw,20px)]">CURRENCY CONVERTER</h4>
        <div className="content-wrapper flex flex-col items-center space-y-5 sm:space-x-8 sm:space-y-0 sm:flex sm:flex-row">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="amount px-2 py-1 text-sm text-gray-600 border rounded-md border-gray-600 focus:border-black focus:outline-none"
          />

          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="from-currency-option"
          >
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>
          </select>

          <FaCircleArrowRight className="text-xl rotate-90 sm:rotate-0 p-2" />

          <select
            onChange={(e) => setToCurrency(e.target.value)}
            className="to-currency-option"
          >
            <option>EUR</option>
            <option>USD</option>
            <option>TRY</option>
          </select>
          <input
            type="number"
            value={result}
            onChange={(e) => setResult(e.target.value)}
            className="result px-2 py-1 text-sm text-gray-600 border rounded-md border-gray-600"
          />
        </div>
        <button
          onClick={exchange}
          className=" w-[30%] bg-black rounded-md text-white p-2 cursor-pointer hover:bg-white hover:text-black"
        >
          Currency
        </button>
      </div>
    </div>
  );
}

export default Currency;
