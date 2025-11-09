import CardList from "@src/feature/statistic/CardList";
import AdminLayout from "@src/layout/adminLayout";
import dynamic from "next/dynamic";
import Head from "next/head";

import React from 'react'

const ChartSkeleton = () => (
  <div className="animate-pulse bg-gray-200 rounded-lg w-full h-64" />
);

const TableSkeleton = () => (
  <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="animate-pulse flex space-x-4 p-4 border-b border-gray-200">
        <div className="bg-gray-200 h-6 w-1/4 rounded"></div>
        <div className="bg-gray-200 h-6 w-1/4 rounded"></div>
        <div className="bg-gray-200 h-6 w-1/4 rounded"></div>
        <div className="bg-gray-200 h-6 w-1/4 rounded"></div>
      </div>
    ))}
  </div>
);

const RevenueChart = dynamic(
  () => import("@src/feature/statistic/revenueChart"),
  { ssr: false, loading: () => <ChartSkeleton /> }
);

const BestSellingChart = dynamic(
  () => import("@src/feature/statistic/BestSellingChart"),
  { ssr: false, loading: () => <ChartSkeleton /> }
);

const SatisfactionChart = dynamic(
  () => import("@src/feature/statistic/SatisfactionChart"),
  { ssr: false, loading: () => <ChartSkeleton /> }
);

const RecentOrderTable = dynamic(
  () => import("@src/feature/statistic/RecentOrderTable"),
  { ssr: false, loading: () => <TableSkeleton /> }
);

const Admin: React.FC = () => {
  return (
    <>
      <Head>
        <title>Admin Dashboard | Portal</title>
        <meta
          name="description"
          content="Tổng quan doanh thu, đơn hàng và thống kê sản phẩm bán chạy."
        />
      </Head>

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
    </>
  )
}

export default Admin