import { DatePicker } from "antd";
import type { NextComponentType, NextPageContext } from "next";

interface Props {
  date: string | null;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

const DatePickerCom: NextComponentType<NextPageContext, {}, Props> = ({
  date,
  setDate,
}) => {
  const onChangeDate = (date: any, dateString: string | string[]) => {
    if (date) {
      if (typeof dateString === "string") {
        // If dateString is a string
        setDate(dateString); // Set the selected date as a string
      } else if (Array.isArray(dateString) && dateString.length > 0) {
        // If dateString is an array of strings, use the first element
        setDate(dateString[0]);
      }
    }
  };

  return (
    <DatePicker
      onChange={onChangeDate}
      className="w-full border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
    />
  );
};

export default DatePickerCom;
