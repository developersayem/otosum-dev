import { Plus } from "lucide-react";
import Link from "next/link";
import InfoCardIcon from "../../../../public/icons/totalsalesicon.svg";
import TableRow from "./TableRow";
import InfoCardCom from "./InfoCardCom";

const page = () => {
  return (
    <>
      <div className="bg-white p-10 mx-5 my-5 rounded-xl">
        <h1 className="text-2xl text-black font-extrabold p-5">Overview</h1>
        <div className="w-full h-full inline-grid grid-cols-3 gap-8 ">
          <InfoCardCom
            label="Sales"
            icon={InfoCardIcon}
            amount={3492.0}
            lastAmount={59.75}
            bgGradient="text-white bg-gradient-to-r from-[#454CEA] to-[#5596CF]"
          />
          <InfoCardCom
            label="Total Expenses"
            icon={InfoCardIcon}
            amount={3492.0}
            lastAmount={59.75}
            bgGradient="text-white bg-gradient-to-r from-[#F85900] to-[#FAC250]"
          />
          <InfoCardCom
            label="Total Revenue"
            icon={InfoCardIcon}
            amount={3492.0}
            lastAmount={59.75}
            bgGradient="text-white bg-gradient-to-r from-[#DC1818] to-[#FF6565]"
          />
        </div>
      </div>
      <div className="bg-white p-10 mx-5 rounded-xl">
        <div className="flex justify-between items-center">
          <h1 className="font-extrabold text-2xl text-black">Expenses List</h1>
          <Link href="/shop/expenses/add-expenses">
            <button className="btn border-0 rounded-xl text-gl hover:scale-105 text-white bg-gradient-to-r from-[#00FC44] to-[#438FFD]">
              <span className="text-lg">
                <Plus />
              </span>
              Add Expenses
            </button>
          </Link>
        </div>
        <div className="py-5 my-2 rounded-2xl overflow-auto">
          <table className="table w-full">
            {/* head */}
            <thead className="text-[#6C696A] border border-[#F2F2F2] text-base bg-[#f8f8f8] border-b-2 text-center ">
              <tr>
                <th>Date</th>
                <th>Warehouse</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-black text-md border rounded-lg border-[#F2F2F2] text-center">
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
    </>
  );
};
export default page;
