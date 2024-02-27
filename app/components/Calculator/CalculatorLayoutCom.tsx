import React, { useState } from "react";
import { Calculator } from "lucide-react";
import type { NextComponentType, NextPageContext } from "next";
import CalculatorDisplayCom from "./CalculatorDisplayCom";
import CalculatorButtonsCom from "./CalculatorButtonsCom";

interface Props {}

const CalculatorLayoutCom: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const [display, setDisplay] = useState<string>("0");
  const [expression, setExpression] = useState<string>("");

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        setDisplay(eval(expression).toString());
        setExpression("");
      } catch (error) {}
    } else if (value === "C") {
      setDisplay("0");
      setExpression("");
    } else if (value === "DEL") {
      setDisplay(display.slice(0, -1));
      setExpression(expression.slice(0, -1));
    } else {
      setExpression((prevExpression) => prevExpression + value);
      if (display === "0") {
        setDisplay(value);
      } else {
        setDisplay((prevDisplay) => prevDisplay + value);
      }
    }
  };

  return (
    <details className="dropdown">
      <summary className="m-1 mr-5 btn border-0 rounded-xl text-gl hover:scale-105 text-white bg-gradient-to-r from-[#00FC44] to-[#438FFD]">
        <span>
          <Calculator />
        </span>
        Calculator
      </summary>
      <ul className="shadow menu dropdown-content z-[1] bg-white text-black rounded-box w-[255px] m-0 p-0">
        <li className="h-32">
          <CalculatorDisplayCom display={display} expression={expression} />
        </li>
        <li className="grid grid-cols-4 gap-2  backdrop-blur-xl bg-cyan-100/30 p-5 rounded-xl">
          <CalculatorButtonsCom handleButtonClick={handleButtonClick} />
        </li>
      </ul>
    </details>
  );
};

export default CalculatorLayoutCom;
