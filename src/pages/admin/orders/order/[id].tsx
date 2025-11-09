import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "@src/layout/adminLayout";
import Cart from "@src/feature/orders/create/Cart";
import OrderInfo from "@src/feature/orders/create/OrderInfo";
import { AppDispatch, RootState } from "@src/store/store";
import { fetchOrder, updateOrder } from "@src/store/slices/orderThunks";
import CustomerInfo from "@src/feature/orders/create/CustomerInfo";
import Checkout from "@src/feature/orders/order/Checkout";
import OrderStatus from "@src/feature/orders/order/OrderStatus";
import Button from "@src/components/button/Button";

const OrderDetail: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const ordersState = useSelector((state: RootState) => state.orders);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [payment, setPayment] = useState("prepaid")
  const [method, setMethod] = useState("cash")

  const router = useRouter()

  const orderId = Array.isArray(id) ? id[0] : id || "";

  const order = ordersState.items.find((o) => o.id === orderId);

  const [customerInfo, setCustomerInfo] = useState({
    phone: "",
    customerName: "",
    customerNote: "",
  });

  const [orderInfo, setOrderInfo] = useState({
    id: "",
    channel: "shopee",
    shopName: "cosmetic",
    orderNote: "",
  });

  useEffect(() => {
    if (!orderId) return;

    if (!order) {
      dispatch(fetchOrder(orderId)).finally(() => setLoading(false));
    } else {
      setCustomerInfo({
        phone: order.phone,
        customerName: order.customerName,
        customerNote: order.customerNote || "",
      });

      setOrderInfo({
        id: order.id,
        channel: order.channel,
        shopName: order.shopName,
        orderNote: order.orderNote
      })
      setLoading(false);
    }
  }, [dispatch, orderId, order]);

  const updateCheckout = async (newCustomerInfo: typeof customerInfo, newOrderInfo: typeof orderInfo) => {
    if (!orderId) return;
    setUpdating(true);

    try {
      const updatedOrder = await dispatch(
        updateOrder({
          id: orderId,
          payload: {
            channel: newOrderInfo.channel,
            shopName: newOrderInfo.shopName,
            orderNote: newOrderInfo.orderNote,
            phone: newCustomerInfo.phone,
            customerName: newCustomerInfo.customerName,
            customerNote: newCustomerInfo.customerNote,
          },
        })
      ).unwrap();

      setCustomerInfo({
        phone: updatedOrder.phone,
        customerName: updatedOrder.customerName,
        customerNote: updatedOrder.customerNote || "",
      });
    } catch (error) {
      console.error("Cập nhật thông tin khách hàng thất bại:", error);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <div className="p-4">Đang tải...</div>;
  if (!order) return <div className="p-4">Không tìm thấy đơn hàng</div>;

  return (
    <AdminLayout>
      <div className="w-full bg-white flex mb-4">
        <div className="w-[60%]">
          <OrderStatus status="shipping" />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col w-[60%] gap-4">
          <Cart />
          <Checkout payment={payment} setPayment={setPayment} method={method} setMethod={setMethod} />
        </div>

        <div className="flex flex-col w-[40%] gap-4">
          <OrderInfo 
          id={orderId} 
          channel={orderInfo.channel} 
          shopName={orderInfo.shopName} 
          orderNote={orderInfo.orderNote}
           onChange={(newOrderInfo) => updateCheckout(customerInfo, newOrderInfo)} />
          <CustomerInfo
            phone={customerInfo.phone}
            customerName={customerInfo.customerName}
            customerNote={customerInfo.customerNote}
            onChange={(newCustomerInfo) => updateCheckout(newCustomerInfo, orderInfo)}
          />
          {updating && <div className="text-sm text-blue-600">Đang cập nhật...</div>}
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
        <Button onClick={() => router.push("/admin/orders")} variant="primary" size="sm">
          Lưu thông tin
        </Button>
      </div>
    </AdminLayout>
  );
};

export default OrderDetail;
