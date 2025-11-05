import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { months, summary, topProductsData } from "@src/constants/bestsellings";
import { ChevronDown, Ticket, TicketX } from "lucide-react";
import TicketIcon from "@src/icons/TicketIcon";

const BestSellingChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chartDom = chartRef.current!;
    const chart = echarts.init(chartDom);

    const option: echarts.EChartsOption = {
      tooltip: { trigger: "axis" },
      grid: {
        left: "0",
        right: "0",
        bottom: "0",
        top: "10%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: months,
        axisTick: { show: false },
        axisLine: { show: false },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: (v) => `${v / 1000}k`,
        },
        splitLine: {
          lineStyle: { color: "#eee" },
        },
      },
      series: [
        {
          name: "Áo thun nam",
          type: "bar",
          data: topProductsData.menTshirt,
          barWidth: 12,
          itemStyle: { color: "#4AB58E", borderRadius: 4 },
        },
        {
          name: "Áo khoác nữ",
          type: "bar",
          data: topProductsData.womenJacket,
          barWidth: 12,
          itemStyle: { color: "#FFCF00", borderRadius: 4 },
        },
        {
          name: "Áo thun nữ",
          type: "bar",
          data: topProductsData.womenTshirt,
          barWidth: 12,
          itemStyle: { color: "#CD7FE9", borderRadius: 4 },
        },
      ],
    };

    chart.setOption(option);

    const handleResize = () => chart.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.dispose();
    };
  }, []);

  return (
    <div className="p-6 bg-white rounded-md">
      <div className="flex items-center justify-between w-full mb-4">
        <p className="text-[18px] font-semibold">Top sản phẩm bán chạy</p>

        <div className="flex items-center justify-between w-31.5 h-9 px-4 bg-white-400 rounded-md border border-grey-600">
          <span className="text-[.8125rem]">Tháng</span>
          <ChevronDown size={12} className="text-grey-100" />
        </div>
      </div>

      <div ref={chartRef} className="w-full h-[220px]" />

      <div className="grid grid-cols-3 mt-8">
        {summary.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 p-3 rounded-lg">
            <div className="flex items-center gap-2">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: item.bgcolor }}
              >
                <TicketIcon size={18} color={item.color} />
              </div>

              <div className="flex flex-col justify-center py-1">
                <p className="text-[.75rem] font-semibold">{item.label}</p>
                <p className="text-[.75rem] text-grey-500">{item.category}</p>
              </div>
            </div>

            <div>
              <p
                className="text-[.875rem] font-semibold"
                style={{ color: item.color }}
              >
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingChart;
