"use client";

import React, { useState } from "react";

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState<{
    years: number;
    months: number;
    days: number;
  } | null>(null);

  const calculateAge = (birthdate: string) => {
    const birthDate = new Date(birthdate);
    const today = new Date();

    const diffInMilliseconds = Math.abs(today.getTime() - birthDate.getTime());
    const years = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((diffInMilliseconds % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((diffInMilliseconds % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));

    setAge({ years, months, days });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    calculateAge(birthdate);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Age Calculator</h1>
      <form onSubmit={handleSubmit} className="flex bg-white mx-4 rounded-xl border-2 px-5 py-4 flex-col items-center">
        <div>
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className="border border-gray-300 w-[200px] p-2 rounded mb-4"
          />
          <button
            type="submit"
            className="bg-primary py-2.5 px-5 font-bold text-white p-2 rounded"
          >
            Calculate Age
          </button>
        </div>
        {age && (
          <div>
            <p className="mt-4 text-2xl">
              You are {age.years} years, {age.months} months, and {age.days} days old.
            </p>
            <p className="mt-4 text-2xl">
              Or approximately {Math.round((age.years * 12 + age.months + age.days / 30) * 100) / 100} months old.
            </p>
            <p className="mt-4 text-2xl">
              Or {Math.floor((age.years * 12 + age.months) / 12)} years, {Math.floor((age.years * 12 + age.months) % 12)} months, and {age.days} days old.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default AgeCalculator;
