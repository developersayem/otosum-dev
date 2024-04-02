"use client";

import ItemsList from "./ItemsList/ItemsList";
import OrderSystem from "./OrderSystem/OrderSystemLayout";

const page = () => {
  return (
    <>
      <div className=" grid grid-cols-2 grid-flow-col mx-5">
        <div className="">
          <ItemsList />
        </div>
        <div className="">
          <OrderSystem />
        </div>
      </div>
    </>
  );
};
export default page;
