import {
  Download,
  MoreHorizontal,
  Paperclip,
  Pencil,
  Trash2,
} from "lucide-react";
import type { NextComponentType, NextPageContext } from "next";
interface ICategory {
  businessName: string;
  id: number;
  value: string;
}
interface Props {
  category: ICategory;
}

const TableRow: NextComponentType<NextPageContext, {}, Props> = ({
  category,
}) => {
  const { id, value } = category;
  return (
    <>
      <tr className="border border-[#F2F2F2] py-5  capitalize">
        <td>{id}</td>
        <td>{value}</td>
        <td className=" gap-2 ">
          <div tabIndex={0} className="flex gap-4 justify-start">
            <div className="hover:text-green-400 hover:scale-110">
              <Pencil />
            </div>
            <div className="hover:text-red-500 hover:scale-110">
              <Trash2 />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
