"use client";
import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

const gbToTb = (gigabytes: number): number => {
  return gigabytes / 1024;
};

const GBToTBConverter: React.FC = () => {
  const [gigabytes, setGigabytes] = useState<number | string>("");
  const [terabytes, setTerabytes] = useState<number | string>("");

  const handleConvert = () => {
    if (typeof gigabytes === "number") {
      setTerabytes(gbToTb(gigabytes));
    } else {
      setTerabytes("Invalid input");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-white w-fit p-3 flex flex-col justify-center items-center rounded-md">
        <h2 className="text-center font-bold text-3xl">GigaByte to TeraByte <br /> Converter</h2>
        <Input
          type="text"
          value={gigabytes}
          onChange={(e) => setGigabytes(Number(e.target.value))}
          placeholder="Enter gigabytes"
          className="w-[200px] mt-3 mb-1"
        />
        <Button onClick={handleConvert} className="text-white mt-2">
          Convert
        </Button>
        {terabytes && <p className="mt-2">{terabytes} Terabytes</p>}
      </div>
    </div>
  );
};

export default GBToTBConverter;
