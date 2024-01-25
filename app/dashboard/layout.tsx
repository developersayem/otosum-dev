import SideNavBar from "../components/SideNavBar";
import TopNavBar from "../components/TopNavBar";

interface Props {
  children: React.ReactNode;
}

const dashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex max-w-[1440px]">
      <SideNavBar />
      <div className="w-full">
        <TopNavBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default dashboardLayout;
