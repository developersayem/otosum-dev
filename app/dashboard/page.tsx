import InfoCardCom from "../components/cards/shared/InfoCardCom";
import StoreCardCom from "../components/cards/StoreCardCom";
import TotalSalesIcon from "../../public/icons/totalsalesicon.svg";
import RamaiMallImg from "../../public/demoImage/ramai-mall.png";
import GyuKakuImg from "../../public/demoImage/gyu-kaku.png";
import UrbanShopImg from "../../public/demoImage/urban-shop.png";
import BrooklynFareImg from "../../public/demoImage/brooklyn-fare.png";

const page = () => {
  return (
    <div className="min-h-[100vh] w-full">
      {/*SALES INFO SECTION START */}
      <div className="bg-white p-5 mb-5 m-5 rounded-2xl  ">
        <h1 className="text-2xl text-black font-bold p-5">Overview</h1>
        <div className="w-full h-full inline-grid grid-cols-3 gap-8 ">
          <InfoCardCom
            label="Sales"
            icon={TotalSalesIcon}
            amount={3492.0}
            lastAmount={59.75}
            bgGradient="text-white bg-gradient-to-r from-[#454CEA] to-[#5596CF]"
          />
          <InfoCardCom
            label="Total Expenses"
            icon={TotalSalesIcon}
            amount={3492.0}
            lastAmount={59.75}
            bgGradient="text-white bg-gradient-to-r from-[#F85900] to-[#FAC250]"
          />
          <InfoCardCom
            label="Total Revenue"
            icon={TotalSalesIcon}
            amount={3492.0}
            lastAmount={59.75}
            bgGradient="text-white bg-gradient-to-r from-[#DC1818] to-[#FF6565]"
          />
        </div>
      </div>
      {/*SALES INFO SECTION END  */}
      {/*STORES SECTION START  */}
      <div className="">
        <div className="grid grid-cols-4  gap-4 items-center">
          <StoreCardCom
            name="Ramai Mall"
            image={RamaiMallImg}
            todaySales={450}
            href="/pos"
            onlineSales={120}
            offlineSales={330}
          />
          <StoreCardCom
            name="Gyu-Kaku"
            image={GyuKakuImg}
            todaySales={450}
            href="/pos"
            onlineSales={120}
            offlineSales={330}
          />
          <StoreCardCom
            name="Urban Shop"
            image={UrbanShopImg}
            todaySales={450}
            href="/pos"
            onlineSales={120}
            offlineSales={330}
          />
          <StoreCardCom
            name="Brooklyn Fare"
            image={BrooklynFareImg}
            todaySales={450}
            href="/pos"
            onlineSales={120}
            offlineSales={330}
          />
        </div>
      </div>
      {/*STORES SECTION END */}
    </div>
  );
};

export default page;
