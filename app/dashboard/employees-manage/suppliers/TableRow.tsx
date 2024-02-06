import { MoreHorizontal, MoreHorizontalIcon } from "lucide-react";
import type { NextComponentType, NextPageContext } from "next";
import Image from "next/image";

interface Props {}

const TableRow: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <>
      <tr className="border-2 border-[#E9E9E9]">
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <Image
                  src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg"
                  alt="Avatar Tailwind CSS Component"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div>
              <div className="font-bold">Amazon</div>
            </div>
          </div>
        </td>
        <td className="text-sm opacity-50">danten@mail.ru</td>
        <td>(907) 555-0101</td>
        <td>USA</td>
        <td>8558 Green Rd.</td>
        <th>
          <button className="btn bg-transparent rounded-full  border-0 text-black hover:bg-[#E9E9E9] hover:text-[#00FC44]">
            <MoreHorizontalIcon />
          </button>
        </th>
      </tr>
    </>
  );
};

export default TableRow;
