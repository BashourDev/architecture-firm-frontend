import React from "react";
import FloatingBorder from "../FloatingBorder";

const ExecutiveSummary = () => {
  return (
    <div className="relative flex max-w-6xl w-full h-full shadow-md">
      <FloatingBorder />
      <div className="bg-dark-blue min-w-[25%]"></div>
      <div className="bg-white py-10 pl-28 pr-10 space-y-8 ">
        <h1 className="w-full text-center text-dark-blue font font-medium text-2xl uppercase">
          executive summary
        </h1>
        <p className="text-dark/90">
          A.I.M Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Possimus delectus laudantium, dolorum rem dolor sit dolores inventore
          cumque excepturi neque aut sapiente? Possimus consectetur pariatur
          animi nesciunt, aliquid asperiores placeat.
        </p>
        <p className="text-dark/90">
          A.I.M Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Possimus delectus laudantium, dolorum rem dolor sit dolores inventore
          cumque excepturi neque aut sapiente? Possimus consectetur pariatur
          animi nesciunt, aliquid asperiores placeat.
        </p>
        <p className="text-dark/90">
          To list a few of A.I.M Lorem, ipsum dolor sit amet consectetur
          <br />
          adipisicing elit. Possimus delectus laudantium, <br />
          dolorum rem dolor sit dolores inventore cumque excepturi <br /> neque
          aut sapiente? Possimus consectetur pariatur animi
          <br /> nesciunt, aliquid asperiores placeat.
        </p>
        <p className="text-dark/90">
          To list a few of A.I.M Lorem, ipsum dolor sit amet consectetur
          <br />
          adipisicing elit. Possimus delectus laudantium, <br />
          dolorum rem dolor sit dolores inventore cumque excepturi <br /> neque
          aut sapiente? Possimus consectetur pariatur animi
          <br /> nesciunt, aliquid asperiores placeat.
        </p>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
