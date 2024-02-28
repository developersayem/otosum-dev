import type { NextComponentType, NextPageContext } from "next";
import Image from "next/image";

interface Props {}
interface IData {
  name: string;
  qty: number;
  image: string;
}

interface Props {}

const ThisMontPurchaseTableCom: NextComponentType<
  NextPageContext,
  {},
  Props
> = (props: Props) => {
  const data: IData[] = [
    {
      name: "coffee",
      qty: 58,
      image: "",
    },
    {
      name: "burger",
      qty: 832,
      image: "",
    },
    {
      name: "pizza",
      qty: 12,
      image: "",
    },
    {
      name: "coke",
      qty: 13,
      image: "",
    },
    {
      name: "sushi",
      qty: 100,
      image: "",
    },
    {
      name: "Role",
      qty: 77,
      image: "",
    },
    {
      name: "rice",
      qty: 49,
      image: "",
    },
    {
      name: "rice",
      qty: 49,
      image: "",
    },
    {
      name: "rice",
      qty: 49,
      image: "",
    },
    {
      name: "rice",
      qty: 49,
      image: "",
    },
    {
      name: "rice",
      qty: 49,
      image: "",
    },
    {
      name: "rice",
      qty: 49,
      image: "",
    },
    {
      name: "rice",
      qty: 49,
      image: "",
    },
    {
      name: "rice",
      qty: 49,
      image: "",
    },
    {
      name: "rice",
      qty: 49,
      image: "",
    },
  ];

  return (
    <div className="overflow-x-auto" style={{ maxHeight: "400px" }}>
      <table className="table table-compact w-full">
        {/* head */}
        <thead className="border-[#F2F2F2] text-base bg-[#f8f8f8] border-b-2">
          <tr>
            <th>Product</th>
            <th>QTY</th>
          </tr>
        </thead>
        <tbody className="text-black text-md border rounded-lg border-[#F2F2F2]">
          {/* row 1 */}
          {data.map((data, index) => (
            <tr className="border-2 border-[#F2F2F2]" key={index}>
              <th className="flex items-center gap-2">
                <div className="avatar bg-green-500 h-12 w-12 rounded-md">
                  {/* <Image src={data.image} alt="" /> */}
                </div>
                <span>{data.name}</span>
              </th>
              <td>{data.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ThisMontPurchaseTableCom;
