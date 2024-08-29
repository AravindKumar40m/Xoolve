import React from "react";
import {
  IconamoonProfileCircleThin,
  CarbonSearch,
  LucideUsers,
  JamTaskList,
  TablerDeviceIpadQuestion,
  SimpleIconsFreelancer,
  RiCustomerService2Line,
  HeroiconsOutlineMenu,
  SolarLogout2BoldDuotone,
} from "../../assets/Icons";
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
          <Link to={"/freelancer/profile"}>
            <li className="p-3 flex gap-4">
              <IconamoonProfileCircleThin className="size-6" /> Profile
            </li>
          </Link>
          <Link to={"/freelancer/job"}>
            <li className="p-3 flex gap-4">
              <CarbonSearch className="size-6" />
              Search Job
            </li>
          </Link>
          <Link to={"/freelancer/projects"}>
            <li className="p-3 flex gap-4">
              <LucideUsers className="size-6" />
              My Network
            </li>
          </Link>
          <Link to={"#"}>
            <li className="p-3 flex gap-4">
              <JamTaskList className="size-6" />
              Applied Jobs
            </li>
          </Link>
          <Link to={"#"}>
            <li className="p-3 flex gap-4">
              <TablerDeviceIpadQuestion className="size-6" />
              Application Status
            </li>
          </Link>
          <Link to={"#"}>
            <li className="p-3 flex gap-4">
              <SimpleIconsFreelancer className="size-6" />
              Freelance
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
