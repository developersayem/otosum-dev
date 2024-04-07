"use client";
import Image from "next/image";
import AvaterIcon from "../../public/avater.png";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { useEffect, useState } from "react";

const TopNavBar = () => {
  const [user, setUser] = useState({ name: "", role: "" });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div
      className={`navbar flex justify-end items-center px-5 bg-white mb-5 h-20 `}
    >
      <div className="dropdown dropdown-end">
        <div className="flex justify-center items-center">
          <div className="mr-5 p-2 text-2xl cursor-pointer bg-[#f2f2f2] rounded-full hover:text-black hover:bg-gradient-to-r hover:from-[#4391fd2b] hover:to-[#00fc4329]">
            <FaRegBell />
          </div>
          <div className="mr-5 p-2 text-2xl cursor-pointer bg-[#f2f2f2] rounded-full hover:text-black hover:bg-gradient-to-r hover:from-[#4391fd48] hover:to-[#00fc4346]">
            <AiOutlineMessage />
          </div>
          <div className="mr-5 ">
            <h1 className="font-bold capitalize text-lg text-black">
              {user?.name}
            </h1>
            <h2 className=" text-md capitalize text-green-500">
              {user?.role || "user"}
            </h2>
          </div>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full cursor-pointer">
              <Image
                src={AvaterIcon}
                alt="avater"
                width={40}
                height={40}
                className="bg-transparent transition-all duration-300"
              />
            </div>
          </div>
        </div>
        {/* <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52"
        >
          <li className="hover:text-black hover:bg-gradient-to-r hover:from-[#4391fd2b] hover:to-[#00fc4329] rounded-full">
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li className="hover:text-black hover:bg-gradient-to-r hover:from-[#4391fd2b] hover:to-[#00fc4329] rounded-full">
            <a>Settings</a>
          </li>
          <li className="hover:text-black hover:bg-gradient-to-r hover:from-[#4391fd2b] hover:to-[#00fc4329] rounded-full">
            <a>Logout</a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default TopNavBar;
