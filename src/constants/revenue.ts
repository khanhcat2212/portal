export interface RevenueItem {
  day: string;
  lazada: number;
  shopee: number;
}

export const revenue: RevenueItem[] = [
  { day: "Mon", lazada: 6, shopee: 5 },
  { day: "Tue", lazada: 7, shopee: 5 },
  { day: "Wed", lazada: 2, shopee: 9 },
  { day: "Thu", lazada: 6, shopee: 3 },
  { day: "Fri", lazada: 5, shopee: 5 },
  { day: "Sat", lazada: 7, shopee: 6 },
  { day: "Sun", lazada: 9, shopee: 5 },
];
