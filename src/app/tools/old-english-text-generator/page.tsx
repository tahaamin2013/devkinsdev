"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const oldEnglishMap: { [key: string]: string } = {
  A: "𝔄",
  B: "𝔅",
  C: "ℭ",
  D: "𝔇",
  E: "𝔈",
  F: "𝔉",
  G: "𝔊",
  H: "ℌ",
  I: "ℑ",
  J: "𝔍",
  K: "𝔎",
  L: "𝔏",
  M: "𝔐",
  N: "𝔑",
  O: "𝔒",
  P: "𝔓",
  Q: "𝔔",
  R: "ℜ",
  S: "𝔖",
  T: "𝔗",
  U: "𝔘",
  V: "𝔙",
  W: "𝔚",
  X: "𝔛",
  Y: "𝔜",
  Z: "ℨ",
  a: "𝔞",
  b: "𝔟",
  c: "𝔠",
  d: "𝔡",
  e: "𝔢",
  f: "𝔣",
  g: "𝔤",
  h: "𝔥",
  i: "𝔦",
  j: "𝔧",
  k: "𝔨",
  l: "𝔩",
  m: "𝔪",
  n: "𝔫",
  o: "𝔬",
  p: "𝔭",
  q: "𝔮",
  r: "𝔯",
  s: "𝔰",
  t: "𝔱",
  u: "𝔲",
  v: "𝔳",
  w: "𝔴",
  x: "𝔵",
  y: "𝔶",
  z: "𝔷",
};

const convertToOldEnglish = (text: string): string => {
  return text
    .split("")
    .map((char) => oldEnglishMap[char] || char)
    .join("");
};

const OldEnglishTextGenerator: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [oldEnglishText, setOldEnglishText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const generateOldEnglishText = () => {
    const convertedText = convertToOldEnglish(inputText);
    setOldEnglishText(convertedText);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(oldEnglishText)
      .then(() => {
        toast.success("Old English text copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy text to clipboard.");
      });
  };

  return (
    <div className="flex overflow-hidden flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-3xl mb-3">Old English Text Generator</h1>
      <div className="">
        <div className="bg-white mx-4 border text-center items-center flex flex-col gap-4 p-4 rounded-xl w-fit h-fit">
          <Textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type text here"
            rows={6}
            cols={30}
          />
          <Button onClick={generateOldEnglishText} className="text-white">
            Generate Old English
          </Button>
          <textarea
            readOnly
            className="h-[130px] outline-none"
            value={oldEnglishText}
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

export default OldEnglishTextGenerator;
