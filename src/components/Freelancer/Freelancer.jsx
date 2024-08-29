import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Freelancer = () => {
  return (
    <main className="flex w-full h-screen">
      <SideBar className="w-64 h-full fixed top-0 left-0" />
      <div className="w-full flex flex-col overflow-y-auto">
        <div className="flex-grow p-5 sm:p-10 md:20">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Freelancer;
