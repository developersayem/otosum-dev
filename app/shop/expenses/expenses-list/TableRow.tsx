import {
  Download,
  MoreHorizontal,
  Paperclip,
  Pencil,
  Trash2,
} from "lucide-react";
import type { NextComponentType, NextPageContext } from "next";
import Image from "next/image";

interface Props {}

const TableRow: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <>
      <tr className="border border-[#F2F2F2] py-5 text-center">
        <td>Dec 20, 2023</td>
        <td>Futures Enterprise</td>
        <td>$40,000</td>
        <td>Complaint that PorchCam...</td>
        <td>Pending</td>
        <td className="flex justify-center gap-2 items-center">
          <span className="hover:text-blue-500 hover:scale-110">
            <Paperclip />
          </span>
          <span className="hover:text-green-500 hover:scale-110">
            <Download />
          </span>
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-transparent border-0 hover:bg-transparent hover:text-green-400 shadow-transparent hover:scale-110"
            >
              <MoreHorizontal />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow rounded-box w-fit bg-white"
            >
              <li className="hover:text-blue-500 hover:scale-110">
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
            </ul>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
