import React from "react";
import clsx from "clsx";

interface FeatureCardProps {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  value: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  iconBg,
  iconColor,
  title,
  value,
}) => {
  return (
    <div className="flex items-center justify-between py-16 h-32.75 w-96.75 bg-white px-7.5 rounded-sm shadow-2">
        <div className="flex flex-col gap-3">
            <p className="text-[1rem] font-bold">{title}</p>
            <p className="text-[1.75rem]">{value}</p>
        </div>

        <div className={clsx(
            "flex items-center justify-center w-15 h-15 rounded-md",
            iconBg
        )}>
            <div className={clsx("w-6 h-6", iconColor)}>{icon}</div>
        </div>
    </div>
  );
};

export default FeatureCard;
