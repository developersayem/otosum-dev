import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";

interface Props {
  children: React.ReactNode;
}

const dashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen w-full">
      <span className="flex ">
        <SideNavBar />
      </span>
      <div className="grow w-full bg-[#f2f2f2]">
        <TopNavBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default dashboardLayout;
