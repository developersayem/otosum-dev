"use client";

import Image from "next/image";
import Otosum from "../../../public/otosum.svg";
import Link from "next/link";
import AuthHeaderCom from "../shared/AuthHeaderCom";
import { FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function signInPage() {
  // Define form submit handler
  const signInHandler = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      businessName: formData.get("businessName") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    console.log(data);
    toast.success("Sign In successfully");
    toast.success(`${data.businessName},${data.email},${data.password}`);

    // try {
    //   const response = await fetch("/api/users/sign-up", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       businessName: formData.get("businessName") as string,
    //       email: formData.get("email") as string,
    //       password: formData.get("password") as string,
    //     }),
    //   });

    //   if (response.ok) {
    //     // Redirect to dashboard upon successful login
    //     // router.push("/dashboard");
    //     toast.success("Registered successfully");
    //   } else {
    //     setError("Invalid username or password");
    //   }
    // } catch (error) {
    //   console.error("Error logging in:", error);
    //   setError("An error occurred while logging in");
    // }

    // Reset form
    // formData.reset();
  };

  // Render page content
  return (
    <div className="min-h-screen min-w-screen bg-white text-black  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 justify-start items-center">
      <Toaster />

      {/* LOGO SECTION */}
      {/* <div className="flex justify-center items-center bg-[#0b1542] md:hidden lg:hidden 2xl:hidden">
        <Image
          src={Otosum}
          alt="Otosum"
          width={300}
          height={300}
          className="py-2"
        />
      </div> */}
      {/* HEADER SECTIOM */}
      <AuthHeaderCom />
      {/* FORM SECTION */}
      <div className=" h-full w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl font-extrabold text-black mb-2">
          Login your account
        </h1>
        <p className="text-md text-[#a3a1a2] mb-10">
          Enter your email and password below
        </p>
        <form
          onSubmit={signInHandler}
          className="flex flex-col justify-center items-center text-[#a3a1a2]"
        >
          <div className="w-[350px] lg:w-[400px] mt-5">
            <label className="text-black font-medium">Business Name</label>
            <input
              type="text"
              placeholder="Business Name"
              name="businessName"
              className="input flex-col border border-black w-full bg-transparent mt-1 focus:border-none focus:outline-green-500"
            />
          </div>
          <div className="w-[350px] lg:w-[400px] mt-5">
            <label className="text-black font-medium">Email</label>
            <input
              type="text"
              placeholder="example@gmail.com"
              name="email"
              className="input flex-col border border-black w-full bg-transparent mt-1 focus:border-none focus:outline-green-500"
            />
          </div>
          <div className="w-[350px] lg:w-[400px] mt-5">
            <label className="text-black font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="*******"
              className="input border border-black w-full mt-1 bg-transparent  focus:border-none focus:outline-green-500"
            />
          </div>
          <div className="flex justify-between items-center w-full  mt-2">
            <label className="cursor-pointer label">
              <span className="label-text">Remember me</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox ml-2 checkbox-success"
              />
            </label>
            <Link href="#" className="text-blue-500 ">
              Forgot Password?
            </Link>
          </div>
          <button className="btn btn-primary mt-5 w-full border-none text-white bg-gradient-to-r from-[#438FFD] to-[#00FC44]">
            Log In
          </button>
          <p className="mt-5">
            Don&apos;t have an account?
            <Link href="/auth/sign-up" className="text-blue-500">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
function setError(arg0: string) {
  throw new Error("Function not implemented.");
}
