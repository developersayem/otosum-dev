// TableRow.tsx
import { Barcode, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { NextComponentType, NextPageContext } from "next";

interface FileData {
  fileName: string;
  fileImage: string;
}

export interface IExpenses {
  businessName: string;
  expensesId: number;
  title: string;
  date: string;
  warehouse: string;
  category: string;
  amount: number;
  note: string;
  description: string;
  img: FileData;
}

interface Props {
  expense: IExpenses;
}

const TableRow: NextComponentType<NextPageContext, {}, Props> = ({
  expense,
}) => {
  const {
    title,
    category,
    date,
    warehouse,
    amount,
    note,
    img: { fileImage },
  } = expense;

  return (
    <tr className="border border-[#F2F2F2] text-start capitalize">
      <td>{date}</td>
      <td className="">
        <div className="flex items-center gap-2 justify-start text-start">
          <div className="avatar">
            <div className="mask rounded-lg w-12 h-12 ">
              <Image
                src={fileImage}
                alt="Avatar Tailwind CSS Component"
                width={100}
                height={100}
              />
            </div>
          </div>
          <h1>{title}</h1>
        </div>
      </td>
      <td>{warehouse}</td>
      <td>{category}</td>
      <td>${amount}</td>
      <td>{note}</td>
      <th>
        <div
          tabIndex={0}
          className="flex items-center gap-3 justify-start text-start"
        >
          <div className="hover:text-green-400 hover:scale-110">
            <Pencil />
          </div>
          <div className="hover:text-red-500 hover:scale-110">
            <Trash2 />
          </div>
        </div>
      </th>
    </tr>
  );
};

export default TableRow;
