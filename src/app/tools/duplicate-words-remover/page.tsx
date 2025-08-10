"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DuplicateWordsRemover: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [processedText, setProcessedText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const removeDuplicateWords = () => {
    const wordsArray = inputText.split(/\s+/);
    const uniqueWordsArray = Array.from(new Set(wordsArray));
    const uniqueText = uniqueWordsArray.join(" ");
    setProcessedText(uniqueText);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(processedText)
      .then(() => {
        toast.success("Processed text copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy text to clipboard.");
      });
  };

  return (
    <div className="flex overflow-hidden flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-3xl mb-3">Duplicate Words Remover</h1>
      <div className="">
        <div className="bg-white mx-4 border text-center items-center flex flex-col gap-4 p-4 rounded-xl w-fit h-fit">
          <Textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type text here"
            rows={10}
            cols={30}
          />
          <Button onClick={removeDuplicateWords} className="text-white">
            Remove Duplicates
          </Button>
          <textarea
            readOnly
            className="h-[100px] outline-none"
            value={processedText}
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

export default DuplicateWordsRemover;
