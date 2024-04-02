"use client";

import { useBusinessNameContext } from "@/app/context/businessNameContext";
import { FormEvent, useEffect, useState } from "react";
import TableRow from "./TableRow";
import SkeletonCom from "@/app/components/shared/SkeletonCom";
import { Plus } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
interface ICategory {
  businessName: string;
  id: number;
  value: string;
}
export default function Page() {
  const { businessName } = useBusinessNameContext();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loadData, setLoadData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!businessName) {
          return;
        }
        const res = await fetch("/api/shop/products/categories", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ businessName }),
        });

        if (!res.ok) {
          console.error("Failed to fetch data:", res.status);
          return;
        }

        const data = await res.json();
        setCategories(data);
        // setExpensesCategories(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, [businessName, loadData]);

  const handleAddCategory = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    try {
      const response = await fetch(
        "/api/shop/products/categories/add-category",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            businessName: businessName,
            value: formData.get("categoryName"),
          }),
        }
      );
      if (response.ok) {
        toast.success("category added successfully");
        setLoadData(!loadData);
      } else {
        toast.error("An error occurred while adding category");
      }
    } catch (error) {
      console.error("An error occurred while adding category:", error);
    }
  };

  return (
    <>
      <Toaster />
      {/* ADD CATEGORY SECTION */}
      <div className="p-5 m-5 bg-white rounded-2xl ">
        <div className="">
          <h1 className="mb-5 text-black text-2xl font-bold">Add Category</h1>
          <form action="" onSubmit={handleAddCategory} className="mt-10">
            <div className="">
              <div className="flex flex-col gap-4   ">
                <label htmlFor="categoryName">Category Name</label>
                <input
                  type="text"
                  id="categoryName"
                  name="categoryName"
                  placeholder="Enter Category Name"
                  className=" border-2 border-[#BBBABA] rounded-lg py-3 px-5 outline-none bg-transparent focus:border-black"
                />
              </div>
              {/* BUTTON SECTION */}
              <div className="flex justify-start items-end my-5">
                <button
                  type="submit"
                  className="btn mr-2 text-white text-base hover:scale-105 border-0 bg-gradient-to-r py-2 from-[#438FFD] to-[#00FC44] form-submit"
                >
                  <span className="font-bold">
                    <Plus />
                  </span>
                  <span>Add Expenses</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* CATEGORY LIST SECTION */}
      <div className="p-5 m-5 bg-white rounded-2xl ">
        <div className="sm:block md:flex lg:flex justify-between items-center  p-5">
          <h1 className="mb-5 text-black text-2xl font-bold">
            Categories List
          </h1>
        </div>
        <div className="rounded-2xl overflow-auto">
          {categories.length >= 0 && (
            <table className="table w-full ">
              {/* head */}
              <thead className="text-[#6C696A] border border-[#F2F2F2] text-base bg-[#f8f8f8] border-b-2  min-h-screen">
                <tr>
                  <th>Category Id</th>
                  <th>Category Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="text-black text-md border rounded-lg border-[#F2F2F2] ">
                {categories.map((category) => (
                  <TableRow key={category.id} category={category} />
                ))}
              </tbody>
            </table>
          )}
          {categories.length === 0 && <SkeletonCom />}
        </div>
      </div>
    </>
  );
}
