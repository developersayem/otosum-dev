"use client";
import Image from "next/image";
import AvaterIcon from "../../public/avater.png";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";
import CalculatorLayoutCom from "../components/Calculator/CalculatorLayoutCom";

const TopNavBar = () => {
  const path = usePathname();

  return (
    <div
      className={`navbar flex justify-end items-center px-5 bg-white mb-5 h-20`}
    >
      {path === "/shop/pos" ? (
        <CalculatorLayoutCom />
      ) : (
        <Link href="/shop/pos" className="mr-5">
          <button className="btn border-0 rounded-xl text-gl hover:scale-105 text-white bg-gradient-to-r from-[#00FC44] to-[#438FFD]">
            <span className="text-lg font-extrabold">
              <ShoppingCart />
            </span>
            POS
          </button>
        </Link>
      )}
      <div className="dropdown dropdown-end">
        <div className="flex justify-center items-center">
          <div className="mr-5 p-2 text-2xl cursor-pointer bg-[#f2f2f2] rounded-full hover:text-black hover:bg-gradient-to-r hover:from-[#4391fd2b] hover:to-[#00fc4329]">
            <FaRegBell />
          </div>
          <div className="mr-5 p-2 text-2xl cursor-pointer bg-[#f2f2f2] rounded-full hover:text-black hover:bg-gradient-to-r hover:from-[#4391fd48] hover:to-[#00fc4346]">
            <AiOutlineMessage />
          </div>
          <div className="mr-5 ">
            <h1 className="font-bold">Thomas Anree</h1>
            <h2 className="text-[#6C696A] text-md">@thomas.an</h2>
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
        <ul
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
        </ul>
      </div>
    </div>
  );
};

export default TopNavBar;
