"use client";

import ItemsList from "./ItemsList/ItemsList";
import OrderSystem from "./OrderSystem/OrderSystem";

const page = () => {
  return (
    <>
      <div className=" grid grid-cols-5 grid-flow-col mx-5">
        <div className="col-span-3 ">
          <ItemsList />
        </div>
        <div className="col-span-2">
          <OrderSystem />
        </div>
      </div>
    </>
  );
};
export default page;
