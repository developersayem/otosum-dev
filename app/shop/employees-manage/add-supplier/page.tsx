"use client";
import React, { useState, FormEvent } from "react";
import UploadImg from "./UploadImg";

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

const AddEmployeesPage: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileData[]>([]);

  const handleAddEmployeesSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = e.target as HTMLFormElement;
    const data: FormData = {
      firstName: formData.firstName.value,
      lastName: formData.lastName.value,
      email: formData.email.value,
      phone: formData.phone.value,
      branch: formData.branch.value,
      address: formData.address.value,
      state: formData.state.value,
      userName: formData.userName.value,
      status: formData.status.value,
      joiningDate: formData.joiningDate.value,
      city: formData.city.value,
      postalCode: formData.postalCode.value,
      password: formData.password.value,
      selectedFiles,
      role: formData.employeeRole.value,
    };

    console.log(data);

    // form reset on submit
    setSelectedFiles([]);
    formData.reset();
  };

  return (
    <div className="p-5 m-5 bg-white rounded-xl">
      <div className="flex justify-between items-center p-5">
        <div>
          <h1 className="text-2xl font-bold text-black">Add Supplier</h1>
          <p className="text-[#6C696A]">Create a new supplier</p>
        </div>
        <UploadImg
          selectedFiles={selectedFiles}
          setSelectedFiles={setSelectedFiles}
        />
      </div>
      <form onSubmit={handleAddEmployeesSubmit} className="text-[#504C4D] p-5">
        <div className="grid grid-cols-3 gap-y-2 gap-x-5 w-full ">
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
              className="input input-bordered w-full max-w-xs bg-transparent"
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
              className="input input-bordered w-full max-w-xs bg-transparent"
            />
          </div>
          <div className="py-3">
            <label className="block   text-sm font-bold mb-1" htmlFor="gender">
              Gender(dropdown)
            </label>
            <input
              type="text"
              placeholder="Type here"
              name="gender"
              className="input input-bordered w-full max-w-xs bg-transparent"
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
              className="input input-bordered w-full max-w-xs bg-transparent"
            />
          </div>
          <div className="py-3">
            <label className="block   text-sm font-bold mb-1" htmlFor="status">
              Status (dropdown)
            </label>
            <input
              type="text"
              placeholder="Type here"
              name="status"
              className="input input-bordered w-full max-w-xs bg-transparent"
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
              className="input input-bordered w-full max-w-xs bg-transparent"
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
              className="input input-bordered w-full max-w-xs bg-transparent"
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
              className="input input-bordered w-full max-w-xs bg-transparent"
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
              className="input input-bordered w-full max-w-xs bg-transparent"
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
              className="input input-bordered w-full max-w-xs bg-transparent"
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
              className="input input-bordered w-full max-w-xs bg-transparent"
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
              className="input input-bordered w-full max-w-xs bg-transparent"
            />
          </div>
        </div>
      </form>
      {/* FORM BUTTON SECTION START */}
      <div className="flex justify-start items-center mr-5 my-5">
        <button
          type="submit"
          className="btn px-16 mx-5 text-white border-0 bg-gradient-to-r py-2 from-[#438FFD] to-[#00FC44] form-submit"
        >
          Save
        </button>
        <button
          type="reset"
          className="btn bg-transparent   py-0 px-8 border-2 border-[#BBBABA] hover:bg-white"
          onClick={() => setSelectedFiles([])}
        >
          Reset
        </button>
      </div>
      {/* FORM BUTTON SECTION END */}
    </div>
  );
};

export default AddEmployeesPage;
