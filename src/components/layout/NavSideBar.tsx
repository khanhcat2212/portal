import { adminNavs } from "@src/constants/adminNavs";
import { setActiveNav } from "@src/store/slices/navSlice";
import { AppDispatch, RootState } from "@src/store/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const NavSideBar: React.FC = () => {
  const router = useRouter()

  const dispatch = useDispatch<AppDispatch>();
  const activePath = useSelector((state: RootState) => state.navs.activePath);
  const isOpenSideBar = useSelector(
    (state: RootState) => state.sidebar.isOpenSideBar
  );


  if (!isOpenSideBar) return null;
  
  const handleClick = (path: string) => {
    dispatch(setActiveNav(path));
    router.push(path);
  };


  return (
    <div
      className="w-63 bg-black-600"
    // style={{ height: "calc(100vh - 4.375rem)" }}
    >
      <div className="w-63 bg-black-600 flex items-center justify-center h-17.5">
        <Image
          src="/logo.png"
          alt="logo"
          width={112}
          height={0}
          className="h-auto object-cover mb-2 mr-1 cursor-pointer"
          onClick={() => router.push('/')}
        />
      </div>
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
