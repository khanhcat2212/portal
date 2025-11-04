import type { Meta, Story } from "@ladle/react";
import "@src/styles/globals.css";
import FeatureCard from "@src/components/card/FeatureCard";
import { Handbag } from "lucide-react";

const meta: Meta = {
  title: "card/FeatureCard",
};

export default meta


export const Feature: Story = () => (
  <FeatureCard
    title="Đơn giản và dễ sử dụng"
    image="https://cdn-icons-png.freepik.com/256/12656/12656672.png?semt=ais_white_label"
    description="Nhân viên bán hàng chỉ mất 15 phút làm quen để bắt đầu bán hàng với Wifosell. Giao diện đơn giản, thân thiện, thông minh giúp bạn triển khai quản lý bán hàng thật dễ dàng và nhanh chóng."
  />
);
