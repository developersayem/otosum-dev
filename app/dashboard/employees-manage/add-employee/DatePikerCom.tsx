import { DatePicker } from "antd";
import type { NextComponentType, NextPageContext } from "next";

interface Props {
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
}

const DatePickerCom: NextComponentType<NextPageContext, {}, Props> = ({
  selectedDate,
  setSelectedDate,
}) => {
  const onChangeDate = (selectedDate: any, dateString: string | string[]) => {
    if (selectedDate) {
      if (typeof dateString === "string") {
        // If dateString is a string
        setSelectedDate(dateString); // Set the selected date as a string
      } else if (Array.isArray(dateString) && dateString.length > 0) {
        // If dateString is an array of strings, use the first element
        setSelectedDate(dateString[0]);
      }
    }
  };
  return (
    <DatePicker
      onChange={onChangeDate}
      className="w-full border border-[#f4f5f6] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
    />
  );
};

export default DatePickerCom;
