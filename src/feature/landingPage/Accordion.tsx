import { ChevronDown, ChevronLeft } from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, isOpen, onClick }) => {
  return (
    <div
      className={`rounded-md border border-grey-200 bg-grey-400 w-[90%] md:w-150 h-auto py-4 flex flex-col justify-center items-center px-8 
        ${isOpen ? "md: h-44" : "md: h-18"}
        
    `}
    >
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full"
      >
        <h3 className={`text-black-800 text-5 font-medium ${isOpen ? "font-semibold" : ""}`}> {title} </h3>
        <motion.div
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <ChevronDown size={18} className="text-black-800" />
          ) : (
            <ChevronLeft size={18} />
          )}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-[.875rem] text-black-800 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Wsed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
