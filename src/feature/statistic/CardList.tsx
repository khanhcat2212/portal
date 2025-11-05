import StatisticCard from "@src/components/card/StatisticCard";
import { statisticCards } from "@src/constants/statisticCards";
import React from "react";

const CardList: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-white-300">
      {statisticCards.map((card, index) => (
        <StatisticCard
          key={index}
          title={card.title}
          value={card.value}
          icon={card.icon}
          iconBg={card.iconBg}
        />
      ))}
    </div>
  );
};

export default CardList;
