/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { FormEvent, useEffect, useState } from "react";
import { ChevronsUp, Plus } from "lucide-react";
import DropDownCom from "./DropDownCom";
import DatePickerCom from "./DatePickerCom";
import toast, { Toaster } from "react-hot-toast";
import UploadImg from "./UploadImg";
import { useBusinessNameContext } from "@/app/context/businessNameContext";
import ProductCategoryDropDownCom from "./ProductCategoryDropDownCom";

interface FileData {
  fileName: string;
  fileImage: string;
}

const Page = () => {
  const [productCategory, setProductCategory] = useState<string | null>(
    "all categories"
  );
  const [productDiscountType, setProductDiscountType] =
    useState<string>("percentage");
  const [taxType, setTaxType] = useState<string>("percentage");
  const [promotionalStatus, setPromotionalStatus] = useState<string>("closed");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<FileData | null>(null); // Change here
  const { businessName } = useBusinessNameContext();
  const [user, setUser] = useState({ name: "", role: "", email: "" });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Define form submit handler
  const addProductHandler = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    // get today date as sting
    const today = new Date().toISOString().split("T")[0];

    //

    try {
      const response = await fetch("/api/shop/products/add-products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          businessName: businessName,
          productName: formData.get("productName"),
          img: selectedFile, // Change here
          category: productCategory,
          subCategory: formData.get("subCategory"),
          brand: formData.get("brand"),
          cost: formData.get("cost"),
          quantity: formData.get("quantity"),
          alertQuantity: formData.get("alertQuantity"),
          discountType: productDiscountType,
          discount: formData.get("discountAmount"),
          taxType: taxType,
          tax: formData.get("tax"),
          price: formData.get("price"),
          promotionalStatus: promotionalStatus,
          promotionalPrice: formData.get("promotionalPrice"),
          promotionalStartDate: startDate,
          promotionalEndDate: endDate,
          description: formData.get("description"),
          name: user.name,
          email: user.email,
          role: user.role,
          createdAt: today,
          updatedAt: today,
        }),
      });
      if (response.ok) {
        toast.success("Product added successfully");
      } else {
        toast.error("An error occurred while adding product");
      }
    } catch (error) {
      console.error("An error occurred while adding product:", error);
    }
  };

  return (
    <div className="bg-white p-10 mx-5 rounded-xl">
      <Toaster />
      <div>
        <h1 className="text-2xl font-bold text-black">Add Product</h1>
        <p>Create new product</p>
      </div>
      <form action="" onSubmit={addProductHandler} className="mt-10">
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-black mt-10">
          <div className="flex flex-col gap-4   ">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              id="productName"
              name="productName"
              placeholder="Enter Product Name"
              className=" border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="category">Category</label>
            <ProductCategoryDropDownCom
              selectedItem={productCategory}
              setSelectedItem={setProductCategory}
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="subCategory">Sub Category (Optional)</label>
            <input
              type="text"
              id="subCategory"
              name="subCategory"
              placeholder="Enter Sub Category"
              className="border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              id="brand"
              name="brand"
              placeholder="Enter Brand Name"
              className="border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>

          <div className="flex flex-col gap-4   ">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              placeholder="Enter Quantity"
              className=" border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="alertQuantity">Alert Quantity</label>
            <input
              type="text"
              id="alertQuantity"
              name="alertQuantity"
              placeholder="Alert Quantity"
              className=" border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="taxType">Tax Type</label>
            <DropDownCom
              defaultValue="taxType"
              selectedItem={taxType}
              setSelectedItem={setTaxType}
              items={[
                {
                  id: 1,
                  value: "percentage",
                },
                {
                  id: 2,
                  value: "amount",
                },
              ]}
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="tax">Discount Amount</label>
            <input
              type="text"
              id="tax"
              name="tax"
              placeholder="Enter Tax Amount"
              className=" border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>

          <div className="flex flex-col gap-4   ">
            <label htmlFor="cost">Cost</label>
            <input
              type="text"
              id="cost"
              name="cost"
              placeholder="Enter each Product Cost"
              className=" border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>

          <div className="flex flex-col gap-4   ">
            <label htmlFor="brand">Discount Type</label>
            <DropDownCom
              defaultValue="percentage"
              selectedItem={productDiscountType}
              setSelectedItem={setProductDiscountType}
              items={[
                {
                  id: 1,
                  value: "percentage",
                },
                {
                  id: 2,
                  value: "amount",
                },
              ]}
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="price">Discount Amount</label>
            <input
              type="text"
              id="price"
              name="discountAmount"
              placeholder="Enter Amount"
              className=" border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>
          <div className="flex flex-col gap-4   ">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="Enter each Product Price"
              className=" border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
            />
          </div>
          <div className="flex  gap-4  items-center  ">
            <label htmlFor="brand font-bold">Promotional Status</label>
            <DropDownCom
              defaultValue="Closed"
              selectedItem={promotionalStatus}
              setSelectedItem={setPromotionalStatus}
              items={[
                {
                  id: 1,
                  value: "open",
                },
                {
                  id: 2,
                  value: "closed",
                },
              ]}
            />
          </div>
        </div>
        {/* Promotion sections */}
        {promotionalStatus === "open" && (
          <div className="my-5">
            <h1 className="flex text-black text-xl font-bold py-5 justify-start items-center">
              <span className="py-2 font-extrabold">
                <ChevronsUp />
              </span>
              <span>Promotion</span>
            </h1>
            <div className="grid grid-cols-3 gap-5 text-black">
              <div className="flex flex-col gap-4   ">
                <label htmlFor="promotionalPrice">Promotional Price</label>
                <input
                  type="text"
                  id="promotionalPrice"
                  name="promotionalPrice"
                  placeholder="Enter Promotion Price"
                  className=" border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
                />
              </div>
              {/* 2 Date picker */}
              <div className="flex flex-col gap-4   ">
                <label htmlFor="title">Start Date</label>
                <DatePickerCom date={startDate} setDate={setStartDate} />
              </div>
              <div className="flex flex-col gap-4   ">
                <label htmlFor="amount">End Date</label>
                <DatePickerCom date={endDate} setDate={setEndDate} />
              </div>
            </div>
          </div>
        )}

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
export default Page;
