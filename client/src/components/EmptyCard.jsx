import React from "react";
import { PiNotePencilFill } from "react-icons/pi";

const EmptyCard = ({ message }) => {
  return (
    <div className="mt-36 flex flex-col items-center justify-center">
      <PiNotePencilFill size={80} />
      <p className="w-1/2 text-sm md:text-lg text-gray-700 text-center leading-8 mt-5">
        {message}
      </p>
    </div>
  );
};

export default EmptyCard;
