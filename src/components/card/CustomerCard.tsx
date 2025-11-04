import React from "react";

interface CustomerCardProps {
  logo: string;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ logo }) => {
  return (
    <div className="flex flex-col w-135 h-63 rounded-2xl bg-grey-300 px-12 justify-center items-center space-y-6">
      <img src={logo} alt="logo" className="w-28 h-9 object-cover justify-center" />

      <p className="text-[16px] text-grey-900 text-center leading-5 mt-2">
        Est tation latine aliquip id, mea ad tale illud definitiones. Periculis
        omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne,
        usu cu stet.
      </p>

      <p className="text-[16px] text-grey-900 text-center">Connie Robertson</p>
    </div>
  );
};

export default CustomerCard;
