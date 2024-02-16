"use client";

import { useState } from "react";
import { ChevronsUp, Plus, UploadCloud } from "lucide-react";
import DropDownCom from "./DropDownCom";

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
interface IItems {
  id: number;
  value: string;
}

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedItem, setSelectedItem] = useState<string>("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedFiles, setSelectedFiles] = useState<FileData[]>([]);

  const categoryData: IItems[] = [
    {
      id: 1,
      value: "Drink's",
    },
    {
      id: 2,
      value: "Fast Food",
    },
    {
      id: 3,
      value: "Dessert",
    },
    {
      id: 4,
      value: " Category",
    },
  ];

  return (
    <div className="bg-white p-10 mx-5 rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-black">Add Product</h1>
        <p>Create new product</p>
      </div>
      <form action="">
        <div className="grid grid-cols-3 gap-5 text-black ">
          <div className="flex flex-col gap-4   ">
            <label htmlFor="productID">Product ID</label>
            <input
              disabled
              type="text"
              id="productID"
              name="productID"
              placeholder="#32"
              className="w-[300px] bg-[#e9e9e9] text-[#7d7a7b] border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none  focus:border-black"
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              id="productName"
              name="productName"
              placeholder="Enter Product Name"
              className="w-[300px] border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="category">Category</label>
            <DropDownCom
              defaultValue="Choose Category"
              items={categoryData}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="subCategory">Sub Category (Optional)</label>
            <input
              type="text"
              id="subCategory"
              name="subCategory"
              placeholder="Enter Sub Category"
              className="w-[300px] border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="brand">Brand</label>
            <DropDownCom
              defaultValue="Choose Brand"
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="unit">Unit</label>
            <input
              type="text"
              id="unit"
              name="unit"
              placeholder="Enter Unit"
              className="w-[300px] border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              placeholder="Enter Quantity"
              className="w-[300px] border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="alertQuantity">Alert Quantity</label>
            <input
              type="text"
              id="alertQuantity"
              name="alertQuantity"
              placeholder="Alert Quantity"
              className="w-[300px] border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="brand">Tax</label>
            <DropDownCom
              defaultValue="Choose Tax"
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="brand">Discount Type</label>
            <DropDownCom
              defaultValue="Pernectage"
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="Enter Price"
              className="w-[300px] border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="brand">Status</label>
            <DropDownCom
              defaultValue="Closed"
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          </div>
        </div>
        {/* Promotion sections */}
        <div className="my-5">
          <h1 className="flex text-black text-xl font-bold py-5 justify-start items-center">
            <span className="py-2 font-extrabold">
              <ChevronsUp />
            </span>
            <span>Promotion</span>
          </h1>
          <div className="grid grid-cols-3 gap-5 text-black">
            <div className="flex flex-col gap-4   ">
              <label htmlFor="promotionPrice">Promotion Price</label>
              <input
                type="text"
                id="promotionPrice"
                name="promotionPrice"
                placeholder="Enter Promotion Price"
                className="w-[300px] border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
              />
            </div>
            {/* 2 Date picker */}
            <div className="flex flex-col gap-4   ">
              <label htmlFor="title">Start Date</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Date"
                className="w-[300px] border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
              />
            </div>
            <div className="flex flex-col gap-4   ">
              <label htmlFor="amount">End Date</label>
              <input
                type="text"
                id="amount"
                name="amount"
                placeholder="Amount"
                className="w-[300px] border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
              />
            </div>
          </div>
        </div>
        {/* Image section */}
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
        <div className="flex justify-start items-end  my-5">
          <button
            type="submit"
            className="btn mr-2 text-white text-base hover:scale-105 border-0 bg-gradient-to-r py-2 from-[#438FFD] to-[#00FC44] form-submit"
          >
            <span className="font-bold">
              <Plus />
            </span>
            <span>Add Product</span>
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
