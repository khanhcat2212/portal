/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from '@src/components/button/Button'
import Cart from '@src/feature/orders/create/Cart'
import Checkout from '@src/feature/orders/create/Checkout'
import CustomerInfo from '@src/feature/orders/create/CustomerInfo'
import OrderInfo from '@src/feature/orders/create/OrderInfo'
import ProductSelectTable from '@src/feature/orders/create/ProductSelectTable'
import AdminLayout from '@src/layout/adminLayout'
import { createOrder } from '@src/store/slices/orderThunks'
import { AppDispatch, RootState } from '@src/store/store'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const OrderCreate = () => {
  const router = useRouter()

  const [payment, setPayment] = useState("prepaid")
  const [method, setMethod] = useState("cash")

  const cartItems = useSelector((state: RootState) => state.carts.items);
  const dispatch = useDispatch<AppDispatch>();

  const [customerInfo, setCustomerInfo] = useState({
    customerName: "",
    phone: "",
    customerNote: "",
  });
  
  const [orderInfo, setOrderInfo] = useState({
    id: "string",
    channel: "online",
    shopName: "Shop A",
    orderNote: "",
  });  

  const handleSave = async () => {
    if (!cartItems.length) {
      alert("Giỏ hàng trống!");
      return;
    }
  
    try {
      const newOrder = await dispatch(
        createOrder({
          uid: "1234",
          items: cartItems,
          customerName: customerInfo.customerName,
          phone: customerInfo.phone,
          customerNote: customerInfo.customerNote,
          channel: orderInfo.channel,
          shopName: orderInfo.shopName,
          orderNote: orderInfo.orderNote,
        })
      ).unwrap();
      router.push(`/admin/orders/order/${newOrder.id}`);
    } catch (error: any) {
      alert("Tạo đơn hàng thất bại: " + error.message);
    }
  };

  
  return (
    <AdminLayout>
      <div className='flex gap-4'>
        <div className='flex flex-col w-[60%] gap-4' >
          <ProductSelectTable />
          <Cart />
          <Checkout payment={payment} setPayment={setPayment} method={method} setMethod={setMethod} />
        </div>

        <div className='flex flex-col justify-start items-start gap-4 w-[40%]' >
          <OrderInfo id={orderInfo.id} shopName={orderInfo.shopName} channel={orderInfo.channel} orderNote={orderInfo.orderNote} onChange={setOrderInfo}/>
          <CustomerInfo phone={customerInfo.phone} customerName={customerInfo.customerName} customerNote={customerInfo.customerNote} onChange={setCustomerInfo}  />
        </div>
      </div>

      <div className="flex w-full justify-end items-center gap-2 mt-4">
        <Button
          onClick={() => router.push("/admin/orders")}
          variant="neutral"
          size="sm"
        >
          Hủy
        </Button>
        <Button onClick={handleSave} variant="primary" size="sm">
          Lưu thông tin
        </Button>
      </div>
    </AdminLayout>
  )
}

export default OrderCreate