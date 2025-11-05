import type { Meta, Story } from "@ladle/react";
import "@src/styles/globals.css";
import ManagementCard from "@src/components/card/ManagementCard";

const meta: Meta = {
  title: "card/ManagementCard",
};

export default meta;


export const Management: Story = () => (
  <ManagementCard
    title="Quản lý tồn kho"
    image="https://cdn-icons-png.flaticon.com/512/1554/1554564.png"
    description="Kiểm soát chính xác số lượng mặt hàng trong kho"
  />
);
