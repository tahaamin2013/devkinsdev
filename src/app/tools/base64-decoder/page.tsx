'use client'

import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button} from '@/components/ui/button'
import {Textarea} from '@/components/ui/textarea'

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleDecodeBase64 = () => {
    try {
      const decodedString = atob(inputText);
      setOutputText(decodedString);
    } catch {
      setOutputText('Invalid Base64 input');
    }
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Base64 Decoder</h2>
        <Textarea
          className="w-full h-32 border border-gray-300 rounded p-2 mb-4"
          placeholder="Enter Base64 to decode..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></Textarea>
        <div className="flex space-x-2 mb-4">
          <Button
            className="px-4 py-2 text-white rounded"
            onClick={handleDecodeBase64}
          >
            Decode from Base64
          </Button>
          <Button
            onClick={handleCopyToClipboard}
            disabled={!outputText} // Disable button if there's no output text
          >
            Copy to Clipboard
          </Button>
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
}