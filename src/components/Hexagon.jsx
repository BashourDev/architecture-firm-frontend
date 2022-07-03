import React from "react";

const Hexagon = ({ text, color, className }) => {
  return (
    <div
      className={`flex items-center justify-center relative text-2xl h-fit ${className}`}
    >
      <svg
        width="50px"
        height="50px"
        viewBox="0 0 256 256"
        id="Flat"
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
      >
        <path d="M228,80.668V175.332a16.0255,16.0255,0,0,1-8.12695,13.9292l-84,47.47852a16.08782,16.08782,0,0,1-15.7461,0l-84-47.478A16.02688,16.02688,0,0,1,28,175.332V80.668a16.0255,16.0255,0,0,1,8.127-13.9292l84-47.47852a16.08654,16.08654,0,0,1,15.7461,0l84,47.478A16.02688,16.02688,0,0,1,228,80.668Z" />
      </svg>
      <span fill="white" className="absolute text-sm text-white">
        {text}
      </span>
    </div>
  );
};

export default Hexagon;
