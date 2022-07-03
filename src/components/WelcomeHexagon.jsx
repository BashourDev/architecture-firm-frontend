import React from "react";
import { ReactComponent as Hexagon } from "../assets/svg/hexagon.svg";
import structure from "../assets/images/apartment-structure.jpg";

const WelcomeHexagon = () => {
  return (
    <div className="hexagon absolute border-dark-blue rounded-full">
      <img
        src={structure}
        alt={"structure"}
        className={"w-full h-full bg-contain"}
      />
    </div>
  );
};

export default WelcomeHexagon;
