import SideNavBar from "../components/SideNavBar";
import TopNavBar from "../components/TopNavBar";

interface Props {
  children: React.ReactNode;
}

const dashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex min-w-[1440px] min-h-[100vh]">
      <SideNavBar />
      <div className="w-full">
        <TopNavBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default dashboardLayout;
