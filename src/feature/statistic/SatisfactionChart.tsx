import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { satisfaction } from "@src/constants/satisfaction";
import SatisfactionSummary from "./SatisfactionSummary";

const SatisfactionChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);

    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: "axis",
      },
      grid: {
        left: "0",
        right: "0",
        top: "40",
        bottom: "40",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: satisfaction.days,
        axisLine: { lineStyle: { color: "#e2e8f0" } },
        axisLabel: { show: false },
      },
      yAxis: {
        type: "value",
        axisLine: { show: false },
        splitLine: { lineStyle: { color: "#e2e8f0" } },
        axisLabel: { color: "#64748b" },
        interval: 40,
      },
      series: [
        {
          name: "Last Week",
          type: "line",
          smooth: true,
          showSymbol: true,
          symbol: "circle",
          symbolSize: 6,
          itemStyle: { color: "#3b82f6" },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(59,130,246,0.3)" },
              { offset: 1, color: "rgba(59,130,246,0.05)" },
            ]),
          },
          data: satisfaction.lastWeek,
        },
        {
          name: "This Week",
          type: "line",
          smooth: true,
          showSymbol: true,
          symbol: "circle",
          symbolSize: 6,
          itemStyle: { color: "#10b981" },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(16,185,129,0.3)" },
              { offset: 1, color: "rgba(16,185,129,0.05)" },
            ]),
          },
          data: satisfaction.thisWeek,
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
    <div className=" h-107.5 bg-white rounded-md px-8">
        <p className="text-[1.125rem] font-semibold pt-8">Customer Satisfaction</p>
      <div ref={chartRef} style={{ width: "100%", height: "250px" }} />

      <SatisfactionSummary />
    </div>
  );
};

export default SatisfactionChart;
