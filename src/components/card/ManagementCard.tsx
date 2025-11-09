import Image from "next/image";
import React from "react";

interface ManagementCardProps {
  image: string;
  title: string;
  description: string;
}

const ManagementCard: React.FC<ManagementCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="h-33.5 w-63.75 hover:scale-[1.1] transition-transform duration-300 ease-in-out cursor-pointer">
        <Image
          src={image}
          alt={title}
          width={48}
          height={48}
          className="w-12 h-12 object-cover mb-2"
        />

        <h3 className="text-[1.125rem] font-semibold mb-0">{title}</h3>

        <p className="text-[1.125rem] text-grey-800 leading-tight">{description}</p>
    </div>
  );
};

export default ManagementCard;
