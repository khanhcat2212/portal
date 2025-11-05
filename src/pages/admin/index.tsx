import BestSellingChart from "@src/feature/statistic/BestSellingChart";
import CardList from "@src/feature/statistic/CardList";
import RevenueChart from "@src/feature/statistic/revenueChart";
import AdminLayout from "@src/layout/adminLayout";

import React from 'react'

const Admin: React.FC = () => {
  return (
    <AdminLayout>
      <CardList />
      <div className="py-4 flex items-center gap-4 w-full">
        <div className="w-[40%]">
          <RevenueChart />
        </div>
        <div className="w-[60%]">
          <BestSellingChart />
        </div>
      </div>
    </AdminLayout>
  )
}

export default Admin