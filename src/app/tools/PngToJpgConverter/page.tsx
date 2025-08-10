'use client'

import React, { useState } from 'react';
import axios from 'axios';

const PngToJpgConverter: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [convertedUrl, setConvertedUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleConvert = async () => {
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/png2jpgconverter', formData, {
        headers: {
          'Content-Type': file.type,
        },
        responseType: 'json',
      });
      setConvertedUrl(response.data.url);
    } catch (error) {
      console.error('Conversion failed:', error);
    }
  };

  return (
    <div>
      <h2>PNG to JPG Converter</h2>
      <input type="file" accept="image/png" onChange={handleFileChange} />
      <button onClick={handleConvert}>Convert</button>
      {convertedUrl && (
        <div>
          <p>Conversion successful! <a href={convertedUrl} download="output.jpg">Download JPG</a></p>
          <img src={convertedUrl} alt="Converted JPG" />
        </div>
      )}
    </div>
  );
};

export default PngToJpgConverter;