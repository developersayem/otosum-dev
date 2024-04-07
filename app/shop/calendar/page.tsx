"use client";

import React from "react";
import type { Dayjs } from "dayjs";
import { Calendar } from "antd";
import type { CalendarProps } from "antd";

const page: React.FC = () => {
  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  return (
    <div className="bg-white  p-5 m-5 rounded-lg">
      <Calendar onPanelChange={onPanelChange} />
    </div>
  );
};

export default page;
