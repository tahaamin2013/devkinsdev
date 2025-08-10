'use client'

import React, { useState } from "react";

const FactorCalculator = () => {
  const [number, setNumber] = useState<number | null>(null);
  const [factors, setFactors] = useState<number[]>([]);
  const [factorPairs, setFactorPairs] = useState<[number, number][]>([]);
  const [primeFactors, setPrimeFactors] = useState<number[]>([]);

  const calculateFactors = (num: number) => {
    const factorsArr: number[] = [];
    const factorPairsArr: [number, number][] = [];
    const primeFactorsArr: number[] = [];

    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        factorsArr.push(i);
        factorPairsArr.push([i, num / i]);
      }
    }

    for (let j = 2; j <= num; j++) {
      while (num % j === 0) {
        primeFactorsArr.push(j);
        num /= j;
      }
    }

    setFactors(factorsArr);
    setFactorPairs(factorPairsArr);
    setPrimeFactors(primeFactorsArr);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (number !== null && number > 0) {
      calculateFactors(number);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Factor Calculator</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl border-2 px-5 py-4 flex flex-col items-center sm:w-2/3 md:w-1/2 lg:w-1/3">
        <label htmlFor="number" className="mb-2">Enter a number:</label>
        <input
          type="number"
          id="number"
          value={number || ''}
          onChange={(e) => setNumber(parseInt(e.target.value))}
          className="border border-gray-300 p-2 rounded mb-4 w-full"
          required
        />
        <button
          type="submit"
          className="bg-primary py-2.5 px-5 font-bold text-white p-2 rounded w-full"
        >
          Calculate Factors
        </button>
      </form>
      {factors.length > 0 && (
        <div className="bg-white rounded-xl border-2 px-5 py-4 flex flex-col items-center mt-4 sm:w-2/3 md:w-1/2 lg:w-1/3">
          <p className="text-xl font-bold mb-4">Factors: {factors.join(', ')}</p>
          <p className="text-xl font-bold mb-4">Factor Pairs: {factorPairs.map(pair => `(${pair[0]}, ${pair[1]})`).join(' ')}</p>
          <p className="text-xl font-bold mb-4">Prime factors: {primeFactors.join(' × ')}</p>
        </div>
      )}
    </div>
  );
};

export default FactorCalculator;