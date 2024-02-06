import type { NextComponentType, NextPageContext } from "next";
import Image from "next/image";

interface Props {}

const TableRow: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <>
      <tr className="border border-[#F2F2F2] py-5">
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <Image
                  src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg"
                  alt="Avatar Tailwind CSS Component"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div>
              <div className="font-bold">Cody Fisher</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>Technician</td>
        <td>Technology</td>
        <td>Burger King</td>
        <td>Dec 20, 2023</td>
        <td>cedennar@gmail.com</td>
        <th>
          <button className="btn bg-[#ECF4FF] text-[#438FFD] rounded-full  border-0 hover:text-white hover:bg-[#438FFD]">
            View Profile
          </button>
        </th>
      </tr>
    </>
  );
};

export default TableRow;
