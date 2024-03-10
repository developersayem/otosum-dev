"use client";

import type { NextComponentType, NextPageContext } from "next";
import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";
import Otosum from "../../../public/otosum.svg";
interface Props {}

const SignUpHeaderCom: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <>
      {!isMobile && (
        <div className="bg-[#0b1542] h-full w-full flex flex-col justify-center items-start px-12 text-white ">
          <Image
            src={Otosum}
            alt="logo"
            className="mb-20"
            width={500}
            height={500}
            objectFit="contain"
          />
          <h1 className="text-5xl font-bold mb-5">Streamline Sales with Us</h1>
          <p className="text-xl w-[500px]">
            Say goodbye to long queues and slow transactions. Our POS software
            is designed for speed and simplicity, making every sale a breeze.
          </p>
          <div className="flex gap-2 mt-10">
            <div className="w-2 h-2 bg-[#858aa0] rounded-full"></div>
            <div className="w-2 h-2 bg-[#858aa0] rounded-full"></div>
            <div className="w-6 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-[#858aa0] rounded-full"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpHeaderCom;
