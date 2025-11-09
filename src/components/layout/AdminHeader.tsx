import { ChevronDown, Menu, Settings } from "lucide-react";
import React from "react";
import Input from "@src/components/input/Input";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@src/store/store";
import { toggleSideBar } from "@src/store/slices/sidebarSlice";
import Image from "next/image";

const AdminHeader: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    dispatch(toggleSideBar());
  };

  return (
    <div className="h-17.5 flex w-full">
      <div className="flex flex-1 items-center justify-between bg-white px-6">
        <div className="flex items-center gap-4">
          <Menu onClick={handleClick} className="text-[.875rem] text-grey-900 cursor-pointer" />
          <div className="w-140.75">
            <Input variant="contained" placeholder="Search..." withIcon />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full overflow-hidden">
            <Image
              src="https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg"
              alt="avatar"
              width={36}
              height={36}
              className="w-9 h-9 object-cover cursor-pointer"
            />

            <div className="flex items-center gap-2 cursor-pointer">
                <p className="text-[.8125rem] text-grey-800">Henry</p>
                <ChevronDown className="w-1.5 text-grey-800" />
            </div>

            <Settings className="text-[1.125rem] text-grey-800" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
