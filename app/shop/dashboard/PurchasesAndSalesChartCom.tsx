import { NextComponentType, NextPageContext } from "next";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Props {}

const PurchasesAndSalesChartCom: NextComponentType<
  NextPageContext,
  {},
  Props
> = (props: Props) => {
  const data = [
    { name: "Jan", sale: 4000, purchase: 2400, amt: 2400 },
    { name: "Feb", sale: 3000, purchase: 4398, amt: 2210 },
    { name: "Mar", sale: 2000, purchase: 9800, amt: 2290 },
    { name: "Apr", sale: 2780, purchase: 3908, amt: 2000 },
    { name: "May", sale: 1890, purchase: 4800, amt: 2181 },
    { name: "Jun", sale: 2390, purchase: 3800, amt: 2500 },
    { name: "Jul", sale: 3490, purchase: 4300, amt: 2100 },
    { name: "Aug", sale: 3490, purchase: 4300, amt: 2100 },
    { name: "Sep", sale: 3490, purchase: 4300, amt: 2100 },
    { name: "Oct", sale: 3490, purchase: 4300, amt: 2100 },
    { name: "Nov", sale: 3490, purchase: 4300, amt: 2100 },
    { name: "Dec", sale: 3490, purchase: 4300, amt: 2100 },
  ];

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <div className="flex justify-start items-center mb-8 px-2">
        <div className="flex justify-start items-center px-3">
          <div className="w-5 h-1  bg-[#34d399]"></div>{" "}
          <span className="ml-1">Purchase</span>
        </div>
        <div className="flex justify-start items-center px-3">
          <div className="w-5 h-1 px-1 bg-[#f87171]"></div>{" "}
          <span className="ml-1">Sales</span>
        </div>
      </div>
      {/* Adjust height as needed */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <Bar dataKey="purchase" fill="#34d399" radius={[100, 100, 0, 0]} />
          <Bar dataKey="sale" fill="#f87171" radius={[100, 100, 0, 0]} />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PurchasesAndSalesChartCom;
