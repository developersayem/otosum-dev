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

  const handleFileUploadSubmit = (e: FormEvent<HTMLFormElement>): void => {
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
      <h1 className="text-2xl font-bold text-black">Add Employee</h1>
      <p className="text-[#6C696A]">Create a new employee</p>
      <form onSubmit={handleFileUploadSubmit} className="text-[#504C4D]">
        <div className="flex">
          {/* FROM MAIN SECTIONS START */}
          <div className="bg-[#F8F8F8] m-5 p-5 w-96 rounded-xl">
            <UploadImg
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
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
              <label className="block   text-sm font-bold mb-1" htmlFor="phone">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs bg-transparent"
              />
            </div>
          </div>
          {/* FROM MAIN SECTIONS END */}
          <div>
            <div className="flex">
              {/* FROM-2 SECTIONS START */}
              <div className="px-5 py-2">
                <div className="py-3">
                  <label
                    className="block   text-sm font-bold mb-1"
                    htmlFor="branch"
                  >
                    Branch
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    name="branch"
                    className="input input-bordered w-full max-w-xs bg-transparent"
                  />
                </div>
                <div className="py-3">
                  <label
                    className="block   text-sm font-bold mb-1"
                    htmlFor="employeeRole"
                  >
                    Role (dropdown)
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    name="employeeRole"
                    className="input input-bordered w-full max-w-xs bg-transparent"
                  />
                </div>
                <div className="py-3">
                  <label
                    className="block   text-sm font-bold mb-1"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    name="address"
                    className="input input-bordered w-full max-w-xs bg-transparent"
                  />
                </div>
                <div className="py-3">
                  <label
                    className="block   text-sm font-bold mb-1"
                    htmlFor="state"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs bg-transparent"
                  />
                </div>
                <div className="py-3">
                  <label
                    className="block   text-sm font-bold mb-1"
                    htmlFor="userName"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="userName"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs bg-transparent"
                  />
                </div>
              </div>
              {/* FORM-2 SECTION END */}

              {/* FORM-3 SECTION START */}
              <div className="px-5 py-2">
                <div className="py-3">
                  <label
                    className="block   text-sm font-bold mb-1"
                    htmlFor="status"
                  >
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
                  <label
                    className="block   text-sm font-bold mb-1"
                    htmlFor="joiningDate"
                  >
                    Joining Date (date)
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    name="joiningDate"
                    className="input input-bordered w-full max-w-xs bg-transparent"
                  />
                </div>
                <div className="py-3">
                  <label
                    className="block   text-sm font-bold mb-1"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    name="city"
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
                    name="postalCode"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs bg-transparent"
                  />
                </div>
                <div className="py-3">
                  <label
                    className="block   text-sm font-bold mb-1"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs bg-transparent"
                  />
                </div>
              </div>
              {/* FROM-3 SECTIONS END */}
            </div>
            {/* FORM BUTTON SECTION START */}
            <div className="flex justify-end items-center mr-5 my-5">
              <button
                type="submit"
                className="btn px-16 mx-5 text-white border-0 bg-gradient-to-r py-2 from-[#438FFD] to-[#00FC44] form-submit"
              >
                Save
              </button>
              <button
                type="reset"
                className="btn bg-transparent   py-0 px-8 border-2 border-[#BBBABA] form-submit"
                onClick={() => setSelectedFiles([])}
              >
                Reset
              </button>
            </div>
            {/* FORM BUTTON SECTION END */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEmployeesPage;
