"use client";
import React, { useState } from "react";
import { Button} from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

const bitToByte = (bits: number): number => {
  return bits / 8;
};

const BitToByteConverter: React.FC = () => {
  const [bits, setBits] = useState<number | string>("");
  const [bytes, setBytes] = useState<number | string>("");

  const handleConvert = () => {
    if (typeof bits === "number") {
      setBytes(bitToByte(bits));
    } else {
      setBytes("Invalid input");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-white w-fit p-3 flex flex-col justify-center items-center  rounded-md">
        <h2 className="text-center font-bold text-3xl">Bit to Byte Converter</h2>
        <Input
          type="text"
          value={bits}
          onChange={(e) => setBits(Number(e.target.value))}
          placeholder="Enter bits"
          className="w-[200px] mt-3 mb-1"
        />
        <Button onClick={handleConvert} className="text-white">Convert</Button>
        {bytes && <p>{bytes} Bytes</p>}
      </div>
    </div>
  );
};

export default BitToByteConverter;