'use client';

import React, { useState } from 'react';
import convert from 'color-convert';

interface ColorFormats {
  HEX: string;
  HEXAlpha: string;
  RGB: string;
  RGBA: string;
  HSV: string;
  HSL: string;
  HSLA: string;
}

const ColorConverter: React.FC = () => {
  const [colorInput, setColorInput] = useState<string>('');
  const [colorFormats, setColorFormats] = useState<ColorFormats | null>(null);

  const handleColorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorInput(e.target.value);
  };

  const convertColor = () => {
    try {
      const hex = colorInput.startsWith('#') ? colorInput.slice(1) : colorInput;
      const rgb = convert.hex.rgb(hex);
      const rgba = [...rgb, 1];
      const hsv = convert.hex.hsv(hex);
      const hsl = convert.hex.hsl(hex);
      const hsla = [...hsl, 1];

      setColorFormats({
        HEX: `#${hex}`,
        HEXAlpha: `#${hex}ff`,
        RGB: `rgb(${rgb.join(',')})`,
        RGBA: `rgba(${rgba.join(',')})`,
        HSV: `hsv(${hsv[0]},${hsv[1]}%,${hsv[2]}%)`,
        HSL: `hsl(${hsl[0]},${hsl[1]}%,${hsl[2]}%)`,
        HSLA: `hsla(${hsla[0]},${hsla[1]}%,${hsla[2]}%,${hsla[3]})`
      });
    } catch {
      alert('Invalid color format. Please enter a valid HEX color.');
    }
  };

  return (
    <div className="flex flex-col items-center w-full justify-center min-h-screen py-10 px-4 bg-gray-100">
      <h1 className="text-5xl font-bold text-gray-800 mb-12">Color Converter</h1>
      <div className="flex flex-col bg-white p-10 rounded-xl shadow-2xl w-full max-w-3xl">
        <h2 className="text-3xl font-semibold mb-6">Enter a color:</h2>
        <input
          type="text"
          value={colorInput}
          onChange={handleColorInput}
          placeholder="e.g., #40d0e9"
          className="mb-6 px-6 py-4 w-full border border-gray-300 rounded-lg text-xl text-center"
        />
        <button
          onClick={convertColor}
          className="px-6 py-4 w-full bg-blue-600 text-white text-xl font-bold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Convert
        </button>
        {colorFormats && (
          <div className="mt-8 text-left w-full space-y-4">
            <div className="w-full h-20 rounded-md" style={{ backgroundColor: colorInput }}></div>
            <p className="text-xl text-gray-700"><strong>HEX:</strong> {colorFormats.HEX}</p>
            <p className="text-xl text-gray-700"><strong>HEX Alpha:</strong> {colorFormats.HEXAlpha}</p>
            <p className="text-xl text-gray-700"><strong>RGB:</strong> {colorFormats.RGB}</p>
            <p className="text-xl text-gray-700"><strong>RGBA:</strong> {colorFormats.RGBA}</p>
            <p className="text-xl text-gray-700"><strong>HSV:</strong> {colorFormats.HSV}</p>
            <p className="text-xl text-gray-700"><strong>HSL:</strong> {colorFormats.HSL}</p>
            <p className="text-xl text-gray-700"><strong>HSLA:</strong> {colorFormats.HSLA}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorConverter;
