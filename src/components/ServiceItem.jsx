import React from "react";
import Hexagon from "./Hexagon";

const ServiceItem = ({ text, number }) => {
  return (
    <div className="flex items-center w-full lg:w-[48%]">
      <Hexagon text={number} color={"#002337"} />
      <span className="text-xl text-dark-blue">{text}</span>
    </div>
  );
};

export default ServiceItem;
