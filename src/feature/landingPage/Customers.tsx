import React from "react";
import Slider from "./Slider";
import { customers } from "@src/constants/customers";

const Customers: React.FC = () => {
  return (
    <div className="bg-primary-gradient flex flex-col items-center justify-center py-20 md:py-28 px-2">
      <h1 className="text-[1.5rem] md:text-[2.25rem] text-white text-center font-bold leading-snug md:leading-[1.3] pb-12 md:pb-16">
        Khách hàng của Wifosell
      </h1>

      <Slider customers={customers} autoPlayInterval={3000}/>
    </div>
  );
};

export default Customers;
