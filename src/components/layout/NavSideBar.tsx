import { adminNavs } from "@src/constants/adminNavs";
import React, { useState } from "react";

const NavSideBar: React.FC = () => {
  const [activePath, setActivePath] = useState<string | null>("/admin");
  const handleClick = (path: string) => setActivePath(path);

  return (
    <div
      className="w-63 bg-black-600"
      // style={{ height: "calc(100vh - 4.375rem)" }}
    >
      {adminNavs.map((nav) => {
        const isActive = activePath === nav.path;
        return (
          <div
            key={nav.label}
            onClick={() => handleClick(nav.path)}
            className={`flex items-center py-4 px-4 text-[.8125rem] gap-4 cursor-pointer ${isActive ? "text-white" : "text-grey-600 hover:text-blue"} transition-colors duration-200`}
          >
            {nav.icon && <nav.icon className="w-5 h-5" />}
            {nav.label}
          </div>
        );
      })}
    </div>
  );
}

export default NavSideBar;
