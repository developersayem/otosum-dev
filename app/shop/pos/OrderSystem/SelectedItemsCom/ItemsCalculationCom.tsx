import type { NextComponentType, NextPageContext } from "next";

interface Props {}

const ItemsCalculationCom: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <div className="text-[#797676] font-bold bg-[#f8f8f8] p-5 rounded-b-lg">
      <div className="text-lg flex justify-between items-center">
        <span>Subtotal</span> <span className="text-black">37.61</span>
      </div>
      <div className="text-lg flex justify-between items-center">
        <span>Discount sales</span> <span className="text-black">-$5.00</span>
      </div>
      <div className="text-lg flex justify-between items-center">
        <span>Total sales tax</span> <span className="text-black">$2.20</span>
      </div>
      <div className="border border-dashed border-[#959595 ]"></div>
      <div className="text-xl font-extrabold text-black flex justify-between items-center">
        <span>Total</span> <span className="text-black">$34.86</span>
      </div>
    </div>
  );
};

export default ItemsCalculationCom;
