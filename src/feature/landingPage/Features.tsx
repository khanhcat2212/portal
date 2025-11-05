'use client'

import Button from "@src/components/button/Button";
import CategoryCard from "@src/components/card/CategoryCard";
import { categories } from "@src/constants/categories";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Features: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isMd = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="flex flex-col items-center justify-center shadow-lg py-20 md:py-28">
      <h1 className="text-[1.375rem] pb-12 md:text-[2.25rem] text-center font-bold md:leading-16.5 px-6">
        Wifosell là giải pháp tối ưu cho từng ngành hàng
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-20 md:gap-16 mx-auto px-6">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            image={category.image}
          />
        ))}
      </div>

      <h1 className="text-[1.375rem] pt-28 pb-8 md:text-[2.25rem] text-center font-bold md:leading-16.5 px-6">
        Đăng ký dùng thử miễn phí 10 ngày!
      </h1>

      <Button variant="primary" size={isMd ? "lg" : "sm"}>
        Dùng thử miễn phí
      </Button>
    </div>
  );
};

export default Features;
