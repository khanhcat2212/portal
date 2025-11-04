import React from "react";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="h-[134px] w-[255px]">
        <img
          src={image}
          alt={title}
          className="w-12 h-12 object-cover mb-2"
        />

        <h3 className="text-[18px] font-semibold mb-0">{title}</h3>

        <p className="text-[18px] leading-tight">{description}</p>
    </div>
  );
};

export default FeatureCard;
