import React from "react";
import {
  FileText,
  CheckCircle,
  Package,
  Truck,
  ClipboardCheck,
  XCircle,
} from "lucide-react";

interface OrderStatusProps {
  status:
    | "created"
    | "confirmed"
    | "packed"
    | "shipping"
    | "delivered"
    | "cancelled";
  createdAt?: string;
}

const steps = [
  { key: "created", label: "Đã tạo", icon: FileText },
  { key: "confirmed", label: "Xác nhận", icon: CheckCircle },
  { key: "packed", label: "Đóng gói", icon: Package },
  { key: "shipping", label: "Đang giao", icon: Truck },
  { key: "delivered", label: "Đã giao", icon: ClipboardCheck },
  { key: "cancelled", label: "Huỷ", icon: XCircle },
];

const OrderStatus: React.FC<OrderStatusProps> = ({ status }) => {
  const currentStepIndex = steps.findIndex((s) => s.key === status);

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <h3 className="text-lg font-semibold mb-6 text-black-300">
        Trạng thái đơn hàng
      </h3>

      <div className="relative flex items-center justify-between">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === currentStepIndex;
          const isCompleted = index < currentStepIndex;
          const isCancelled = status === "cancelled";

          return (
            <div
              key={step.key}
              className="flex flex-col items-center relative w-full"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className={`absolute top-1/3 left-1/2 w-full border-t-2 border-dashed z-0
                  ${
                    index < currentStepIndex
                      ? "border-green-500"
                      : "border-gray-300"
                  }`}
                  style={{ transform: "translateY(-50%)", width: "100%" }}
                />
              )}

              {/* Icon */}
              <div
                className={`relative z-10 w-12 h-12 bg-white flex items-center justify-center transition-all
                ${
                  isCancelled && step.key === "cancelled"
                    ? "text-red-600"
                    : isActive
                    ? "text-blue-600"
                    : isCompleted
                    ? "text-green-600"
                    : "text-gray-300"
                }`}
              >
                <Icon size={32} />
              </div>

              {/* Label */}
              <p className="text-[.875rem] mt-2 font-medium text-gray-700 text-center">
                {step.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderStatus;
