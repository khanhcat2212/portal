import { accordions } from "@src/constants/accordions";
import React, { useState } from "react";
import Accordion from "./Accordion";

const QA: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<null | number>(null)
  return (
    <div className="flex flex-col items-center justify-center py-20 md:py-28 px-12">
      <h1 className="text-[1.5rem] md:text-[2.25rem] text-center font-bold leading-snug md:leading-[1.3] pb-12 md:pb-16">
        Q&A
      </h1>

      <div className="flex flex-col mb-12 md:flex-row items-center gap-10 md:gap-6 w-full max-w-6xl">
        <div className="w-full md:w-150 flex justify-center mb-10 md:mb-0">
          <img
            src="/categories/banner_1.svg"
            alt="banner_1"
            className="w-62.5 sm:w-100 md:w-150 object-contain"
          />
        </div>

        <div className="flex flex-col gap-2 items-center">
          {accordions.map((acc, index) => (
            <Accordion
              key={index}
              title={acc.title}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QA;
