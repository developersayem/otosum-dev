"use client";

import { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import AuthHeaderCom from "../shared/AuthHeaderCom";
import DropDownCom from "./DropDownCom";
import toast from "react-hot-toast";

interface Props {}

const SignUpCom: NextComponentType<NextPageContext, {}, Props> = () => {
  // Define state variables
  const [selectedItem, setSelectedItem] = useState<string>("Category");
  const [error, setError] = useState<string>("");

  // Define form submit handler
  const RegisterHandler = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    try {
      const response = await fetch("/api/users/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name") as string,
          email: formData.get("email") as string,
          password: formData.get("password") as string,
          businessName: formData.get("businessName") as string,
          category: selectedItem,
        }),
      });

      if (response.ok) {
        // Redirect to dashboard upon successful login
        // router.push("/dashboard");
        toast.success("Registered successfully");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("An error occurred while logging in");
    }
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
          onSubmit={RegisterHandler}
          className="flex flex-col justify-center items-center text-[#a3a1a2]"
        >
          {/* Form inputs */}
          <div className="w-[350px] lg:w-[400px] mt-5">
            <label className="text-black font-light">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="input flex-col border border-black w-full bg-transparent mt-1 focus:border-none focus:outline-green-500"
            />
          </div>
          <div className="w-[350px] lg:w-[400px] mt-5">
            <label className="text-black font-light">Business Name</label>
            <input
              type="text"
              name="businessName"
              placeholder="Urban Harmony"
              className="input flex-col border border-black w-full bg-transparent mt-1 focus:border-none focus:outline-green-500"
            />
          </div>
          {/* DropDownCom component */}
          <div className="w-[350px] md:w-[400px] lg:w-[400px] mt-5">
            <label className="text-black font-light">Category</label>
            <DropDownCom
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              items={[
                { id: 1, value: "restaurants" },
                { id: 2, value: "retails" },
                { id: 3, value: "grocery" },
                { id: 4, value: "others" },
              ]}
            />
          </div>

          <div className="w-[350px] lg:w-[400px] mt-5">
            <label className="text-black font-light">Email</label>
            <input
              type="email"
              name="email"
              placeholder="jhondoe@gmail.com"
              className="input flex-col border border-black w-full bg-transparent mt-1 focus:border-green-500 focus:border-none focus:outline-green-500"
            />
          </div>
          <div className="w-[350px] lg:w-[400px] mt-5">
            <label className="text-black font-light">Password</label>
            <input
              type="password"
              name="password"
              placeholder="*******"
              className="input flex-col border border-black w-full bg-transparent mt-1 focus:border-green-500 focus:border-none focus:outline-green-500"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="btn btn-primary mt-5 w-full border-none text-white bg-gradient-to-r from-[#438FFD] to-[#00FC44]"
          >
            Sign Up
          </button>

          {/* Error message */}
          {error && <p className="text-red-500 mt-2">{error}</p>}

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
