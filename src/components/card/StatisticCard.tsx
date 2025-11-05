import React from "react";
import clsx from "clsx";

interface StatisticCardProps {
  icon: string;
  iconBg: string;
  title: string;
  value: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  icon,
  iconBg,
  title,
  value,
}) => {
  return (
    <div className="flex items-center justify-between py-8 h-28 w-69 bg-white px-6 rounded-sm shadow-sm hover:shadow-md hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer">
      <div className="flex flex-col gap-2">
        <p className="text-[.9375rem] font-bold">{title}</p>
        <p className="text-[1.375rem] font-medium">{value}</p>
      </div>

      <div
        className={clsx(
          "flex items-center justify-center w-12 h-12 rounded-md",
          iconBg
        )}
      >
        <img src={icon} alt="icon" className="w-6 object-contain" />
      </div>
    </div>
  );
};

export default StatisticCard;
