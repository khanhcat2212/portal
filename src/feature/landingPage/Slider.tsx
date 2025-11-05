'use client'

import { Customer } from "@src/interfaces/customer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CustomerCard from "@src/components/card/CustomerCard";
import useIsMd from "@src/hooks/useIsMd";

interface SliderProps {
  customers: Customer[];
  autoPlayInterval: number
}

const Slider: React.FC<SliderProps> = ({ customers, autoPlayInterval }) => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const isMd = useIsMd()

  const visibleCount = isMd ? 2 : 1;

  const total = customers.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  const getVisibleCustomers = () => {
    const arr = [];
    for (let i = 0; i < visibleCount; i++) {
      arr.push(customers[(index + i) % total]);
    }
    return arr;
  };

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, autoPlayInterval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlayInterval, total])

  return (
    <div className="w-full px-8 md:px-16">
      <div className="relative mx-auto flex items-center justify-center">
        <button
          onClick={prev}
          className="absolute opacity-0 md:opacity-100 left-0 top-1/2 -translate-y-1/2 text-white/70 hover:text-white cursor-pointer z-10"
        >
          <ChevronLeft size={48} />
        </button>

        {/* Viewport */}
        <div className="overflow-hidden max-w-6xl px-6">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="flex gap-8 justify-center"
          >
            {getVisibleCustomers().map((item, i) => (
              <CustomerCard key={i} logo={item.logo} />
            ))}
          </motion.div>
        </div>

        <button
          onClick={next}
          className="absolute opacity-0 md:opacity-100 right-0 top-1/2 -translate-y-1/2 text-white/70 hover:text-white cursor-pointer z-10"
        >
          <ChevronRight size={48} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-12 mb-8 gap-3">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              index === i ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
