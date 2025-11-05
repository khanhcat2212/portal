import CardList from "@src/feature/statistic/CardList";
import AdminLayout from "@src/layout/adminLayout";

import React from 'react'

const Admin: React.FC = () => {
  return (
    <AdminLayout>
      <CardList />
    </AdminLayout>
  )
}

export default Admin