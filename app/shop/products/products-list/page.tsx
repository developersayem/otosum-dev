import Link from "next/link";
import TableRow from "./TableRow";
import { Plus } from "lucide-react";
import DropDownCom from "@/app/components/DropDownCom";

const page = () => {
  const DropDownData = [
    { id: 1, href: "Category 1", value: "Category 1" },
    { id: 2, href: "Category 2", value: "Category 2" },
    { id: 3, href: "Category 3", value: "Category 3" },
  ];
  return (
    <div className="p-5 m-5 bg-white rounded-2xl w-ful">
      <div className="flex justify-between items-center  p-5">
        <h1 className="mb-5 text-black text-2xl font-bold">Products List</h1>
        <div className="flex justify-center items-center">
          <div>
            <DropDownCom defaultValue="Choose Category" items={DropDownData} />
          </div>
        </div>
      </div>
      <div>
        <div className="p-5  rounded-2xl overflow-auto">
          <table className="table w-full">
            {/* head */}
            <thead className="text-[#6C696A] border border-[#F2F2F2] text-base bg-[#f8f8f8] border-b-2 text-center ">
              <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Brand Name</th>
                <th>Cost</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-black text-md border rounded-lg border-[#F2F2F2]">
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
