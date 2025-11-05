import BestSellingChart from "@src/feature/statistic/BestSellingChart";
import CardList from "@src/feature/statistic/CardList";
import RecentOrderTable from "@src/feature/statistic/RecentOrderTable";
import RevenueChart from "@src/feature/statistic/revenueChart";
import SatisfactionChart from "@src/feature/statistic/SatisfactionChart";
import AdminLayout from "@src/layout/adminLayout";

import React from 'react'

const Admin: React.FC = () => {
  return (
    <AdminLayout>
      <CardList />
      <div className="py-6 flex items-center gap-6 w-full">
        <div className="w-[40%]">
          <RevenueChart />
        </div>
        <div className="w-[60%]">
          <BestSellingChart />
        </div>
      </div>

      <div className="flex items-center gap-6 w-full">
        <div className="w-[60%]">
          <RecentOrderTable />
        </div>

        <div className="w-[40%]">
          <SatisfactionChart />
        </div>
      </div>
    </AdminLayout>
  )
}

export default Admin