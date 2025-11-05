import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { revenue } from "@src/constants/revenue";
import RevenueCartController from "./RevenueCartController";

const RevenueChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);

    const option: echarts.EChartsOption = {
      tooltip: { trigger: "axis" },

      legend: {
        bottom: 0,
        icon: "circle",
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 32,
        data: ["Lazada", "Shopee"],
        textStyle: {
          color: "#222B45",
          fontSize: 12,
          fontWeight: 500,
        },
      },

      grid: {
        left: 0,
        right: 0,
        bottom: "12%",
        top: "10%",
        containLabel: true,
      },

      xAxis: {
        type: "category",
        data: revenue.map((d) => d.day),
        axisLine: { lineStyle: { color: "#EFF1F3", width: 1 } },
        axisLabel: { color: "#7B91B0", margin: 10, fontSize: 12 },
        axisTick: { show: false },
      },

      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value}m",
          color: "#7B91B0",
          margin: 6,
          fontSize: 12,
        },
        splitLine: { lineStyle: { color: "#F0F3F7", type: "dashed" } },
      },

      series: [
        {
          name: "Lazada",
          type: "bar",
          data: revenue.map((d) => d.lazada),
          barWidth: 12,
          itemStyle: {
            color: "#0095FF",
            borderRadius: 2,
          },
          emphasis: {
            itemStyle: {
              color: "#0076CC",
            },
          },
          animationEasing: "elasticOut",
          animationDelay: (idx) => idx * 80,
        },
        {
          name: "Shopee",
          type: "bar",
          data: revenue.map((d) => d.shopee),
          barWidth: 12,
          itemStyle: {
            color: "#EA9F0D",
            borderRadius: 2,
          },
          emphasis: {
            itemStyle: {
              color: "#D98B00",
            },
          },
          animationEasing: "elasticOut",
          animationDelay: (idx) => idx * 80 + 100,
        },
      ],

      animationDuration: 1200,
      animationEasing: "cubicOut",
    };

    chart.setOption(option);
    chartInstance.current = chart;

    const handleResize = () => chart.resize();
    window.addEventListener("resize", handleResize);

    setTimeout(() => chart.resize(), 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.dispose();
    };
  }, []);

  const handleDownload = () => {
    if (!chartInstance.current) return;
    const url = chartInstance.current.getDataURL({
      type: "png", 
      pixelRatio: 2,
      backgroundColor: "#fff",
    });

    const link = document.createElement("a");
    link.href = url;
    link.download = "revenue-chart.png";
    link.click();
  };

  return (
    <div className="bg-white rounded-md p-6 shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <RevenueCartController onDownload={handleDownload}/>
      </div>

      <div ref={chartRef} className="h-80" />
    </div>
  );
};

export default RevenueChart;
