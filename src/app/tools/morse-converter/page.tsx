"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const MorseConverter = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const morseCodeMap: Record<string, string> = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    _: "..--.-",
    '"': ".-..-.",
    $: "...-..-",
    "@": ".--.-.",
    " ": "/",
  };

  const textToMorse = (text: string): string => {
    return text
      .toUpperCase()
      .split("")
      .map((char) => morseCodeMap[char] || "")
      .join(" ");
  };

  const morseToText = (morse: string): string => {
    const morseMapReverse: { [key: string]: string } = Object.entries(
      morseCodeMap
    ).reduce((acc, [key, value]) => {
      acc[value as string] = key; // Explicit type added
      return acc;
    }, {} as { [key: string]: string });
    return morse
      .split(" ")
      .map((code) => morseMapReverse[code] || "")
      .join("");
  };

  const handleConvertToMorse = () => {
    setOutputText(textToMorse(inputText));
  };

  const handleConvertToText = () => {
    setOutputText(morseToText(inputText));
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
    toast.success("Text copied to clipboard!", {
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
        <h2 className="text-2xl font-semibold mb-4">Morse Converter</h2>
        <Textarea
          className="w-full h-32 border border-gray-300 rounded p-2 mb-4"
          placeholder="Enter text or morse code..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></Textarea>
        <div className="flex space-x-2 mb-4">
          <Button
            className="px-4 py-2 text-white rounded"
            onClick={handleConvertToMorse}
          >
            To Morse
          </Button>
          <Button
            className="px-4 py-2 text-white rounded"
            onClick={handleConvertToText}
          >
            To Text
          </Button>
          <Button
            className="px-4 py-2 text-white rounded"
            onClick={handleCopyToClipboard}
            disabled={!outputText}
          >
            Copy to Clipboard
          </Button>
        </div>
        <Textarea
          className="w-full h-32 border border-gray-300 rounded p-2 mb-4"
          readOnly
          value={outputText}
        ></Textarea>
        <ToastContainer />
      </div>
    </div>
  );
};

export default MorseConverter;
