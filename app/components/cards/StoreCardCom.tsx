import type { NextComponentType, NextPageContext } from "next";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

interface Props {
  name: string;
  image: StaticImageData;
  todaySales: number;
  href: string;
  onlineSales: number;
  offlineSales: number;
}

const InfoCardCom: NextComponentType<NextPageContext, {}, Props> = ({
  name,
  image,
  todaySales,
  href,
  onlineSales,
  offlineSales,
}: Props) => {
  return (
    <Link href={`shop/${href}`}>
      <div className="card  bg-white shadow-xl m-5">
        <figure className="px-5 pt-5">
          <Image
            src={image}
            className="rounded-md"
            alt="alt"
            width={215}
            height={230}
          />
        </figure>
        <div className="card-body items-start text-start">
          <div className="w-full flex justify-between items-center">
            <h1 className="card-title font-bold text-md text-[#504C4D]">
              {name}
            </h1>
            <span className="font-bold text-xl">
              <FaArrowRightLong />
            </span>
          </div>
          <p className="text-[#241F20] font-bold w-full flex justify-between items-center">
            <span>Today Sales:</span>
            <span>${todaySales}</span>
          </p>
          <p className="text-[#6C696A] font-bold w-full flex justify-between items-center">
            <span>online Sales:</span>
            <span>${onlineSales}</span>
          </p>
          <p className="text-[#6C696A] font-bold w-full flex justify-between items-center">
            <span>Offline Sales:</span>
            <span>${offlineSales}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default InfoCardCom;
