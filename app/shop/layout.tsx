import { useState } from "react";
import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";

interface Props {
  children: React.ReactNode;
}

const shopLayout = ({ children }: Props) => {
  // tablet:bg-red-500 laptop:bg-pink-500 desktop:bg-green-500
  return (
    <div className="flex min-h-[100vh] min-w-[100vw] ">
      <span className="flex min-h-[100vh] ">
        <SideNavBar />
      </span>
      <div className="desktop:w-[80vw] laptop:w-[80vw] tablet:w-[80vw]">
        <TopNavBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default shopLayout;
