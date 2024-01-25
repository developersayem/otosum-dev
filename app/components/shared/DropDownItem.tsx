import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface MenuItemProps {
  href: string;
  icon: StaticImageData;
  label: string;
  isExpanded: boolean;
}

const DropDownItem: React.FC<MenuItemProps> = ({
  href,
  icon,
  label,
  isExpanded,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const [isOpen, setIsOpen] = useState(false); // Add this line

  const listItemClasses = `
    w-full h-12 text-[#9A9898] my-3 font-bold text-lg
    ${
      isActive
        ? "text-white bg-gradient-to-r from-[#4391fd2b] to-[#00fc4329]"
        : ""
    }
    hover:text-white hover:bg-gradient-to-r hover:from-[#4391fd2b] hover:to-[#00fc4329] flex
  `;

  const lineClasses = `
    w-1 h-full
    ${isActive ? "text-white bg-gradient-to-b from-[#00FC44] to-[#438FFD]" : ""}
  `;

  return (
    <div className={listItemClasses}>
      <li>
        <button
          type="button"
          className="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group"
          aria-controls="dropdown-example"
          data-collapse-toggle="dropdown-example"
          onClick={() => setIsOpen(!isOpen)} // Add this line
        >
          <Image
            src={icon}
            alt={label}
            width={isExpanded ? 24 : 38}
            height={isExpanded ? 24 : 38}
            className={`bg-transparent fill-blue-500  text-green-600 hover:filter hover:invert ${
              isActive ? "filter invert" : ""
            }`}
          />
          <span
            className="flex-1 ml-3 text-left whitespace-nowrap"
            sidebar-toggle-item
          >
            {label}
          </span>
          <svg
            sidebar-toggle-item
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <ul
          id="dropdown-example"
          className={isOpen ? "py-2 space-y-2" : "hidden py-2 space-y-2"}
        >
          <li>
            <a
              href="#"
              className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11"
            >
              Billing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11"
            >
              Invoice
            </a>
          </li>
        </ul>
      </li>
      <li></li>
    </div>
  );
};

export default DropDownItem;
