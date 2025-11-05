import ManagementCard from "@src/components/card/ManagementCard";
import { managements } from "@src/constants/managements";
import React from "react";

const Managements: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 md:py-28 px-12">
      <h1 className="text-[1.5rem] md:text-[2.25rem] text-center font-bold leading-snug md:leading-[1.3] pb-12 md:pb-20">
        Phần mềm quản lý bán hàng online hiệu quả
      </h1>

      <div className="flex flex-col-reverse mb-16 md:flex-row items-center gap-10 md:gap-12 w-full max-w-6xl">
        <div className="w-full md:w-135">
          <h2 className="text-[1.5rem] md:text-[2.5rem] text-blue font-bold pb-12 md:pb-8 text-center md:text-left">
            Quản lý bán hàng
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12">
            {managements.map((mng, index) => (
              <ManagementCard
                key={index}
                title={mng.title}
                description={mng.description}
                image={mng.image}
              />
            ))}
          </div>
        </div>

        <div className="w-full md:w-150 flex justify-center mb-10 md:mb-0">
          <img
            src="/categories/banner_1.svg"
            alt="banner_1"
            className="w-62.5 sm:w-100 md:w-150 object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 w-full max-w-6xl my-12">
        <div className="w-full md:w-126 flex justify-center mb-10 md:mb-0">
          <img
            src="/managements/banner_2.svg"
            alt="banner_1"
            className="w-62.5 sm:w-100 md:w-126 object-contain"
          />
        </div>

        <div className="w-full md:w-141">
          <h2 className="text-[1.5rem] md:text-[2.5rem] text-blue font-bold pb-8 text-center md:text-left">
            Đồng bộ với các sàn TMĐT
          </h2>

          <p className="text-[1.125rem] text-grey-800">
            Wifosell đem đến giải pháp quản lý bán hàng dễ dàng & hiệu quả trên
            các sàn TMĐT phổ biến nhất hiện nay như Tiki, Shopee, Lazada,
            Sendo... Quản lý tập trung nhiều gian hàng trên một giao diện, tự
            động đồng bộ tồn kho - giá bán, tiết kiệm thời gian, đơn đi bạt
            ngàn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Managements;
