"use client";

import Image, { StaticImageData } from "next/image";
import OtosumIcon from "../../public/otosum.svg";
import OIcon from "../../public/o-icon.svg";
import DashboardIcon from "../../public/icons/dashboard.svg";
import ProductsIcon from "../../public/icons/products.svg";
import EmployeeManagementIcon from "../../public/icons/employ-management.svg";
import CalendarIcon from "../../public/icons/calendar.svg";
import ReportsIcon from "../../public/icons/reports.svg";
import SettingsIcon from "../../public/icons/settings.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGlobalState } from "../context/GlobalStateContext";
import DropDownItem from "./shared/DropDownItem";
interface MenuItemProps {
  href: string;
  icon: StaticImageData;
  label: string;
  isExpanded: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  href,
  icon,
  label,
  isExpanded,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const listItemClasses = `
  w-full h-12 text-[#9A9898] my-3 font-bold text-md
  ${
    isActive
      ? "text-white bg-gradient-to-r from-[#4391fd2b] to-[#00fc4329]"
      : ""
  }
  hover:text-white hover:bg-gradient-to-r hover:from-[#4391fd2b] hover:to-[#00fc4329] flex
`;

  const hoverLineClasses = `
  w-1 h-full
  ${isActive ? "text-white bg-gradient-to-b from-[#00FC44] to-[#438FFD]" : ""}
`;

  return (
    <li className={listItemClasses}>
      {isActive && <div className={hoverLineClasses}></div>}
      <button className="pl-3">
        <Link href={href} passHref>
          <div className="flex items-center justify-start transition-all duration-300">
            <Image
              src={icon}
              alt={label}
              width={isExpanded ? 24 : 38}
              height={isExpanded ? 24 : 38}
              className={`bg-transparent fill-blue-500  text-green-600 hover:filter hover:invert ${
                isActive ? "filter invert" : ""
              }`}
            />
            {isExpanded && (
              <span
                className={`ml-2 bg-transparent whitespace-nowrap ${
                  isExpanded
                    ? "transition-all duration-300 delay-100"
                    : "hidden"
                }`}
              >
                {label}
              </span>
            )}
          </div>
        </Link>
      </button>
    </li>
  );
};

const SideNav: React.FC = () => {
  const { toggleSidebar, isSidebarExpanded, setIsExpanded } = useGlobalState();

  const sidebarWidthLg = isSidebarExpanded ? "w-[19vw]" : "w-[6vw]";
  const sidebarWidthMd = isSidebarExpanded ? "w-[15vw]" : "w-[4vw]";

  return (
    <div
      className={`inset-y-0 left-0 bg-card flex items-stretch bg-[#0b1642] lg:${sidebarWidthLg} lg:${sidebarWidthMd}  sm:flex flex-col z-10 transition-all duration-300`}
    >
      <div
        className={`my-1 px-3 flex justify-center items-center text-center bg-[#0b1642] h-20 `}
      >
        <Image
          src={isSidebarExpanded ? OtosumIcon : OIcon}
          alt={isSidebarExpanded ? "Otosum" : "Otosum"}
          width={isSidebarExpanded ? 200 : 50}
          height={isSidebarExpanded ? 20 : 50}
          className="bg-transparent transition-all duration-300"
        />
        {/* dashboard expent and collapse button */}
        <button
          onClick={toggleSidebar}
          className={`fixed ${
            isSidebarExpanded ? "left-22" : "left-3.7"
          } bottom-5 transition-all duration-300`}
        >
          <div className="bg-[#5c6280] w-10 h-10 rounded-full flex justify-center items-center">
            {isSidebarExpanded ? (
              <FaChevronLeft className="text-white bg-transparent" />
            ) : (
              <FaChevronRight className="text-white bg-transparent" />
            )}
          </div>
        </button>
      </div>
      {isSidebarExpanded && (
        <h1 className="py-5 mt-5 px-5 text-md bg-transparent text-[#9A9898] transition-all duration-300 uppercase">
          Menu
        </h1>
      )}
      <div className="transition-all duration-300">
        <ul>
          {/* Pass isExpanded to MenuItem component */}
          <MenuItem
            href="/dashboard"
            icon={DashboardIcon}
            label="Dashboard"
            isExpanded={isSidebarExpanded}
          />
          <MenuItem
            href="/dashboard/employees"
            icon={EmployeeManagementIcon}
            label="Employee's"
            isExpanded={isSidebarExpanded}
          />
          {/* <DropDownItem
            href="/dashboard/employees"
            icon={EmployeeManagementIcon}
            label="Employee's"
            isExpanded={isSidebarExpanded}
          /> */}

          <MenuItem
            href="/dashboard/suppliers"
            icon={ProductsIcon}
            label="Suppliers"
            isExpanded={isSidebarExpanded}
          />
          <MenuItem
            href="/dashboard/calendar"
            icon={CalendarIcon}
            label="Calendar"
            isExpanded={isSidebarExpanded}
          />
          <MenuItem
            href="/dashboard/reports"
            icon={ReportsIcon}
            label="Reports"
            isExpanded={isSidebarExpanded}
          />
          <MenuItem
            href="/dashboard/settings"
            icon={SettingsIcon}
            label="Settings"
            isExpanded={isSidebarExpanded}
          />
          {/* ... other menu items ... */}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
