"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const upsideDownMap: { [key: string]: string } = {
  a: "ɐ",
  b: "q",
  c: "ɔ",
  d: "p",
  e: "ǝ",
  f: "ɟ",
  g: "ƃ",
  h: "ɥ",
  i: "ᴉ",
  j: "ɾ",
  k: "ʞ",
  l: "l",
  m: "ɯ",
  n: "u",
  o: "o",
  p: "d",
  q: "b",
  r: "ɹ",
  s: "s",
  t: "ʇ",
  u: "n",
  v: "ʌ",
  w: "ʍ",
  x: "x",
  y: "ʎ",
  z: "z",
  A: "∀",
  B: "𐐒",
  C: "Ↄ",
  D: "◖",
  E: "Ǝ",
  F: "Ⅎ",
  G: "⅁",
  H: "H",
  I: "I",
  J: "ſ",
  K: "ʞ",
  L: "˥",
  M: "W",
  N: "N",
  O: "O",
  P: "Ԁ",
  Q: "Ὁ",
  R: "ᴚ",
  S: "S",
  T: "⊥",
  U: "∩",
  V: "Λ",
  W: "M",
  X: "X",
  Y: "⅄",
  Z: "Z",
  0: "0",
  1: "Ɩ",
  2: "ᄅ",
  3: "Ɛ",
  4: "ㄣ",
  5: "ϛ",
  6: "9",
  7: "ㄥ",
  8: "8",
  9: "6",
  ".": "˙",
  ",": "'",
  "'": ",",
  '"': "„",
  "!": "¡",
  "?": "¿",
  "(": ")",
  ")": "(",
  "[": "]",
  "]": "[",
  "{": "}",
  "}": "{",
  "<": ">",
  ">": "<",
  "&": "⅋",
  _: "‾",
  " ": " ",
};

const convertToUpsideDown = (text: string): string => {
  return text
    .split("")
    .map((char) => upsideDownMap[char] || char)
    .reverse()
    .join("");
};

const UpsideDownTextGenerator: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [upsideDownText, setUpsideDownText] = useState<string>("");
  const [reverseText, setReverseText] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleCheckboxChange = () => {
    setReverseText(!reverseText);
  };

  const generateUpsideDownText = () => {
    let convertedText = convertToUpsideDown(inputText);
    if (reverseText) {
      convertedText = convertedText.split("").reverse().join("");
    }
    setUpsideDownText(convertedText);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(upsideDownText)
      .then(() => {
        toast.success("Upside Down text copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy text to clipboard.");
      });
  };

  return (
    <div className="flex overflow-hidden flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-3xl mb-3">Upside Down Text Generator</h1>
      <div className="">
        <div className="bg-white mx-4 border text-center items-center flex flex-col gap-4 p-4 rounded-xl w-fit h-fit">
          <Textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type text here"
            rows={6}
            cols={30}
          />
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={reverseText}
              onChange={handleCheckboxChange}
            />
            <label>Reverse text</label>
          </div>
          <Button onClick={generateUpsideDownText} className="text-white">
            Generate Upside Down
          </Button>
          <textarea
            readOnly
            className="h-[130px] outline-none"
            value={upsideDownText}
          ></textarea>
          <Button onClick={copyToClipboard} className="text-white">
            Copy
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpsideDownTextGenerator;
