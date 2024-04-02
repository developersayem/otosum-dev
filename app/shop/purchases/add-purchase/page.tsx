/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { FormEvent, useState } from "react";
import UploadImg from "./UploadImg";
import { Plus } from "lucide-react";
import DatePickerCom from "./DatePikerCom";
import toast, { Toaster } from "react-hot-toast";
import { useBusinessNameContext } from "@/app/context/businessNameContext";
import DropDownCom from "./DropDownCom";

interface FileData {
  fileName: string;
  fileImage: string;
}
interface FormData {
  title: string;
  date: string;
  warehouse: string;
  category: string;
  amount: number;
  note: string;
  description: string;
  selectedFiles: FileData[];
}

const page = () => {
  const { businessName } = useBusinessNameContext();
  const [date, setDate] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<FileData | null>(null);
  const [purchaseCategory, setPurchaseCategory] = useState<string | null>(
    "Select Categories"
  );
  const handleAddExpenses = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    try {
      const response = await fetch("/api/shop/purchases/add-purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          businessName: businessName,
          title: formData.get("title"),
          date: date,
          warehouse: formData.get("warehouse"),
          category: purchaseCategory,
          amount: formData.get("amount"),
          note: formData.get("note"),
          description: formData.get("description"),
          img: selectedFile,
        }),
      });
      if (response.ok) {
        toast.success("Purchased added successfully");
      } else {
        toast.error("An error occurred while adding Purchase");
      }
    } catch (error) {
      console.error("An error occurred while adding Purchase:", error);
    }
  };

  return (
    <div className="bg-white p-10 mx-5 rounded-xl">
      <Toaster />
      <div>
        <h1 className="text-2xl font-bold text-black">Add Purchase</h1>
        <p>Create new purchase</p>
      </div>
      <form action="" onSubmit={handleAddExpenses} className="mt-10">
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-black mt-10">
          <div className="flex flex-col gap-4   ">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter Title"
              className=" border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="date">Date</label>
            <DatePickerCom date={date} setDate={setDate} />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="warehouse">Warehouse</label>
            <input
              type="text"
              id="warehouse"
              name="warehouse"
              placeholder="Enter Warehouse Name"
              className=" border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="warehouse">Category</label>
            <DropDownCom
              setSelectedItem={setPurchaseCategory}
              selectedItem={purchaseCategory}
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="Enter Amount"
              className=" border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="note">Note</label>
            <input
              type="text"
              id="note"
              name="note"
              placeholder="Enter Note"
              className=" border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>
        </div>

        {/* Image section */}
        <div className="grid grid-col-1 lg:grid-cols-2 gap-5 text-black mt-10">
          <div className="">
            <label
              htmlFor="attach-document"
              className="block text-lg font-medium leading-6 text-gray-900"
            >
              Description (Optional)
            </label>
            <div className="flex text-sm leading-6 text-gray-600">
              <textarea
                name="description"
                className="bg-transparent focus:border-black min-h-[14.5rem] min-w-full border rounded-lg outline-none mt-2"
              ></textarea>
            </div>
          </div>
          {/*  */}
          <div className="">
            <label
              htmlFor="attach-document"
              className="block text-lg font-medium leading-6 text-gray-900"
            >
              Attach Document
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-[#E5E5E5] px-6 ">
              <div className="text-center">
                <UploadImg
                  selectedFile={selectedFile} // Change here
                  setSelectedFile={setSelectedFile} // Change here
                />
              </div>
            </div>
          </div>
        </div>

        {/* BUTTON SECTION */}
        <div className="flex justify-start items-end my-5">
          <button
            type="submit"
            className="btn mr-2 text-white text-base hover:scale-105 border-0 bg-gradient-to-r py-2 from-[#438FFD] to-[#00FC44] form-submit"
          >
            <span className="font-bold">
              <Plus />
            </span>
            <span>Add Purchase</span>
          </button>
          <button
            type="reset"
            className="btn mx-2 bg-transparent py-0 px-8 border-2 hover:scale-105 border-[#BBBABA] form-submit text-black text-base hover:bg-transparent"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default page;
