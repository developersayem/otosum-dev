import type { NextComponentType, NextPageContext } from "next";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
interface FileData {
  fileName: string;
  fileImage: string;
}
interface IShop {}
interface Props {
  name: string;
  img: FileData;
}

const InfoCardCom: NextComponentType<NextPageContext, {}, Props> = ({
  name,
  img,
}: Props) => {
  // const { img, name } = store;
  // const fileImage = img.length > 0 ? img[0].fileImage : "";
  return (
    <Link href="/shop/pos/order">
      <div className="card  bg-white shadow-xl m-5 w-[250px] h-[380px]">
        <figure className="px-5 pt-5">
          <Image
            src={img?.fileImage}
            className=" w-full h-full object-fill aspect-square rounded-lg shadow-lg	"
            alt="alt"
            width={215}
            height={230}
          />
        </figure>
        <div className="card-body items-start text-start">
          <div className="w-full flex justify-between items-center">
            <h1 className="card-title font-bold text-md text-[#504C4D] capitalize">
              {name}
            </h1>
            <span className="font-bold text-xl">
              <FaArrowRightLong />
            </span>
          </div>
          {/* <div className="text-[#241F20] font-bold w-full flex justify-between items-center">
            <span>Today Sales:</span>
            <span>${todaySales}</span>
          </div>
          <div className="text-[#6C696A] font-bold w-full flex justify-between items-center">
            <span>online Sales:</span>
            <span>${onlineSales}</span>
          </div>
          <div className="text-[#6C696A] font-bold w-full flex justify-between items-center">
            <span>Offline Sales:</span>
            <span>${offlineSales}</span>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default InfoCardCom;
