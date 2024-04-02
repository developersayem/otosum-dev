import { Barcode, Pencil, Trash2 } from "lucide-react";
import type { NextComponentType, NextPageContext } from "next";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

interface IImage {
  fileImage: string;
  fileName: string;
}
interface IProduct {
  businessName: string;
  img: IImage;
  productId: number;
  productName: string;
  category: string;
  subCategory?: string;
  brand: string;
  cost: number;
  quantity: number;
  alertQuantity: number;
  discountType: string;
  discount: number;
  tax: number;
  price: number;
  promotionalStatus: string;
  promotionalPrice?: number;
  promotionalStartDate?: Date;
  promotionalEndDate?: Date;
  description: string;
}
interface Props {
  product: IProduct;
  fetchData?: () => void;
}

const TableRow: NextComponentType<NextPageContext, {}, Props> = ({
  product,
  fetchData,
}) => {
  const {
    businessName,
    productId,
    productName,
    img: { fileImage },
    category,
    subCategory,
    price,
    cost,
    brand,
    quantity,
    promotionalStatus,
    promotionalPrice,
  } = product;

  const deleteHandler = async (productId: number) => {
    try {
      if (!businessName) {
        return;
      }
      const res = await fetch("/api/shop/products/deleteProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ businessName, productId }),
      });

      if (!res.ok) {
        toast.error("Failed to delete product:");
        return;
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return (
    <>
      <tr className="border border-[#F2F2F2] text-start capitalize">
        <td className="">
          <div className="flex items-center gap-2 justify-start text-start">
            <div className="avatar">
              <div className="mask rounded-lg w-12 h-12 ">
                <Image
                  src={fileImage}
                  alt="Avatar Tailwind CSS Component"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <h1>{productName}</h1>
          </div>
        </td>
        <td>{category}</td>
        <td>{subCategory}</td>
        <td>{brand}</td>
        <td>${promotionalStatus === "open" ? promotionalPrice : price}</td>
        <td>${cost}</td>
        <td>{quantity}</td>
        <td>${cost * quantity}</td>
        <th>
          <div
            tabIndex={0}
            className="flex items-center gap-3 justify-start text-start"
          >
            <div className="hover:text-green-400 hover:scale-110">
              <Pencil />
            </div>
            <div className="hover:text-blue-500 hover:scale-110">
              <Barcode />
            </div>
            <div
              className="hover:text-red-500 hover:scale-110"
              onClick={() => deleteHandler && deleteHandler(productId)}
            >
              <Trash2 />
            </div>
          </div>
        </th>
      </tr>
    </>
  );
};

export default TableRow;
