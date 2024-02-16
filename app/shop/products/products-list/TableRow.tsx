import { Barcode, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import type { NextComponentType, NextPageContext } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const TableRow: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <>
      <tr className="border border-[#F2F2F2] py-5 text-center">
        <td>#43</td>
        <td className="text-center flex justify-center items-center">
          <div className="flex items-center gap-3 text-center">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12 text-center">
                <Image
                  src="https://handletheheat.com/wp-content/uploads/2023/04/homemade-burger-buns-SQUARE.jpg"
                  alt="Avatar Tailwind CSS Component"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <h1>Burger</h1>
          </div>
        </td>
        <td>Fast Food</td>
        <td>$14</td>
        <td>Burger</td>
        <td>$731</td>
        <td>156</td>
        <th>
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-transparent border-0 hover:bg-transparent hover:text-green-400 shadow-transparent"
            >
              <MoreHorizontal />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow rounded-box w-fit bg-white"
            >
              <li className="hover:text-green-400 hover:scale-110">
                <a>
                  <span>
                    <Pencil />
                  </span>
                  Edit
                </a>
              </li>
              <li className="hover:text-red-500 hover:scale-110">
                <a>
                  <span>
                    <Trash2 />
                  </span>
                  Delete
                </a>
              </li>
              <li className="hover:text-blue-500 hover:scale-110">
                <Link
                  href="/shop/barcode/print-barcode"
                  passHref
                  className="text-nowrap"
                >
                  <span>
                    <Barcode />
                  </span>
                  Print-Barcode
                </Link>
              </li>
            </ul>
          </div>
        </th>
      </tr>
    </>
  );
};

export default TableRow;
