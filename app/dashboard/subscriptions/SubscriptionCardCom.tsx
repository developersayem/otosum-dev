import type { NextComponentType, NextPageContext } from "next";

interface Props {
  name: string;
  price: number;
  timePeriod: string;
}

const SubscriptionCardCom: NextComponentType<NextPageContext, {}, Props> = ({
  name,
  price,
  timePeriod,
}) => {
  return (
    <div className="text-[#7d7a7b border-[#e9e9e9] w-fit bg-white p-10 text-center rounded-lg">
      <div className="py-3">
        <h2 className="text-black text-xl">{name}</h2>
        <h1 className="text-blue-500 text-4xl">${price}</h1>
        <h3 className="text-blue-500 text-lg ">/{timePeriod}</h3>
      </div>
      <ul>
        <li>Open 5 Shops</li>
        <li>Unlimited Branches</li>
        <li>Unlimited Users</li>
        <li>Customer Monthly Report</li>
        <li>Cancel Anytime</li>
        <button className="btn btn-primary mt-5 w-full border-none bg-[#ecf4ff] text-blue-500 hover:text-white hover:bg-gradient-to-r from-[#438FFD] to-[#00FC44]">
          Subscribe Now
        </button>
      </ul>
    </div>
  );
};

export default SubscriptionCardCom;
