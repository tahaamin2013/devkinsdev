'use client'

import React, { useState } from "react";

const RandomNumberGenerator = () => {
  const [lowerLimit, setLowerLimit] = useState(1);
  const [upperLimit, setUpperLimit] = useState(100);
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const generateRandomNumber = () => {
    const min = Math.ceil(lowerLimit);
    const max = Math.floor(upperLimit);
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    setRandomNumber(randomNum);
  };

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Random Number Generator
      </h1>
      <div className="bg-white mx-4 rounded-xl border-2 px-5 py-4 flex flex-col items-center">
        <div className="flex flex-col items-center mb-4">
          <label htmlFor="lowerLimit" className="mr-2">
            Lower Limit:
          </label>
          <input
            type="number"
            id="lowerLimit"
            value={lowerLimit}
            onChange={(e) => setLowerLimit(parseInt(e.target.value))}
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="flex flex-col items-center mb-4">
          <label htmlFor="upperLimit" className="mr-2">
            Upper Limit:
          </label>
          <input
            type="number"
            id="upperLimit"
            value={upperLimit}
            onChange={(e) => setUpperLimit(parseInt(e.target.value))}
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <button
          onClick={generateRandomNumber}
          className="bg-primary py-2.5 px-5 font-bold text-white p-2 rounded"
        >
          Generate Random Number
        </button>
        {randomNumber !== null && (
          <p className="mt-4 text-2xl">Random Number: {randomNumber}</p>
        )}
      </div>
    </div>
  );
};

export default RandomNumberGenerator;
