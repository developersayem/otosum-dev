import type { NextComponentType, NextPageContext } from "next";

interface Props {
  expression: string;
  display: string;
}

const CalculatorDisplayCom: NextComponentType<NextPageContext, {}, Props> = ({
  expression,
  display,
}) => {
  return (
    <div className="flex flex-col justify-end items-end w-full h-full">
      <div className="text-4xl font-bold ">{display}</div>
      <div className="">{expression}</div>
    </div>
  );
};

export default CalculatorDisplayCom;
