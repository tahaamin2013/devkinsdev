"use client";
import React, { useState } from "react";

const SimpleCalculator: React.FC = () => {
  const [display, setDisplay] = useState<string>("0");
  const [operator, setOperator] = useState<string | null>(null);
  const [operand, setOperand] = useState<number | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(false);

  const handleNumberClick = (number: string) => {
    if (waitingForOperand) {
      setDisplay(number);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? number : display + number);
    }
  };

  const handleOperatorClick = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (operand === null) {
      setOperand(inputValue);
    } else if (operator) {
      const currentValue = operand || 0;
      const newValue = calculate(currentValue, inputValue, operator);

      setOperand(newValue);
      setDisplay(String(newValue));
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (left: number, right: number, operator: string): number => {
    switch (operator) {
      case "+":
        return left + right;
      case "-":
        return left - right;
      case "*":
        return left * right;
      case "/":
        return left / right;
      case "%":
        return left % right;
      default:
        return right;
    }
  };

  const handleEqualsClick = () => {
    const inputValue = parseFloat(display);

    if (operator && operand !== null) {
      const newValue = calculate(operand, inputValue, operator);

      setDisplay(String(newValue));
      setOperand(null);
      setOperator(null);
      setWaitingForOperand(false);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setOperand(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  return (
    <div className="flex flex-col mt-[40px] justify-center items-center">
      <div className="bg-white w-fit h-fit p-5 rounded-xl border shadow-md">
        <div className="flex flex-col gap-3 text-5xl font-bold justify-center items-center">
          {display}
          <div className="bg-black p-[0.3px] w-[300px]"></div>
        </div>
        <div className="grid grid-cols-1 gap-[20px] text-2xl mt-2 text-zinc-500">
          <div className="flex flex-row gap-2">
            <div
              className="bg-transparent hover:bg-primary hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold"
              onClick={handleClear}
            >
              AC
            </div>
            <div
              className="bg-transparent hover:bg-primary hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold"
              onClick={() => handleOperatorClick("/")}
            >
              /
            </div>
            <div
              className="bg-transparent hover:bg-primary hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold"
              onClick={() => handleOperatorClick("%")}
            >
              %
            </div>
            <div
              className="bg-transparent hover:bg-primary hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold"
              onClick={() => handleOperatorClick("*")}
            >
              ÷
            </div>
          </div>
          <div className="flex flex-row gap-3.5">
            <div
              className="bg-transparent hover:bg-primary hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold"
              onClick={() => handleNumberClick("7")}
            >
              7
            </div>
            <div
              className="bg-transparent hover:bg-primary hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold"
              onClick={() => handleNumberClick("8")}
            >
              8
            </div>
            <div
              className="bg-transparent hover:bg-primary hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold"
              onClick={() => handleNumberClick("9")}
            >
              9
            </div>
            <div
              className="bg-transparent hover:bg-primary hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold"
              onClick={() => handleOperatorClick("*")}
            >
              X
            </div>
          </div>
          <div className="flex flex-row gap-3.5">
            <div
              className="bg-transparent hover:bg-primary hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold"
              onClick={() => handleNumberClick("4")}
            >
              4
            </div>
            <div
              className="bg-transparent hover:bg-primary hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold"
              onClick={() => handleNumberClick("5")}
            >
              5
            </div>
            <div
              className="bg-transparent hover:bg-primary hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold"
              onClick={() => handleNumberClick("6")}
            >
              6
            </div>
            <div
              className="bg-transparent hover:bg-primary hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold"
              onClick={() => handleOperatorClick("-")}
            >
              -
            </div>
          </div>
          <div className="flex flex-row gap-3.5">
            <div
              className="bg-transparent hover:bg-primary hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold"
              onClick={() => handleNumberClick("1")}
            >
              1
            </div>
            <div
              className="bg-transparent hover:bg-primary hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold"
              onClick={() => handleNumberClick("2")}
            >
              2
            </div>
            <div
              className="bg-transparent hover:bg-primary hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold"
              onClick={() => handleNumberClick("3")}
            >
              3
            </div>
            <div
              className="bg-transparent hover:bg-primary hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold"
              onClick={() => handleOperatorClick("+")}
            >
              +
            </div>
          </div>
          <div className="flex flex-row gap-3.5">
            <div
              className="bg-transparent hover:bg-primary hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold"
              onClick={() => handleNumberClick("0")}
            >
              0
            </div>
            <div
              className="bg-transparent hover:bg-primary hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg font-bold"
              onClick={() => handleNumberClick(".")}
            >
              .
            </div>
            <div
              className="bg-purple-600 hover:bg-primary text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg font-bold w-full text-center text-3xl"
              onClick={handleEqualsClick}
            >
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCalculator;