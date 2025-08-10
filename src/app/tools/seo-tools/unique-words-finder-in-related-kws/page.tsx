"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useState } from "react";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function KeywordMatcher() {
  const [mainKeyword, setMainKeyword] = useState<string>("");
  const [relatedKeywords, setRelatedKeywords] = useState<string>("");
  const [nonMatchedKeywords, setNonMatchedKeywords] = useState<string[]>([]);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const processKeywords = () => {
    const mainKeywordLowerCase = mainKeyword.toLowerCase();
    const relatedKeywordsArr = relatedKeywords
      .toLowerCase()
      .split("\n")
      .flatMap((keyword) => keyword.split(" "))
      .filter(Boolean);

    const nonMatched = relatedKeywordsArr.filter(
      (word) => !mainKeywordLowerCase.includes(word)
    );

    const nonMatchedLines: string[] = relatedKeywords
      .split("\n")
      .map((line) =>
        line
          .split(" ")
          .filter((word) => nonMatched.includes(word))
          .join(" ")
      )
      .filter(Boolean);

    setNonMatchedKeywords(nonMatchedLines);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(nonMatchedKeywords.join("\n"))
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="bg-zinc-900 p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Unique Words Finder in Related Keywords
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <Input
              type="text"
              value={mainKeyword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMainKeyword(e.target.value)
              }
              placeholder="Main Keyword:"
              className="mb-4"
            />
            <Textarea
              placeholder="Related Keywords"
              value={relatedKeywords}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setRelatedKeywords(e.target.value)
              }
              className="mb-4 min-h-[70px]"
            />
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 w-full mb-4"
              onClick={processKeywords}
            >
              Find Different
            </Button>
          </div>

          <div className="flex gap-3">
            <div>
              <h2 className="text-2xl mb-2 text-white">Unique Keywords:</h2>
              <ul className="list-disc pl-6 text-white">
                {nonMatchedKeywords.map((word, index) => (
                  <li key={index} className="mb-2">
                    {word}
                  </li>
                ))}
              </ul>
            </div>
            <Button variant="secondary" onClick={copyToClipboard}>
              {isCopied ? (
                <span className="text-green-600">
                  <Check />
                </span>
              ) : (
                <Copy className="text-white" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
