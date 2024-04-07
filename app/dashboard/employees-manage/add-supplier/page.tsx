"use client";
import React, { useState, FormEvent } from "react";
import UploadImg from "./UploadImg";
import { useBusinessNameContext } from "@/app/context/businessNameContext";
import toast, { Toaster } from "react-hot-toast";
import DropDownCom from "./DropDownCom";

interface FileData {
  fileName: string;
  fileImage: string;
}

interface FormData {
  businessName: string;
  firstName: string;
  lastName: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  state: string;
  status: string;
  city: string;
  postalCode: string;
  country: string;
  selectedFiles: FileData[];
}

const AddEmployeesPage: React.FC = () => {
  const { businessName } = useBusinessNameContext();
  const [selectedFile, setSelectedFile] = useState<FileData | null>(null);
  const [gender, setGender] = useState("Select Gender");
  const [status, setStatus] = useState("Select Status");

  const handleAddSupplier = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    try {
      const response = await fetch(
        "/api/dashboard/employees-manage/add-supplier",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            businessName: businessName,
            firstName: formData.get("firstName") as string,
            lastName: formData.get("lastName") as string,
            gender: gender,
            company: formData.get("company") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            address: formData.get("address") as string,
            state: formData.get("state") as string,
            status: status,
            city: formData.get("city") as string,
            postalCode: formData.get("postalCode") as string,
            country: formData.get("country") as string,
            img: selectedFile,
          }),
        }
      );
      if (response.ok) {
        toast.success("Supplier added successfully");
      } else {
        toast.error("An error occurred while adding Supplier");
      }
    } catch (error) {
      console.error("An error occurred while adding Supplier:", error);
    }
  };

  return (
    <div className="p-5 m-5 bg-white rounded-xl">
      <Toaster />
      <div className="flex justify-between items-center p-5">
        <div>
          <h1 className="text-2xl font-bold text-black">Add Supplier</h1>
          <p className="text-[#6C696A]">Create a new supplier</p>
        </div>
        <div className="border px-5 rounded-lg">
          <UploadImg
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />
        </div>
      </div>
      <form onSubmit={handleAddSupplier} className="text-[#504C4D] p-5">
        <div className="grid sm:grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-y-2 gap-x-5 w-full ">
          <div className="py-3">
            <label
              className="block   text-sm font-bold mb-1"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              placeholder="Type here"
              name="firstName"
              className="input input-bordered w-full  bg-transparent"
            />
          </div>
          <div className="py-3">
            <label
              className="block   text-sm font-bold mb-1"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              placeholder="Type here"
              name="lastName"
              className="input input-bordered w-full  bg-transparent"
            />
          </div>
          <div className="py-3">
            <label className="block   text-sm font-bold mb-1" htmlFor="gender">
              Gender(dropdown)
            </label>
            <DropDownCom
              selectedItem={gender}
              setSelectedItem={setGender}
              items={[
                { id: 1, value: "Male" },
                { id: 2, value: "Female" },
                { id: 3, value: "Other" },
              ]}
            />
          </div>
          <div className="py-3">
            <label className="block   text-sm font-bold mb-1" htmlFor="company">
              Company
            </label>
            <input
              type="text"
              name="company"
              placeholder="Type here"
              className="input input-bordered w-full bg-transparent"
            />
          </div>
          <div className="py-3">
            <label className="block   text-sm font-bold mb-1" htmlFor="status">
              Status
            </label>
            <DropDownCom
              selectedItem={status}
              setSelectedItem={setStatus}
              items={[
                { id: 1, value: "active" },
                { id: 2, value: "inactive" },
              ]}
            />
          </div>
          <div className="py-3">
            <label className="block   text-sm font-bold mb-1" htmlFor="phone">
              Phone
            </label>
            <input
              type="text"
              placeholder="Type here"
              name="phone"
              className="input input-bordered w-full bg-transparent"
            />
          </div>
          <div className="py-3">
            <label className="block   text-sm font-bold mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              placeholder="Type here"
              name="email"
              className="input input-bordered w-full  bg-transparent"
            />
          </div>
          <div className="py-3">
            <label className="block   text-sm font-bold mb-1" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Type here"
              className="input input-bordered w-full  bg-transparent"
            />
          </div>
          <div className="py-3">
            <label className="block   text-sm font-bold mb-1" htmlFor="city">
              City
            </label>
            <input
              type="text"
              name="city"
              placeholder="Type here"
              className="input input-bordered w-full  bg-transparent"
            />
          </div>
          <div className="py-3">
            <label className="block   text-sm font-bold mb-1" htmlFor="state">
              State
            </label>
            <input
              type="text"
              placeholder="Type here"
              name="state"
              className="input input-bordered w-full  bg-transparent"
            />
          </div>
          <div className="py-3">
            <label
              className="block   text-sm font-bold mb-1"
              htmlFor="postalCode"
            >
              Postal Code
            </label>
            <input
              type="text"
              placeholder="Type here"
              name="postalCode"
              className="input input-bordered w-full  bg-transparent"
            />
          </div>
          <div className="py-3">
            <label className="block   text-sm font-bold mb-1" htmlFor="country">
              Country
            </label>
            <input
              type="text"
              placeholder="Type here"
              name="country"
              className="input input-bordered w-full bg-transparent"
            />
          </div>
          {/* FORM BUTTON SECTION START */}
          <div className="col-span-3 gap-5 my-5">
            <button
              type="submit"
              className="btn px-16 mx-5 text-white border-0 bg-gradient-to-r py-2 from-[#438FFD] to-[#00FC44] form-submit"
            >
              Save
            </button>
            <button
              type="reset"
              className="btn bg-transparent   py-0 px-8 border-2 border-[#BBBABA] hover:bg-white"
              onClick={() => setSelectedFile(null)}
            >
              Reset
            </button>
          </div>
        </div>
      </form>

      {/* FORM BUTTON SECTION END */}
    </div>
  );
};

export default AddEmployeesPage;
