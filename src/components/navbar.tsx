import { appNav } from "@/constants";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavbarComp: React.FC = () => {
  return (
    <div>
      <div className="min-h-[40px] bg-slate-50 drop-shadow-lg px-12">
        <ul className="flex px-4 py-6 justify-between">
          {appNav.map((navItem) => {
            return (
              <Link
                to={navItem.path}
                className="font-bold text-blue-500 cursor-pointer"
                key={navItem.path}
              >
                {navItem.name}
              </Link>
            );
          })}
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default NavbarComp;
