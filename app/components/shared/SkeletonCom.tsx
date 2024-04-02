import type { NextComponentType, NextPageContext } from "next";

interface Props {}

const SkeletonCom: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <span className="loading loading-infinity w-40 bg-gradient-to-r from-[#00FC44] to-[#438FFD]"></span>
      </div>
    </>
  );
};

export default SkeletonCom;
