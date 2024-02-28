"use client";

import type { NextComponentType, NextPageContext } from "next";
import DropDownCom from "./DropDownCom";
import TableRow from "./TableRow";
import { useState } from "react";

interface Props {}

const RecentTransactionsListCom: NextComponentType<
  NextPageContext,
  {},
  Props
> = (props: Props) => {
  const [selectedItem, setSelectedItem] = useState<string>("");

  return (
    <div className="p-5 m-5 bg-white rounded-2xl w-ful">
      <div className="flex justify-between items-center  p-5">
        <h1 className="mb-5 text-black text-2xl font-bold">Products List</h1>
        <div className="flex justify-center items-center">
          <div>
            <DropDownCom
              defaultValue="Monthly"
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="p-5  rounded-2xl overflow-auto">
          <table className="table w-full">
            {/* head */}
            <thead className="text-[#6C696A] border border-[#F2F2F2] text-base bg-[#f8f8f8] border-b-2 text-center ">
              <tr>
                <th>Date</th>
                <th>Payment Method</th>
                <th>Transaction ID</th>
                <th>Transaction By</th>
                <th>Amount</th>
                <th>Status</th>
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

export default RecentTransactionsListCom;
