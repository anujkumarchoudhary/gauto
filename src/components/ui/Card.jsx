import Image from "next/image";
import React from "react";

export const Card = ({ image, label, name, description }) => {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <Image src={image} width={60} height={60} />
        <p className="text-2xl">{label}</p>
      </div>
      <p className="text-xl font-bold pt-4 pb-3">{name}</p>
      <p>{description}</p>
    </div>
  );
};

export default Card;
