import React from "react";
import {
  LucideUsers,
  RiCustomerService2Line,
  HeroiconsOutlineMenu,
  SolarLogout2BoldDuotone,
} from "../../assets/Icons";
import { MdOutlineDashboard } from "react-icons/md";
import { CiChat1 } from "react-icons/ci";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="bg-gradient-to-b from-pink-200 to-purple-100 h-screen p-4 w-full md:w-[290px]">
      <div className="flex flex-col gap-5">
        <p className="flex items-end justify-end">
          <HeroiconsOutlineMenu className="size-6" />
        </p>
        <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-t from-[#333399] via-pink-400 to-pink-400 text-transparent bg-clip-text flex self-center">
          Xoolve
        </p>
        <ul className="font-semibold text-[#707482] flex flex-col gap-3">
          <Link to={"/business/dashboard"}>
            <li className="p-3 flex gap-4">
              <MdOutlineDashboard className="size-6" /> Dashboard
            </li>
          </Link>
          <Link to={""}>
            <li className="p-3 flex gap-4">
              <CiChat1 className="size-6" />
              Chat
            </li>
          </Link>
          <Link to={""}>
            <li className="p-3 flex gap-4">
              <LucideUsers className="size-6" />
              Connection
            </li>
          </Link>
          <Link to={"#"}>
            <li className="p-3 flex gap-4">
              <RiCustomerService2Line className="size-6" />
              Help & Support
            </li>
          </Link>
        </ul>
        <button className="bg-white p-2 py-3 text-lg rounded-full border-2 border-red-300 text-red-600 font-semibold flex items-center justify-center gap-3">
          <SolarLogout2BoldDuotone className="size-6" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
