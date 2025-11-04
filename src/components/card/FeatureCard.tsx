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
    <div className="relative flex flex-col h-[508px] w-[349px] items-center text-center rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-all">
      <div className="absolute inset-0 bg-primary-gradient z-0 h-[508px] w-[350px] rounded-2xl" />

      <div className="flex flex-col bg-white items-center z-10 w-[348px] h-[482px] rounded-2xl px-10 py-8">
        <img
          src={image}
          alt={title}
          className="w-20 h-18 object-cover mb-8"
        />

        <h3 className="font-semibold text-black text-[18px] mb-6 text-center">{title}</h3>

        <p className="text-black text-[18px] text-justify leading-9">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
