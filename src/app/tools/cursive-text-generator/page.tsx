"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cursiveMap: { [key: string]: string } = {
  A: "𝒜",
  B: "ℬ",
  C: "𝒞",
  D: "𝒟",
  E: "ℰ",
  F: "ℱ",
  G: "𝒢",
  H: "ℋ",
  I: "ℐ",
  J: "𝒥",
  K: "𝒦",
  L: "ℒ",
  M: "ℳ",
  N: "𝒩",
  O: "𝒪",
  P: "𝒫",
  Q: "𝒬",
  R: "ℛ",
  S: "𝒮",
  T: "𝒯",
  U: "𝒰",
  V: "𝒱",
  W: "𝒲",
  X: "𝒳",
  Y: "𝒴",
  Z: "𝒵",
  a: "𝒶",
  b: "𝒷",
  c: "𝒸",
  d: "𝒹",
  e: "ℯ",
  f: "𝒻",
  g: "ℊ",
  h: "𝒽",
  i: "𝒾",
  j: "𝒿",
  k: "𝓀",
  l: "𝓁",
  m: "𝓂",
  n: "𝓃",
  o: "ℴ",
  p: "𝓅",
  q: "𝓆",
  r: "𝓇",
  s: "𝓈",
  t: "𝓉",
  u: "𝓊",
  v: "𝓋",
  w: "𝓌",
  x: "𝓍",
  y: "𝓎",
  z: "𝓏",
};

const convertToCursive = (text: string): string => {
  return text
    .split("")
    .map((char) => cursiveMap[char] || char)
    .join("");
};

const CursiveTextGenerator: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [cursiveText, setCursiveText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const generateCursiveText = () => {
    const convertedText = convertToCursive(inputText);
    setCursiveText(convertedText);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(cursiveText)
      .then(() => {
        toast.success("Cursive text copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy text to clipboard.");
      });
  };

  return (
    <div className="flex overflow-hidden flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-3xl mb-3">Cursive Text Generator</h1>
      <div className="">
        <div className="bg-white mx-4 border text-center items-center flex flex-col gap-4 p-4 rounded-xl w-fit h-fit">
          <Textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type text here"
            rows={10}
            cols={30}
          />
          <Button onClick={generateCursiveText} className="text-white">
            Generate Cursive
          </Button>
          <textarea
            readOnly
            className="h-[130px] outline-none"
            value={cursiveText}
          ></textarea>{" "}
          <Button onClick={copyToClipboard} className="text-white">
            Copy
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CursiveTextGenerator;
