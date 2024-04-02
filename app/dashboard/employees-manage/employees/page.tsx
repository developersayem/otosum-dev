"use client";

/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import TableRow from "./TableRow";
import { useEffect, useState } from "react";
import { useBusinessNameContext } from "@/app/context/businessNameContext";
import SkeletonCom from "@/app/components/shared/SkeletonCom";

const page = () => {
  const { businessName } = useBusinessNameContext();
  const [employees, setEmployees] = useState<[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!businessName) {
          return;
        }
        const res = await fetch("/api/dashboard/employees-manage/employees", {
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
        setEmployees(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, [businessName]);
  return (
    <div className="p-5 m-5 bg-white rounded-2xl w-ful">
      <div className="flex justify-between items-center mb-5 p-5">
        <h1 className="mb-5 text-black text-2xl font-bold">Employee List</h1>
        <div className="flex justify-center items-center">
          <Link href="/dashboard/employees-manage/add-employee">
            <button className="btn border-0 rounded-xl text-gl  text-white bg-gradient-to-r from-[#00FC44] to-[#438FFD]">
              <span className="text-lg">
                <FaPlus />
              </span>
              Add Employees
            </button>
          </Link>
          <div className="px-5 md:mt-4">
            {/* !NEED DROPDOWN CODE */}

            {/* <div className="relative w-full lg:max-w-sm">
              <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-black font-bold">
                <option className="p-2 border-0 ">All Stores</option>
                <option className="p-2 border-0 ">Ramai Mall</option>
                <option className="p-2 border-0 ">Gyu-Kaku</option>
                <option className="p-2 border-0 ">Urban Harmony</option>
                <option className="p-2 border-0 ">Brooklyn Fare</option>
              </select>
              <div className="relative bottom-[1.8rem] left-[7.7rem]">
                <FaChevronDown />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div>
        <div className="p-5 m-2 rounded-2xl overflow-auto">
          <table className="table w-full">
            {/* head */}
            <thead className="text-[#6C696A] border border-[#F2F2F2] text-base bg-[#f8f8f8] border-b-2 ">
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Shop Name</th>
                <th>Status</th>
                <th>Joining Date</th>
                <th>Email</th>
                <th>Profile</th>
              </tr>
            </thead>
            <tbody className="text-black text-md border rounded-lg border-[#F2F2F2] ">
              {employees.map((employee) => (
                <TableRow key={1} employee={employee} />
              ))}
            </tbody>
          </table>
          {employees.length === 0 && <SkeletonCom />}
        </div>
      </div>
    </div>
  );
};

export default page;
