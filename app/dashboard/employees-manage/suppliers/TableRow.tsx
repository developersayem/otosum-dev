import { Barcode, Pencil, Trash2 } from "lucide-react";
import type { NextComponentType, NextPageContext } from "next";
import Image from "next/image";
interface FileData {
  fileName: string;
  fileImage: string;
}
interface ISupplier {
  businessName: string;
  supplierId: number;
  firstName: string;
  lastName: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  role: string;
  address: string;
  state: string;
  status: string;
  city: string;
  postalCode: string;
  country: string;
  img: FileData;
}
interface Props {
  supplier: ISupplier;
}

const TableRow: NextComponentType<NextPageContext, {}, Props> = ({
  supplier,
}) => {
  const { firstName, lastName, email, phone, country, address, img } = supplier;

  return (
    <>
      <tr className="border border-[#F2F2F2] py-5">
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask rounded-lg w-12 h-12 ">
                <Image
                  src={img?.fileImage || "/placeholder-image.jpg"} // Use a placeholder image or handle the case when fileImage is missing
                  alt={`Image of ${firstName} ${lastName}`}
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="text-sm opacity-50">{address}</div>
          </div>
        </td>
        <td className="capitalize">{email}</td>
        <td className="capitalize">{phone}</td>
        <td className="capitalize">{country}</td>
        <td className="capitalize">{address}</td>
        <th>
          <div
            tabIndex={0}
            className="flex items-center gap-3 justify-start text-start"
          >
            <div className="hover:text-green-400 hover:scale-110">
              <Pencil />
            </div>

            <div className="hover:text-red-500 hover:scale-110">
              <Trash2 />
            </div>
          </div>
        </th>
      </tr>
    </>
  );
};

export default TableRow;
