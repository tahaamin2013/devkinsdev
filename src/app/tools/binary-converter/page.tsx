'use client'

import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const BinaryConverter: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [conversionType, setConversionType] = useState<'textToBinary' | 'binaryToText'>('textToBinary');

  const textToBinary = (text: string) => {
    return text
      .split('')
      .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
      .join(' ');
  };

  const binaryToText = (binary: string) => {
    return binary.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newInput = e.target.value;
    setInput(newInput);
    if (conversionType === 'textToBinary') {
      setOutput(textToBinary(newInput));
    } else {
      setOutput(binaryToText(newInput));
    }
  };

  const handleConversionTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value as 'textToBinary' | 'binaryToText';
    setConversionType(newType);
    setInput('');
    setOutput('');
  };

  const handleCopyOutput = () => {
    navigator.clipboard.writeText(output);
    toast.success('Copied to clipboard!');
  };

  return (
    <div className="container mx-auto p-4">
      <Toaster />
      <h1 className="text-2xl font-bold mb-4 text-center">Binary Converter</h1>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Conversion Type</label>
        <select
          value={conversionType}
          onChange={handleConversionTypeChange}
          className="p-2 border rounded w-full"
        >
          <option value="textToBinary">Text to Binary</option>
          <option value="binaryToText">Binary to Text</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">{conversionType === 'textToBinary' ? 'Text' : 'Binary'}</label>
        <Textarea
          value={input}
          onChange={handleInputChange}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">{conversionType === 'textToBinary' ? 'Binary' : 'Text'}</label>
        <div className="relative">
          <Textarea
            value={output}
            readOnly
            className="mt-1 p-2 border rounded w-full bg-gray-100"
          />
          <Button
            onClick={handleCopyOutput}
            className="absolute top-0 right-0 mt-1 mr-1 p-2 bg-blue-500 text-white rounded"
          >
            Copy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BinaryConverter;