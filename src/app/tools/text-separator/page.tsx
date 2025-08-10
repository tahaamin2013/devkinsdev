"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const separatorOptions = [
  { label: "New Line", value: "\n" },
  { label: "Space", value: " " },
  { label: ";", value: ";" },
  { label: "-", value: "-" },
  { label: "|", value: "|" },
  { label: ".", value: "." },
];

const TextSeparator: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [currentSeparator, setCurrentSeparator] = useState<string>(
    separatorOptions[0].value
  );
  const [newSeparator, setNewSeparator] = useState<string>(
    separatorOptions[0].value
  );
  const [resultText, setResultText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleCurrentSeparatorChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrentSeparator(event.target.value);
  };

  const handleNewSeparatorChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setNewSeparator(event.target.value);
  };

  const separateText = () => {
    const regex = new RegExp(
      currentSeparator === "\n" ? "\\n" : currentSeparator,
      "g"
    );
    const separatedText = inputText.split(regex).join(newSeparator);
    setResultText(separatedText);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(resultText)
      .then(() => {
        toast.success("Separated text copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy separated text to clipboard.");
      });
  };

  return (
    <div className="flex overflow-hidden flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-3xl mb-3">Text Separator</h1>
      <div className="">
        <div className="bg-white mx-4 border text-center items-center flex flex-col gap-4 p-4 px-6 rounded-xl w-fit h-fit">
          <Textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type or paste text here"
            rows={4}
            cols={30}
          />
          <div className="flex flex-col gap-2 items-start text-left">
            <label>
              Currently separated by: <br />
              <select
                className="border-black border pr-9 pl-2 rounded-lg"
                value={currentSeparator}
                onChange={handleCurrentSeparatorChange}
              >
                {separatorOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Separate by <br />
              <select
                value={newSeparator}
                className="border-black border pr-9 pl-2 rounded-lg"
                onChange={handleNewSeparatorChange}
              >
                {separatorOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <Button onClick={separateText} className="text-white">
            Separate Text
          </Button>
          <Textarea
            readOnly
            className="outline-none"
            value={resultText}
            rows={4}
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

export default TextSeparator;
