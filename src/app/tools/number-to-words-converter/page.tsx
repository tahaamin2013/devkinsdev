'use client'

import React, { useState } from 'react';
import { toWords } from 'number-to-words';

const NumberToWordsConverter: React.FC = () => {
  const [number, setNumber] = useState<number | string>('');
  const [words, setWords] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setNumber(value);
    }
  };

  const convertNumberToWords = () => {
    if (number !== '') {
      const num = parseInt(number as string);
      setWords(toWords(num));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Number to Words Converter</h1>
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg">
        <input
          type="text"
          value={number}
          onChange={handleChange}
          placeholder="Enter number"
          className="mb-4 px-4 py-2 border rounded"
        />
        <button
          onClick={convertNumberToWords}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Convert
        </button>
        {words && (
          <p className="mt-4 text-xl">
            <strong>Result:</strong> {words}
          </p>
        )}
      </div>
    </div>
  );
};

export default NumberToWordsConverter;
