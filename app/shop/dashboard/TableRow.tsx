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
      <tr className="border border-[#F2F2F2] py-10 text-center">
        <td>Dec 30, 2023 12:40</td>
        <td>Cash</td>
        <td>#5205896212</td>
        <td>Kristin</td>
        <td>$220.00</td>
        <td>
          <span className="bg-[#ebfbf5] px-7 py-2 text-bold text-[#34d399] rounded-full">
            Debit
          </span>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
