import AdminFooter from "@src/components/layout/AdminFooter";
import AdminHeader from "@src/components/layout/AdminHeader";
import Breadcumb from "@src/components/layout/Breadcumb";
import NavSideBar from "@src/components/layout/NavSideBar";
import React, { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AdminHeader />
      <div className="flex-1 flex">
        <NavSideBar />
        <div className="flex-1 flex flex-col">
          <main className="flex-1 bg-white-300 px-6 py-5">
            <Breadcumb />
            {children}
            </main>
          <AdminFooter />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
