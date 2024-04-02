"use client";

/* eslint-disable react-hooks/rules-of-hooks */
import StoreCardCom from "../../components/cards/StoreCardCom";

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
  img: FileData[];
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
      <>
        <div className="flex justify-start items-center flex-wrap gap-5 p-5 ">
          {stores.map((store) => (
            <StoreCardCom
              key={store.shopId}
              store={store}
              todaySales={0.0}
              onlineSales={0.0}
              offlineSales={0.0}
            />
          ))}
        </div>
      </>
    </div>
  );
};

export default page;
