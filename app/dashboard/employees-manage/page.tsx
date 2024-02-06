import { FaChevronDown, FaPlus } from "react-icons/fa";
import TableRow from "./TableRow";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-[100vh] w-full">
      {/*Statistics SECTION START */}
      <div className="bg-white p-5 mb-5 m-5 rounded-2xl ">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-2xl text-black font-bold p-5">Statistics</h1>
          <div className="px-5 md:mt-4 w-[150px]">
            <div className="relative lg:max-w-sm">
              <select className=" text-md p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-black font-bold">
                <option className="p-2 border-0 ">Daily</option>
                <option className="p-2 border-0 ">Monthly</option>
                <option className="p-2 border-0 ">Annual</option>
              </select>
              <div className=" absolute top-4 left-20">
                <FaChevronDown />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full inline-grid lg:grid-cols-5 md:grid-cols-3 gap-8 ">
          <div className="bg-gradient-to-r from-[#454CEA] to-[#5596CF] max-h-28 max-w-72 p-5 flex justify-start items-center rounded-xl text-white font-bold">
            <span>
              <h1 className="text-lg">Total Employees</h1>
              <p className="text-2xl">121</p>
            </span>
          </div>
          <div className="bg-gradient-to-r from-[#F85900] to-[#FAC250] max-h-28 max-w-72 p-5 flex justify-start items-center rounded-xl text-white font-bold">
            <span>
              <h1 className="text-lg">Today Employees</h1>
              <p className="text-2xl">86</p>
            </span>
          </div>
          <div className="bg-gradient-to-r from-[#DC1818] to-[#FF6565] max-h-28 max-w-72 p-5 flex justify-start items-center rounded-xl text-white font-bold">
            <span>
              <h1 className="text-lg">Today Absent</h1>
              <p className="text-2xl">21</p>
            </span>
          </div>
          <div className="bg-gradient-to-r from-[#3AD912] to-[#1A8100] max-h-28 max-w-72 p-5 flex justify-start items-center rounded-xl text-white font-bold">
            <span>
              <h1 className="text-lg">Today Join</h1>
              <p className="text-2xl">12</p>
            </span>
          </div>
          <div className="bg-gradient-to-r from-[#DC1818] to-[#FF6565] max-h-28 max-w-72 p-5 flex justify-start items-center rounded-xl text-white font-bold">
            <span>
              <h1 className="text-lg">Today Left</h1>
              <p className="text-2xl">12</p>
            </span>
          </div>
        </div>
      </div>
      {/*Statistics SECTION END  */}
      {/*LISTS SECTION START  */}
      <div className="m-3 bg-white rounded-2xl w-ful">
        <div className="flex justify-between items-center mb- p-5">
          <h1 className="mb-3 text-black text-2xl font-bold">Report List</h1>
          <div className="flex justify-center items-center">
            <Link href="/dashboard/employees-manage/add-employee">
              <button className="btn border-0 rounded-xl text-gl  text-white bg-gradient-to-r from-[#00FC44] to-[#438FFD]">
                <span className="text-lg">
                  <FaPlus />
                </span>
                Add Employees
              </button>
            </Link>
            <div className="px-5 md:mt-4">
              <div className="relative w-full lg:max-w-sm">
                <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-black font-bold">
                  <option className="p-2 border-0 ">All Stores</option>
                  <option className="p-2 border-0 ">Ramai Mall</option>
                  <option className="p-2 border-0 ">Gyu-Kaku</option>
                  <option className="p-2 border-0 ">Urban Harmony</option>
                  <option className="p-2 border-0 ">Brooklyn Fare</option>
                </select>
                <div className="relative bottom-[1.8rem] left-[7.7rem]">
                  <FaChevronDown />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="p-5 m- rounded-2xl overflow-auto">
            <table className="table w-full">
              {/* head */}
              <thead className="text-[#6C696A] border border-[#F2F2F2] text-base bg-[#f8f8f8] border-b-2 ">
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
      {/*LISTS SECTION END */}
    </div>
  );
};

export default page;
