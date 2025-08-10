"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// pages/reverse-words.tsx
import React, { useState } from "react";

const ReverseWordsPage: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [reversedText, setReversedText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const reverseWords = () => {
    const wordsArray = inputText.split(" ");
    const reversedArray = wordsArray.reverse();
    const reversedText = reversedArray.join(" ");
    setReversedText(reversedText);
  };

  return (
    <div className="flex overflow-hidden flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-3xl mb-3">Reverse Words</h1>
      <div className="">
        <div className="bg-white mx-4 border text-center items-center flex flex-col gap-4 p-4 rounded-xl w-fit h-fit">
          <Input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type text here"
          />
          <Button onClick={reverseWords} className="text-white">
            Reverse
          </Button>
          <p>{reversedText}</p>
        </div>
      </div>
    </div>
  );
};

export default ReverseWordsPage;
