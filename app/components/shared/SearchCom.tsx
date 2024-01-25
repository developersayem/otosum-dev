import { RiSearchLine } from "react-icons/ri";
import type { NextComponentType, NextPageContext } from "next";

interface Props {}

const SearchCom: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const searchButton = () => {
    console.log("search button clicked");
  };
  return (
    <div className="bg-[#f2f2f2] rounded-full  hover:text-black hover:bg-gradient-to-r hover:from-[#4391fd2b] hover:to-[#00fc4329]">
      <div className=" text-xl p-2 ml-1">
        <RiSearchLine />
      </div>
      <form className="form-control">
        <input
          type="text"
          placeholder="Type to search..."
          className="input input-bordered  bg-[#f2f2f2] rounded-full outline-none focus:outline-none border-0 text-[es-300
#6C696A] hover:text-black hover:bg-gradient-to-r hover:from-[#4391fd2b] hover:to-[#00fc4329]"
        />
      </form>
    </div>
  );
};

export default SearchCom;
