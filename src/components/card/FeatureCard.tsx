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
    <div className="relative flex flex-col h-127 w-87.5 items-center text-center rounded-2xl bg-white p-6 shadow-sm hover:shadow-md hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer">
      <div className="absolute inset-0  bg-primary-gradient z-0 h-127 w-87.5 rounded-2xl" />

      <div className="flex flex-col bg-white items-center z-10 w-86.5 h-120.5 rounded-2xl px-10 py-8">
        <img
          src={image}
          alt={title}
          className="h-20 object-cover mb-8"
        />

        <h3 className="font-semibold text-black text-[1.125rem] mb-6 text-center">{title}</h3>

        <p className="text-black text-[1.125rem] text-justify leading-9">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
