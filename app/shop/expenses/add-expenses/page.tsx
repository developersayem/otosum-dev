"use client";

import { useState } from "react";
import UploadImg from "../UploadImg";
import DatePikerCom from "./DatePikerCom";
import { Plus, UploadCloud } from "lucide-react";

interface FileData {
  fileName: string;
  fileImage: string;
}
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  branch: string;
  role: string;
  address: string;
  state: string;
  userName: string;
  status: string;
  joiningDate: string;
  city: string;
  postalCode: string;
  password: string;
  selectedFiles: FileData[];
}

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedFiles, setSelectedFiles] = useState<FileData[]>([]);
  return (
    <div className="bg-white p-10 mx-5 rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-black">Add Expenses</h1>
        <p>Create new expenses</p>
      </div>
      <form action="">
        <div className="grid grid-cols-3 gap-5 text-black">
          <div className="flex flex-col gap-4 my-8">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>
          <div className="flex flex-col gap-4 my-8">
            <label htmlFor="title">Date</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Date"
              className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>
          {/* !!! NEED TO UPDATE DATE PICKER */}
          {/* <div className="flex flex-col gap-4 my-8">
            <DatePikerCom />
          </div> */}
          <div className="flex flex-col gap-4 my-8">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder="Amount"
              className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 text-black">
          <div className="">
            <label
              htmlFor="attach-document"
              className="block text-lg font-medium leading-6 text-gray-900"
            >
              Description (Optional)
            </label>

            <div className="flex text-sm leading-6 text-gray-600">
              <textarea className="bg-transparent focus:border-black min-h-[190px] min-w-full border rounded-lg outline-none mt-2"></textarea>
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
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <UploadCloud
                  className="mx-auto h-12 w-12 text-blue-500"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500"
                  >
                    <span className="pl-1">Drop & Drop a file here or, </span>
                    <span>browse</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* BUTTON SECTION */}
        <div className="flex justify-start items-end mr-5 my-5">
          <button
            type="submit"
            className="btn px-16 mx-5 text-white text-base hover:scale-105 border-0 bg-gradient-to-r py-2 from-[#438FFD] to-[#00FC44] form-submit"
          >
            <span className="font-bold">
              <Plus />
            </span>{" "}
            <span>Add Expenses</span>
          </button>
          <button
            type="reset"
            className="btn bg-transparent py-0 px-8 border-2 hover:scale-105 border-[#BBBABA] form-submit text-black text-base hover:bg-transparent"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default page;
