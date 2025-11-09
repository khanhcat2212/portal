import Button from "@src/components/button/Button";
import FeatureCard from "@src/components/card/FeatureCard";
import { features } from "@src/constants/features";
import { useMediaQuery } from "react-responsive";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Overview: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isMd = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="py-8 md:py-12 shadow-lg">
      <div className="text-black-300 mb-24 px-2">
        <h1 className="text-[1.375rem] md:text-[3rem] text-center font-bold md:leading-[1.2]">
          WIFOSELL <br /> Giải pháp hỗ trợ bán hàng đa kênh
        </h1>

        <h3 className="text-[.75rem] md:text-[1.5rem] text-center mt-4">
          Nền tảng quản lý và bán hàng đa kênh giúp bạn tăng trưởng kinh doanh
        </h3>
      </div>

      <div className="w-full relative">
        <Image
          src="/banner.svg"
          alt="banner"
          width={1920}
          height={511}
          className="w-full h-auto object-cover"
          priority
          fetchPriority="high"
        />
        <div className="absolute -top-17 left-1/2 transform -translate-x-1/2">
          <Button variant="primary" size={isMd ? "lg" : "sm"}>
            Dùng thử miễn phí
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center py-4 md:py-22 px-2">
        <h1 className="text-[1.375rem] py-8 md:text-[2.25rem] md:py-12 text-center font-bold md:leading-16.5">
          Phần mềm quản lý bán hàng Wifosell
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overview;
