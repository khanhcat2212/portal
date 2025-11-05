import { productColors, topProductsData } from '@src/constants/bestsellings';
import * as echarts from "echarts";
import React, { useEffect, useRef } from 'react'

const seriesNames = ['Áo thun nam', 'Áo khoác nữ', 'Áo thun nữ'];

const ChartContent: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const option: echarts.EChartsOption = {
      
      tooltip: { 
        trigger: "axis",
        axisPointer: { type: 'shadow' },
        formatter: (params: any) => {
            let tooltip = `<strong>${params[0].name}</strong><br/>`;
            params.forEach((item: any) => {
                tooltip += `<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;"></span>
                            ${item.seriesName}: ${item.value.toLocaleString()} <br/>`;
            });
            return tooltip;
        },
      },
      grid: { top: 10, left: 4, right: 0, bottom: 0, containLabel: true },
      xAxis: {
        type: "category",
        data: topProductsData.map((d) => d.month),
        axisLine: { lineStyle: { color: "#EFF1F3", width: 1 } },
        axisLabel: { color: "#7B91B0", margin: 8, fontSize: "10px" },
      },
      yAxis: {
        type: "value",
        min: 0,
        max: 25000,
        interval: 5000,
        axisLabel: {
          formatter: (value: number) => value >= 1000 ? `${value / 1000}K` : `${value}`,
          color: "#7B91B0",
          margin: 4,
          fontSize: "10px",
        },
        axisLine: { show: false },
      },
      series: seriesNames.map(name => ({
        name: name,
        type: "bar",
        data: topProductsData.map((d: any) => d[name]),
        itemStyle: { color: productColors[name as keyof typeof productColors], borderRadius: 2 },
        barWidth: 10,
        barGap: '30%', 
        barCategoryGap: '30%'
      })) as echarts.SeriesOption[],
    };

    chartInstance.current = echarts.init(chartRef.current);
    chartInstance.current.setOption(option);

    const resizeHandler = () => chartInstance.current?.resize();
    window.addEventListener("resize", resizeHandler);
    setTimeout(() => chartInstance.current?.resize(), 0);

    return () => {
      chartInstance.current?.dispose();
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div
      ref={chartRef}
      style={{ width: "100%", height: "176px" }}
    />
  );
};

export default ChartContent;