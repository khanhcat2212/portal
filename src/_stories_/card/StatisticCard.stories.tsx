import type { Meta, Story } from "@ladle/react";
import "@src/styles/globals.css";
import StatisticCard from "@src/components/card/StatisticCard";
import { FileText } from "lucide-react";

const meta: Meta = {
  title: "Card/StatisticCard",
};

export default meta; 

export const Statistic: Story = () => (
  <StatisticCard
    title="Đơn hoàn thành"
    value="123"
    icon={<FileText />}
    iconBg="bg-blue-100"
    iconColor="text-blue-300"
  />
);

