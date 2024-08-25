import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Freelancer = () => {
  return (
    <main className="flex w-full h-full">
      <SideBar />
      <div className="w-full flex flex-col">
        <div className="flex-grow p-5 sm:p-10 md:20">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Freelancer;
