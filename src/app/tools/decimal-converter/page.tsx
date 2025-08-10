"use client";

import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [convertedText, setConvertedText] = useState("");

  const handleConvertToDecimal = () => {
    const decimalArray = inputText.split("").map((char) => char.charCodeAt(0));
    setConvertedText(decimalArray.join(" "));
  };

  const handleConvertToText = () => {
    const decimalArray = convertedText.split(" ").map(Number);
    const text = String.fromCharCode(...decimalArray);
    setConvertedText(text);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Decimal Converter</h2>
        <textarea
          className="w-full h-32 border border-gray-300 rounded p-2 mb-4"
          placeholder="Enter text or decimal..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <div className="flex space-x-2 mb-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleConvertToDecimal}
          >
            To Decimal
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleConvertToText}
          >
            To Text
          </button>
        </div>
        <textarea
          className="w-full h-32 border border-gray-300 rounded p-2 mb-4"
          readOnly
          value={convertedText}
        ></textarea>
      </div>
    </div>
  );
}
