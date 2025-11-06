import Cart from '@src/feature/orders/create/Cart'
import CustomerInfo from '@src/feature/orders/create/CustomerInfo'
import OrderInfo from '@src/feature/orders/create/OrderInfo'
import ProductSelectTable from '@src/feature/orders/create/ProductSelectTable'
import AdminLayout from '@src/layout/adminLayout'
import React from 'react'

const OrderCreate = () => {
  return (
    <AdminLayout>
        <div className='flex gap-4'>
            <div className='flex flex-col w-[60%] gap-4' >
                <ProductSelectTable />
                <Cart />
            </div>

            <div className='flex flex-col justify-start items-start gap-4 w-[40%]' >
                <OrderInfo />
                <CustomerInfo />
            </div>
        </div>
    </AdminLayout>
  )
}

export default OrderCreate