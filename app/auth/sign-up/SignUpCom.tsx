"use client";

// Import necessary modules
import type { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import { FormEvent, useState } from "react";
import AuthHeaderCom from "../shared/AuthHeaderCom";
import Otosum from "../../../public/otosum.svg";
import DropDownCom from "./DropDownCom";

interface Props {}

const SignUpCom: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  // Define state variables
  const [selectedItem, setSelectedItem] = useState<string>("Category");

  // Define form submit handler
  const loginHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = e.target as HTMLFormElement;
    const data = {
      fullName: formData.fullName.value,
      email: formData.email.value,
      password: formData.password.value,
      shopName: formData.shopName.value,
      category: selectedItem,
    };

    console.log(data);

    // Reset form
    formData.reset();
  };

  // Return JSX
  return (
    <div className="min-h-screen min-w-screen bg-white text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 justify-start items-center">
      {/* AuthHeaderCom component for header */}
      <AuthHeaderCom />

      {/* Form section */}
      <div className="h-full w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl font-extrabold text-black mb-2">
          Sign up to Otosum
        </h1>
        <form
          onSubmit={loginHandler}
          className="flex flex-col justify-center items-center text-[#a3a1a2]"
        >
          {/* Form inputs */}
          <div className="w-[350px] lg:w-[400px] mt-5">
            <label className="text-black font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              className="input flex-col border border-black w-full bg-transparent mt-1 focus:border-black focus:outline-black"
            />
          </div>
          <div className="w-[350px] lg:w-[400px] mt-5">
            <label className="text-black font-medium">Email</label>
            <input
              type="text"
              name="email"
              placeholder="jhondoe@gmail.com"
              className="input flex-col border border-black w-full bg-transparent mt-1 focus:border-black focus:outline-black"
            />
          </div>
          <div className="w-[350px] lg:w-[400px] mt-5">
            <label className="text-black font-medium">Password</label>
            <input
              type="text"
              name="password"
              placeholder="*******"
              className="input flex-col border border-black w-full bg-transparent mt-1 focus:border-black focus:outline-black"
            />
          </div>
          <div className="w-[350px] lg:w-[400px] mt-5">
            <label className="text-black font-medium">Shop Name</label>
            <input
              type="text"
              name="shopName"
              placeholder="Urban Harmony"
              className="input flex-col border border-black w-full bg-transparent mt-1 focus:border-black focus:outline-black"
            />
          </div>

          {/* DropDownCom component */}
          <div className="w-[350px] md:w-[400px] lg:w-[400px] mt-5">
            <DropDownCom
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              items={[
                { id: 1, value: "Restaurants" },
                { id: 2, value: "Retails" },
                { id: 3, value: "Grocery" },
                { id: 4, value: "Others" },
              ]}
            />
          </div>

          {/* Submit button */}
          <button className="btn btn-primary mt-5 w-full border-none text-white bg-gradient-to-r from-[#438FFD] to-[#00FC44]">
            Sign Up
          </button>

          {/* Sign In link */}
          <p className="mt-5">
            Already have an account?{" "}
            <Link href="/auth/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpCom;
