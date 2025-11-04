import React from "react";

interface CategoryCardProps {
  image: string;
  title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  title,
}) => {
  return (
    <div className="flex flex-col w-27">
        <img
          src={image}
          alt={title}
          className="w-27 h-28.75 object-cover mb-7"
        />
        <p className="text-[18px] font-semibold text-center">{title}</p>
    </div>
  );
};

export default CategoryCard;
