import React from "react";
import Hexagon from "./Hexagon";

const SectionItem = ({ number, title, description }) => {
  return (
    <div className="flex space-x-1 md:space-x-5 py-10 px-2 md:px-10 border border-dark/50">
      <Hexagon text={number} color="#986f25" />
      <div className="flex flex-col space-y-1">
        <h1 className="text-white font-medium text-xl">{title}</h1>
        <p className="text-light text-sm">{description}</p>
      </div>
    </div>
  );
};

export default SectionItem;
