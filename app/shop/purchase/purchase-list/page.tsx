import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import TableRow from "./TableRow";

const page = () => {
  return (
    <div className="p-5 m-5 bg-white rounded-2xl w-ful">
      <div className="flex justify-between items-center mb-5 p-5">
        <h1 className="mb-5 text-black text-2xl font-extrabold">
          Purchase List
        </h1>
        <div className="flex justify-center items-center">
          <Link href="/dashboard/employees-manage/add-employee">
            <button className="btn border-0 rounded-xl text-gl hover:scale-105 text-white bg-gradient-to-r from-[#00FC44] to-[#438FFD]">
              <span className="text-lg">
                <FaPlus />
              </span>
              Add Purchase
            </button>
          </Link>
        </div>
      </div>
      <div>
        <div className="p-5 m-2 rounded-2xl overflow-auto">
          <table className="table w-full">
            {/* head */}
            <thead className="text-[#6C696A] border border-[#F2F2F2] text-base bg-[#f8f8f8] border-b-2 text-center ">
              <tr>
                <th>Date</th>
                <th>Product</th>
                <th>Total Price</th>
                <th>Payment Status</th>
                <th>Sales</th>
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
