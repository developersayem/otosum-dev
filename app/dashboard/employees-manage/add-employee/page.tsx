"use client";
import React, { useState, FormEvent } from "react";
import UploadImg from "./UploadImg";
import toast, { Toaster } from "react-hot-toast";
import DropDownCom from "./DropDownCom";
import DatePickerCom from "./DatePikerCom";
import StoreDropDownCom from "./StoreDropDownCom";
import { useBusinessNameContext } from "@/app/context/businessNameContext";

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
  selectedFiles: FileData[]; // Change to array
}

const AddEmployeesPage: React.FC = () => {
  const { businessName } = useBusinessNameContext();
  const [selectedFile, setSelectedFile] = useState<FileData | null>(null);
  const [role, setRole] = useState("Select Role");
  const [status, setStatus] = useState("Select Status");
  const [date, setDate] = useState<string>("");
  const [shopName, setShopName] = useState<string | null>("Select Shop Name");

  const handleAddEmployee = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    try {
      const response = await fetch(
        "/api/dashboard/employees-manage/add-employee",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            businessName: businessName,
            firstName: formData.get("firstName") as string,
            lastName: formData.get("lastName") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            branch: formData.get("branch") as string,
            address: formData.get("address") as string,
            state: formData.get("state") as string,
            shopName: shopName,
            status: status,
            joiningDate: date,
            city: formData.get("city") as string,
            postalCode: formData.get("postalCode") as string,
            password: formData.get("password") as string,
            img: selectedFile,
            role: role,
          }),
        }
      );
      if (response.ok) {
        toast.success("Employee added successfully");
      } else {
        toast.error("An error occurred while adding Employee");
      }
    } catch (error) {
      console.error("An error occurred while adding Employee:", error);
    }
  };

  return (
    <div className="p-5 m-5 bg-white rounded-xl">
      <Toaster />
      <h1 className="text-2xl font-bold text-black">Add Employee</h1>
      <p className="text-[#6C696A]">Create a new employee</p>
      <form onSubmit={handleAddEmployee} className="text-[#504C4D]">
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
          {/* FROM MAIN SECTIONS START */}
          <div>
            <div className="bg-[#F8F8F8] m-5 p-5  rounded-x">
              <UploadImg
                selectedFile={selectedFile} // Change here
                setSelectedFile={setSelectedFile} // Change here
              />
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
                  className="input input-bordered w-full bg-transparent"
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
                <label
                  className="block   text-sm font-bold mb-1"
                  htmlFor="email"
                >
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
                <label
                  className="block   text-sm font-bold mb-1"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Type here"
                  className="input input-bordered w-full  bg-transparent"
                />
              </div>
            </div>
          </div>
          {/* FROM Second SECTIONS END */}
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 px-5">
            <div className="py-3">
              <label className="block   text-sm  mb-1" htmlFor="shopName">
                Shop Name
              </label>
              <StoreDropDownCom
                selectedItem={shopName}
                setSelectedItem={setShopName}
              />
            </div>
            <div className="py-3">
              <label className="block text-sm  mb-1" htmlFor="branch">
                Branch
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="branch"
                className="input input-bordered w-full  bg-transparent"
              />
            </div>
            <div className="py-3">
              <label className="block   text-sm mb-1" htmlFor="employeeRole">
                Role
              </label>
              <DropDownCom
                selectedItem={role}
                setSelectedItem={setRole}
                items={[
                  {
                    id: 1,
                    value: "admin",
                  },
                  {
                    id: 2,
                    value: "manager",
                  },
                  {
                    id: 3,
                    value: "employee",
                  },
                ]}
              />
            </div>
            <div className="py-3">
              <label className="block   text-sm  mb-1" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="address"
                className="input input-bordered w-full bg-transparent"
              />
            </div>
            <div className="py-3">
              <label className="block   text-sm  mb-1" htmlFor="state">
                State
              </label>
              <input
                type="text"
                name="state"
                placeholder="Type here"
                className="input input-bordered w-full bg-transparent"
              />
            </div>
            <div className="py-3">
              <label className="block   text-sm mb-1" htmlFor="status">
                Status
              </label>
              <DropDownCom
                selectedItem={status}
                setSelectedItem={setStatus}
                items={[
                  {
                    id: 1,
                    value: "active",
                  },
                  {
                    id: 2,
                    value: "inactive",
                  },
                ]}
              />
            </div>
            <div className="py-3">
              <label className="block   text-sm  mb-1" htmlFor="joiningDate">
                Joining Date
              </label>
              <DatePickerCom selectedDate={date} setSelectedDate={setDate} />
            </div>
            <div className="py-3">
              <label className="block   text-sm  mb-1" htmlFor="city">
                City
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="city"
                className="input input-bordered w-full  bg-transparent"
              />
            </div>
            <div className="py-3">
              <label className="block   text-sm  mb-1" htmlFor="postalCode">
                Postal Code
              </label>
              <input
                type="text"
                name="postalCode"
                placeholder="Type here"
                className="input input-bordered w-full bg-transparent"
              />
            </div>
            <div className="py-3">
              <label className="block   text-sm  mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="text"
                name="password"
                placeholder="Type here"
                className="input input-bordered w-full  bg-transparent"
              />
            </div>
            <div className="col-span-2">
              <div className="flex sm:justify-start md:justify-start lg:justify-end items-center mr-5 my-5">
                <button
                  type="submit"
                  className="btn px-16 mx-5 text-white border-0 bg-gradient-to-r py-2 from-[#438FFD] to-[#00FC44] form-submit"
                >
                  Save
                </button>
                <button
                  type="reset"
                  className="btn bg-transparent   py-0 px-8 border-2 border-[#BBBABA] form-submit"
                  onClick={() => setSelectedFile(null)}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
          {/* FORM BUTTON SECTION START */}

          {/* FORM BUTTON SECTION END */}
        </div>
      </form>
    </div>
  );
};

export default AddEmployeesPage;
