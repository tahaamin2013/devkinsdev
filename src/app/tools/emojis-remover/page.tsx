"use client";
import { Textarea } from "@/components/ui/textarea";
import { useState, ChangeEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmojiRemover: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [outputText, setOutputText] = useState<string>("");

  const removeEmojis = (text: string): string => {
    // Regex to remove emojis
    return text.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF\uFE0F]|\uD83D[\uDE00-\uDE4F]|\uD83D[\uDE80-\uDEF6\uD83C\uDF00-\uDF7F\uD83C\uDF80-\uDFFF]|\uD83E[\uDD00-\uDDFF])/g,
      ""
    );
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const text = e.target.value;
    setInputText(text);
    setOutputText(removeEmojis(text));
  };

  const handleCopy = (): void => {
    navigator.clipboard
      .writeText(outputText)
      .then(() => {
        toast.success("Text copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy text.");
      });
  };

  return (
    <div className="flex h-screen flex-col justify-center items-center overflow-hidden">
      <h1 className="font-bold text-3xl ">Emoji Remover</h1>
      <div className="bg-white border mt-3 mx-4 rounded-lg p-4">
        <Textarea
          placeholder="Type your text here..."
          value={inputText}
          onChange={handleChange}
        />
        <div className="flex justify-center items-center gap-4">
          <textarea
            value={outputText}
            readOnly
            className="outline-none border-0 mt-5 h-[100px]"
          />
          <button
            onClick={handleCopy}
            className="mt-2 py-1 px-3 bg-primary text-white rounded"
          >
            Copy
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EmojiRemover;
