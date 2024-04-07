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
  AreaChart,
  Area,
} from "recharts";

interface Props {}

const CashFlowChartCom: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const data = [
    {
      name: "Jan",
      debit: 400,
      credit: 400,
      amt: 2400,
    },
    {
      name: "Feb",
      debit: 300,
      credit: 398,
      amt: 2210,
    },
    {
      name: "Mar",
      debit: 800,
      credit: 600,
      amt: 2290,
    },
    {
      name: "Apr",
      debit: 780,
      credit: 908,
      amt: 2000,
    },
    {
      name: "May",
      debit: 890,
      credit: 800,
      amt: 2181,
    },
    {
      name: "Jun",
      debit: 390,
      credit: 800,
      amt: 2500,
    },
    {
      name: "Jul",
      debit: 490,
      credit: 300,
      amt: 2100,
    },
    {
      name: "Aug",
      debit: 390,
      credit: 400,
      amt: 2100,
    },
    {
      name: "Sep",
      debit: 90,
      credit: 300,
      amt: 2100,
    },
    {
      name: "Oct",
      debit: 490,
      credit: 300,
      amt: 2100,
    },
    {
      name: "Nov",
      debit: 490,
      credit: 300,
      amt: 2100,
    },
    {
      name: "Dec",
      debit: 490,
      credit: 300,
      amt: 2100,
    },
  ];

  return (
    <div style={{ height: "400px" }}>
      <div className="flex justify-start items-center mb-8 px-2">
        <div className="flex justify-start items-center px-3">
          <div className="w-5 h-1  bg-[#34d399]"></div>{" "}
          <span className="ml-1">Debit</span>
        </div>
        <div className="flex justify-start items-center px-3">
          <div className="w-5 h-1 px-1 bg-[#ffb800]"></div>{" "}
          <span className="ml-1">Credit</span>
        </div>
      </div>
      {/* Adjust height as needed */}
      <AreaChart
        width={1500}
        height={400}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        className="w-full"
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#34d399" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ffb800" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ffb800" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="debit"
          stroke="#34d399"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="credit"
          stroke="#ffb800"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </div>
  );
};

export default CashFlowChartCom;
