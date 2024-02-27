import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";

interface Props {
  children: React.ReactNode;
}

const dashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-[100vh] w-screen ">
      <SideNavBar />
      <div className="grow">
        <TopNavBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default dashboardLayout;
