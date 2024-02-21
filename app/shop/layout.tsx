import { useState } from "react";
import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";

interface Props {
  children: React.ReactNode;
}

const shopLayout = ({ children }: Props) => {
  //  :bg-red-500   :bg-pink-500   :bg-green-500
  return (
    <div className="flex min-h-[100vh] min-w-[100vw] ">
      <span className="flex min-h-[100vh] ">
        <SideNavBar />
      </span>
      <div className="">
        <TopNavBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default shopLayout;
