"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReverseListPage: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [reversedText, setReversedText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const reverseList = () => {
    const linesArray = inputText.split("\n");
    const reversedArray = linesArray.reverse();
    const reversedText = reversedArray.join("\n");
    setReversedText(reversedText);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(reversedText)
      .then(() => {
        toast.success("Reversed text copied");
      })
      .catch(() => {
        toast.error("Failed to copy text to clipboard.");
      });
  };

  return (
    <div className="flex overflow-hidden flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-3xl mb-3">Reverse List</h1>
      <div className="">
        <div className="bg-white mx-4 border text-center items-center flex flex-col gap-4 p-4 rounded-xl w-fit h-fit">
          <Textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type text here"
            rows={10}
            cols={30}
          />
          <Button onClick={reverseList} className="text-white">
            Reverse
          </Button>
          <div className="flex gap-3">
          <pre>{reversedText}</pre>
            <Button onClick={copyToClipboard} className="text-white">
              Copy
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ReverseListPage;
