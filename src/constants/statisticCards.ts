import { ChartBarBig, ChartColumnBig, FileText, HandCoins } from "lucide-react";

export interface StatisticCard {
  title: string;
  value: string;
  icon: string;
  iconBg: string;
}

export const statisticCards: StatisticCard[] = [
  {
    title: "Đơn hoàn thành",
    value: "123",
    icon: "/statistic/icon_1.svg",
    iconBg: "bg-blue-100",
  },
  {
    title: "Doanh thu trong ngày",
    value: "2,590,000đ",
    icon: "/statistic/icon_2.svg",
    iconBg: "bg-turquios-100",
  },
  {
    title: "Doanh thu tháng này",
    value: "22,910,000đ",
    icon: "/statistic/icon_3.svg",
    iconBg: "bg-pink-100",
  },
  {
    title: "Tổng doanh thu",
    value: "86,910,000đ",
    icon: "/statistic/icon_4.svg",
    iconBg: "bg-green-100",
  },
];
