"use client";

/* eslint-disable react-hooks/rules-of-hooks */
import InfoCardCom from "../components/cards/InfoCardCom";
import StoreCardCom from "../components/cards/StoreCardCom";
import TotalSalesIcon from "../../public/icons/totalsalesicon.svg";
import { useBusinessNameContext } from "@/app/context/businessNameContext";
import { useEffect, useState } from "react";
interface FileData {
  fileName: string;
  fileImage: string;
}
interface IShop {
  businessName: string;
  shopId: number;
  name: string;
  address: string;
  type: string;
  img: FileData;
}
const page = () => {
  const { businessName } = useBusinessNameContext();
  const [stores, setStores] = useState<IShop[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!businessName) {
          return;
        }
        const res = await fetch("/api/dashboard/stores", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ businessName }),
        });

        if (!res.ok) {
          console.error("Failed to fetch data:", res.status);
          return;
        }
        const data = await res.json();
        setStores(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, [businessName]);
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
      {/*SALES INFO SECTION END  */}
      {/*STORES SECTION START  */}
      <>
        <div className="flex justify-start items-center flex-wrap gap-5 p-5 ">
          {stores.map((store) => (
            <StoreCardCom
              key={store.shopId}
              name={store.name}
              img={store.img}
            />
          ))}
        </div>
      </>
      {/*STORES SECTION END */}
    </div>
  );
};

export default page;
