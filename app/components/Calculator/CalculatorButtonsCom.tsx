import type { NextComponentType, NextPageContext } from "next";

interface Props {
  handleButtonClick: (value: string) => void;
}

const CalculatorButtonsCom: NextComponentType<NextPageContext, {}, Props> = ({
  handleButtonClick,
}) => {
  return (
    <>
      <button
        onClick={() => handleButtonClick("C")}
        className="btn font-bold text-2xl rounded-lg bg-white border-none text-[#575757]"
      >
        C
      </button>
      <button
        onClick={() => handleButtonClick("DEL")}
        className="btn font-bold text-xl rounded-lg bg-white border-none text-[#575757]"
      >
        DEL
      </button>
      <button
        onClick={() => handleButtonClick("%")}
        className="btn font-bold text-2xl rounded-lg bg-white border-none text-[#575757]"
      >
        %
      </button>
      <button
        onClick={() => handleButtonClick("/")}
        className="btn font-bold text-2xl rounded-lg bg-white border-none text-[#575757]"
      >
        .
      </button>
      <button
        onClick={() => handleButtonClick("7")}
        className="btn font-bold text-2xl rounded-full bg-white border-none text-[#575757]"
      >
        7
      </button>
      <button
        onClick={() => handleButtonClick("8")}
        className="btn font-bold text-2xl rounded-full bg-white border-none text-[#575757]"
      >
        8
      </button>
      <button
        onClick={() => handleButtonClick("9")}
        className="btn font-bold text-2xl rounded-full bg-white border-none text-[#575757]"
      >
        9
      </button>
      <button
        onClick={() => handleButtonClick("*")}
        className="btn font-bold text-2xl rounded-lg bg-white border-none text-[#575757]"
      >
        ×
      </button>
      <button
        onClick={() => handleButtonClick("4")}
        className="btn font-bold text-2xl rounded-full bg-white border-none text-[#575757]"
      >
        4
      </button>
      <button
        onClick={() => handleButtonClick("5")}
        className="btn font-bold text-2xl rounded-full bg-white border-none text-[#575757]"
      >
        5
      </button>
      <button
        onClick={() => handleButtonClick("6")}
        className="btn font-bold text-2xl rounded-full bg-white border-none text-[#575757]"
      >
        6
      </button>
      <button
        onClick={() => handleButtonClick("-")}
        className="btn font-bold text-2xl rounded-lg bg-white border-none text-[#575757]"
      >
        -
      </button>
      <button
        onClick={() => handleButtonClick("1")}
        className="btn font-bold text-2xl rounded-full bg-white border-none text-[#575757]"
      >
        1
      </button>
      <button
        onClick={() => handleButtonClick("2")}
        className="btn font-bold text-2xl rounded-full bg-white border-none text-[#575757]"
      >
        2
      </button>
      <button
        onClick={() => handleButtonClick("3")}
        className="btn font-bold text-2xl rounded-full bg-white border-none text-[#575757]"
      >
        3
      </button>
      <button
        onClick={() => handleButtonClick("+")}
        className="btn font-bold text-2xl rounded-lg bg-white border-none text-[#575757]"
      >
        +
      </button>
      <button
        onClick={() => handleButtonClick("0")}
        className="btn font-bold text-2xl rounded-full bg-white col-span-2 border-none text-[#575757]"
      >
        0
      </button>
      <button
        onClick={() => handleButtonClick(".")}
        className="btn font-bold text-2xl rounded-lg bg-white border-none text-[#575757]"
      >
        .
      </button>
      <button
        onClick={() => handleButtonClick("=")}
        className="btn font-bold text-2xl rounded-lg bg-transparent shadow-none border-none text-[#575757]"
      >
        =
      </button>
    </>
  );
};

export default CalculatorButtonsCom;
