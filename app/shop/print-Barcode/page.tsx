"use client";

import { useState } from "react";
import { ChevronsUp } from "lucide-react";
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
        <h1 className="text-2xl font-bold text-black">Print Barcode</h1>
        <p>Print product barcode</p>
      </div>
      <form action="">
        <div className="grid grid-cols-3 gap-5 text-black ">
          <div className="flex flex-col gap-4   ">
            <label htmlFor="productID">Product</label>
            <DropDownCom
              defaultValue="Choose Category"
              items={categoryData}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="productName">Quantity</label>
            <DropDownCom
              defaultValue="Choose Category"
              items={categoryData}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="category">Style</label>
            <DropDownCom
              defaultValue="Choose Category"
              items={categoryData}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="subCategory">Size</label>
            <input
              type="text"
              id="subCategory"
              name="subCategory"
              placeholder="Enter Sub Category"
              className="w-[300px] border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="subCategory">Custom Size</label>
            <input
              type="text"
              id="subCategory"
              name="subCategory"
              placeholder="Enter Sub Category"
              className="w-[300px] border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="brand">Orientation</label>
            <DropDownCom
              defaultValue="Choose Brand"
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
              <label htmlFor="promotionPrice">Shop Name</label>
              <input
                type="text"
                id="promotionPrice"
                name="promotionPrice"
                placeholder="Enter Promotion Price"
                className="w-[300px] border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
              />
            </div>
            <div className="flex flex-col gap-4   ">
              <label htmlFor="promotionPrice">Product Name</label>
              <input
                type="text"
                id="promotionPrice"
                name="promotionPrice"
                placeholder="Enter Promotion Price"
                className="w-[300px] border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
              />
            </div>
            <div className="flex flex-col gap-4   ">
              <label htmlFor="brand">Category</label>
              <DropDownCom
                defaultValue="Choose Brand"
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            </div>
            <div className="flex flex-col gap-4   ">
              <label htmlFor="promotionPrice">Price</label>
              <input
                type="text"
                id="promotionPrice"
                name="promotionPrice"
                placeholder="Enter Promotion Price"
                className="w-[300px] border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
              />
            </div>
            <div className="flex flex-col gap-4   ">
              <label htmlFor="brand">Currency</label>
              <DropDownCom
                defaultValue="Choose Brand"
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            </div>
          </div>
        </div>
        {/* BUTTON SECTION */}
        <div className="flex justify-start items-end  my-5">
          <button
            type="submit"
            className="btn mr-2 text-white text-base hover:scale-105 border-0 bg-gradient-to-r py-2 px-8 from-[#438FFD] to-[#00FC44] form-submit"
          >
            <span>Print</span>
          </button>
          <button
            type="reset"
            className="btn mx-2 bg-transparent py-0 px-8 border-2 hover:scale-105 border-[#BBBABA] form-submit text-black text-base hover:bg-transparent"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};
export default page;
