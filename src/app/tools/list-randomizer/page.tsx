"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const randomizeList = (list: string[]): string[] => {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
};

const ListRandomizer: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [randomizedList, setRandomizedList] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const generateRandomizedList = () => {
    const list = inputText.split("\n").filter((item) => item.trim() !== "");
    const randomized = randomizeList(list);
    setRandomizedList(randomized.join("\n"));
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(randomizedList)
      .then(() => {
        toast.success("Randomized list copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy list to clipboard.");
      });
  };

  return (
    <div className="flex overflow-hidden flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-3xl mb-3">List Randomizer</h1>
      <div className="">
        <div className="bg-white mx-4 border text-center items-center flex flex-col gap-4 p-4 rounded-xl w-fit h-fit">
          <Textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter items here, one per line"
            rows={6}
            cols={30}
          />
          <Button onClick={generateRandomizedList} className="text-white">
            Randomize List
          </Button>
          <Textarea
            readOnly
            className="h-[130px] outline-none"
            value={randomizedList}
            rows={10}
            cols={30}
          />
          <Button onClick={copyToClipboard} className="text-white">
            Copy
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ListRandomizer;
