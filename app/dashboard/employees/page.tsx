import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import TableRow from "./TableRow";

const page = () => {
  return (
    <div className="p-5 m-5 bg-white rounded-2xl w-ful">
      <div className="flex justify-between items-center mb-5 p-5">
        <h1 className="mb-5 text-black text-2xl font-bold">Employee List</h1>
        <Link href="/dashboard/employees/add-employees">
          <button className="btn border-0 rounded-xl text-gl  text-white bg-gradient-to-r from-[#00FC44] to-[#438FFD]">
            <span className="text-lg">
              <FaPlus />
            </span>
            Add Employees
          </button>
        </Link>
      </div>
      <div>
        <div className="p-5 m-2 rounded-2xl overflow-auto">
          <table className="table ">
            {/* head */}
            <thead className="text-lg text-[#6C696A] font-bold  rounded-lg">
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Department</th>
                <th>Status</th>
                <th>Joining Date</th>
                <th>Email</th>
                <th>Profile</th>
              </tr>
            </thead>
            <tbody className="text-black text-md ">
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
