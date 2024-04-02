"use client";

import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import SkeletonCom from "../../../components/shared/SkeletonCom";
import { useBusinessNameContext } from "@/app/context/businessNameContext";
import toast from "react-hot-toast";
import ProductCategoryDropDownCom from "./ProductCategoryDropDownCom";

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
const Page = () => {
  const { businessName } = useBusinessNameContext();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [productCategory, setProductCategory] = useState<string | null>(
    "all categories"
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!businessName) {
          return;
        }
        const res = await fetch("/api/shop/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ businessName, productCategory }),
        });

        if (!res.ok) {
          console.error("Failed to fetch data:", res.status);
          return;
        }

        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, [businessName, productCategory]);

  return (
    <div className="p-5 m-5 bg-white rounded-2xl ">
      <div className="sm:block md:flex lg:flex justify-between items-center  p-5">
        <h1 className="mb-5 text-black text-2xl font-bold">Products List</h1>
        <div className="sm:block md:flex lg:flex justify-center items-center sm:justify-start">
          <div>
            <ProductCategoryDropDownCom
              selectedItem={productCategory}
              setSelectedItem={setProductCategory}
            />
          </div>
        </div>
      </div>
      <div className="rounded-2xl overflow-auto">
        {products.length >= 0 && (
          <table className="table w-full ">
            {/* head */}
            <thead className="text-[#6C696A] border border-[#F2F2F2] text-base bg-[#f8f8f8] border-b-2  min-h-screen">
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Sub Category</th>
                <th>Brand Name</th>
                <th>Price</th>
                <th>Cost</th>
                <th>Quantity</th>
                <th>Net Cost</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-black text-md border rounded-lg border-[#F2F2F2] ">
              {products.map((product) => (
                <TableRow key={product.productId} product={product} />
              ))}
            </tbody>
          </table>
        )}
        {products.length === 0 && <SkeletonCom />}
      </div>
    </div>
  );
};

export default Page;
