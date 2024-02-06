import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";

interface Props {
  children: React.ReactNode;
}

const dashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-[100vh] min-w-[1440px]">
      <SideNavBar />
      <div className="w-full">
        <TopNavBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default dashboardLayout;
