'use client'

import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Copy } from 'react-feather';

const HexConverter = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleConvertToHex = () => {
    const hexString = stringToHex(inputText);
    setOutputText(hexString);
  };

  const handleConvertToText = () => {
    const textString = hexToString(inputText);
    setOutputText(textString);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
    toast.success('Text copied to clipboard!', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const stringToHex = (str: string): string => {
    return str.split('').map(char => char.charCodeAt(0).toString(16)).join('');
  };

  const hexToString = (hex: string): string => {
    const hexPairs = hex.match(/.{1,2}/g);
    if (!hexPairs) return '';
    return hexPairs.map(pair => String.fromCharCode(parseInt(pair, 16))).join('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Hex Converter</h2>
      <textarea
        className="w-full h-32 border border-gray-300 rounded p-2 mb-4"
        placeholder="Enter text or hex..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>
      <div className="flex space-x-2 mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleConvertToHex}
        >
          To Hex
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={handleConvertToText}
        >
          To Text
        </button>
        <button
          className="flex items-center justify-center px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={handleCopyToClipboard}
          disabled={!outputText}
        >
          <Copy className="h-5 w-5 mr-2" />
          Copy
        </button>
      </div>
      <textarea
        className="w-full h-32 border border-gray-300 rounded p-2 mb-4"
        readOnly
        value={outputText}
      ></textarea>
      <ToastContainer />
    </div>
    </div>
  );
};

export default HexConverter;
