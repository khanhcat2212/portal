"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { adminRoutes } from "@src/constants/adminRoutes";

const Breadcumb: React.FC = () => {
  const pathname = usePathname();

  const currentNav = adminRoutes.find((nav) => nav.path === pathname);

  return (
    <div className="flex items-center justify-between w-full pb-5">
      <span className="text-[16px] text-grey-800 font-semibold">{currentNav?.label.toUpperCase()}</span>
      <span className="text-[.8125rem] text-grey-800">{`WIFOSELL / ${currentNav?.label}`}</span>
    </div>
  );
};

export default Breadcumb;
