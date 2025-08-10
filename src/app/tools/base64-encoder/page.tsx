'use client'

import {Button} from '@/components/ui/button'
import { useState } from 'react';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [encodedText, setEncodedText] = useState('');
  
  const handleEncodeBase64 = () => {
    const encodedString = btoa(inputText);
    setEncodedText(encodedString);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(encodedText);
    // Optionally, you can provide some feedback to the user
    alert('Encoded text copied to clipboard!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Base64 Encoder</h2>
        <textarea
          className="w-full h-32 border border-gray-300 rounded p-2 mb-4"
          placeholder="Enter text..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <div className="flex space-x-2 mb-4">
          <Button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleEncodeBase64}
          >
            Encode to Base64
          </Button>
          <Button
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={handleCopyToClipboard}
            disabled={!encodedText} // Disable button if there's no encoded text
          >
            Copy to Clipboard
          </Button>
        </div>
        <textarea
          className="w-full h-32 border border-gray-300 rounded p-2 mb-4"
          readOnly
          value={encodedText}
        ></textarea>
      </div>
    </div>
  );
}