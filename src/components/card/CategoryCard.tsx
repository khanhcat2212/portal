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
    <div className="flex flex-col w-full md:w-42.5 justify-center hover:scale-[1.1] transition-transform duration-300 ease-in-out cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-27 object-cover mb-7 mx-auto"
        />
        <p className="text-[1.125rem] font-semibold text-center">{title}</p>
    </div>
  );
};

export default CategoryCard;
