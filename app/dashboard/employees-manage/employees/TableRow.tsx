import type { NextComponentType, NextPageContext } from "next";
import Image from "next/image";
interface FileData {
  fileName: string;
  fileImage: string;
}
interface IEmployee {
  businessName: string;
  employeeId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  branch: string;
  role: string;
  address: string;
  state: string;
  shopName: string;
  status: string;
  joiningDate: string;
  city: string;
  postalCode: string;
  password: string;
  img: FileData;
}
interface Props {
  employee: IEmployee;
}

const TableRow: NextComponentType<NextPageContext, {}, Props> = ({
  employee,
}) => {
  const {
    img: { fileImage },
    firstName,
    lastName,
    email,
    role,
    status,
    shopName,
    joiningDate,
    address,
  } = employee;
  return (
    <>
      <tr className="border border-[#F2F2F2] py-5">
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <Image
                  src={fileImage}
                  alt="Avatar Tailwind CSS Component"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div>
              <div className="font-bold capitalize">
                {firstName} {lastName}
              </div>
              <div className="text-sm opacity-50">{address}</div>
            </div>
          </div>
        </td>
        <td className="capitalize">{role}</td>
        <td className="capitalize">{shopName}</td>
        <td className="capitalize">{status}</td>
        <td className="capitalize">{joiningDate}</td>
        <td className="capitalize">{email}</td>
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
