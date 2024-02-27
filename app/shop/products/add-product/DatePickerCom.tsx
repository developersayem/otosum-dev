"use client";

import { DatePicker } from "antd";
import type { NextComponentType, NextPageContext } from "next";
import { useState } from "react";

interface Props {}

const DatePickerCom: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const [date, setDate] = useState<Date | null>(null);

  const onChange = (date: Date | null, dateString: string | string[]) => {
    if (date && typeof dateString === "string") {
      setDate(date);
    }
  };

  return (
    <DatePicker
      onChange={onChange}
      className="w-[300px] border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
    />
  );
};

export default DatePickerCom;
