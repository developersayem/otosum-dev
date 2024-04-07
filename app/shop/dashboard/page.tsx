"use client";

import { useState } from "react";
import TotalSalesIcon from "../../../public/icons/totalsalesicon.svg";
import InfoCardCom from "../../components/cards/InfoCardCom";
import DropDownCom from "./DropDownCom";
import PurchasesAndSalesChartCom from "./PurchasesAndSalesChartCom";
import LastMonthSalesTableCom from "./LastMonthSalesTableCom";
import ThisMontPurchaseTableCom from "./ThisMontPurchaseTableCom";
import CashFlowChartCom from "./CashFlowChartCom";
import RecentTransactionsListCom from "./RecentTransactionsListCom";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedItem, setSelectedItem] = useState<string>("");

  return (
    <div className="min-h-[100vh] w-full">
      {/*SALES INFO SECTION START */}
      <div className="bg-white p-5 mb-5 m-5 rounded-2xl  ">
        <h1 className="text-2xl text-black font-bold p-5">Overview</h1>
        <div className="w-full h-full inline-grid grid-cols-3 gap-8 ">
          <InfoCardCom
            label="Sales"
            icon={TotalSalesIcon}
            amount={0}
            lastAmount={0}
            bgGradient="text-white bg-gradient-to-r from-[#454CEA] to-[#5596CF]"
          />
          <InfoCardCom
            label="Total Expenses"
            icon={TotalSalesIcon}
            amount={0}
            lastAmount={0}
            bgGradient="text-white bg-gradient-to-r from-[#F85900] to-[#FAC250]"
          />
          <InfoCardCom
            label="Total Revenue"
            icon={TotalSalesIcon}
            amount={0}
            lastAmount={0}
            bgGradient="text-white bg-gradient-to-r from-[#DC1818] to-[#FF6565]"
          />
        </div>
      </div>
      {/*Purchase and Sale Flow SECTION START  */}
      <div className="grid grid-cols-3 gap-5 mx-5 mb-5">
        <div className="bg-white p-5 pb-10 mb-5  rounded-2xl w-full h-full col-span-2">
          <div className="flex justify-between items-center p-5">
            <h1 className="text-2xl text-black font-bold">
              Purchase and Sale Flow
            </h1>
            <DropDownCom
              defaultValue="Monthly"
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          </div>
          <PurchasesAndSalesChartCom />
        </div>
        <div className="bg-white p-5 pb-10 mb-5  rounded-2xl w-full h-full col-span-1">
          <div className="flex justify-between items-center p-5">
            <h1 className="text-2xl text-black font-bold">Last Month Sales</h1>
          </div>
          <div>
            <LastMonthSalesTableCom />
          </div>
        </div>
      </div>
      {/*Purchase and Sale Flow SECTION START  */}
      <div className="grid grid-cols-3 gap-5 mx-5 mb-5">
        <div className="bg-white p-5 pb-10 mb-5  rounded-2xl w-full h-full col-span-2">
          <div className="flex justify-between items-center p-5">
            <h1 className="text-2xl text-black font-bold">
              This Month Purchases
            </h1>
            <DropDownCom
              defaultValue="Monthly"
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          </div>
          <CashFlowChartCom />
        </div>
        <div className="bg-white p-5 pb-10 mb-5 rounded-2xl w-full h-full col-span-1">
          <div className="flex justify-between items-center p-5">
            <h1 className="text-2xl text-black font-bold">Last Month Sales</h1>
          </div>
          <div>
            <ThisMontPurchaseTableCom />
          </div>
        </div>
      </div>
      <RecentTransactionsListCom />
    </div>
  );
};

export default page;
