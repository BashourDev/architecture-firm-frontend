import React from "react";
import structure from "../assets/images/apartment-structure.jpg";

const WelcomeHexagon = () => {
  return (
    <div className="hexagon absolute border-dark-blue rounded-full p-3">
      <img
        src={structure}
        alt={"structure"}
        className={
          "w-full h-full bg-contain border-4 border-light-gold overflow-hidden"
        }
      />
    </div>
  );
};

export default WelcomeHexagon;
