import { MoreHorizontal, Recycle, Trash2 } from "lucide-react";
import type { NextComponentType, NextPageContext } from "next";
import Image from "next/image";

interface Props {}

const TableRow: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <>
      <tr className="border border-[#F2F2F2] py-5 text-center">
        <td>#43</td>
        <td>PMT-1562792</td>
        <td>Dec 30, 2023</td>
        <td>Marvin McKinney</td>
        <td>76</td>
        <td>$731</td>
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
              <li className="hover:text-green-400">
                <a>
                  <span>
                    <Recycle />
                  </span>
                  Restore
                </a>
              </li>
              <li className="hover:text-red-500">
                <a>
                  <span>
                    <Trash2 />
                  </span>
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </th>
      </tr>
    </>
  );
};

export default TableRow;
