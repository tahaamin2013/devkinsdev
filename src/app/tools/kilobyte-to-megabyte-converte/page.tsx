"use client";
import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

const kbToMb = (kilobytes: number): number => {
  return kilobytes / 1024;
};

const KBToMBConverter: React.FC = () => {
  const [kilobytes, setKilobytes] = useState<number | string>("");
  const [megabytes, setMegabytes] = useState<number | string>("");

  const handleConvert = () => {
    if (typeof kilobytes === "number") {
      setMegabytes(kbToMb(kilobytes));
    } else {
      setMegabytes("Invalid input");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-white w-fit p-3 flex flex-col justify-center items-center rounded-md">
        <h2 className="text-center font-bold text-3xl">KB to MB Converter</h2>
        <Input
          type="text"
          value={kilobytes}
          onChange={(e) => setKilobytes(Number(e.target.value))}
          placeholder="Enter kilobytes"
          className="w-[200px] mt-3 mb-1"
        />
        <Button onClick={handleConvert} className="text-white mt-2">
          Convert
        </Button>
        {megabytes && <p className="mt-2">{megabytes} Megabytes</p>}
      </div>
    </div>
  );
};

export default KBToMBConverter;
