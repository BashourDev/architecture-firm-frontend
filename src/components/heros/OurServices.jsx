import React from "react";
import ServiceItem from "../ServiceItem";
import cloudArrow from "../../assets/images/cloud-arrow.jpg";

const OurServices = () => {
  return (
    <div className="relative flex flex-col items-center justify-center max-w-7xl w-full px-2 md:px-20 py-10 bg-white rounded ring ring-light-gold/70">
      <h1 className="text-3xl font-medium text-dark-blue z-10">
        Our Best Services
      </h1>
      <div className="flex flex-wrap gap-5 py-10 justify-center w-full relative z-10">
        <ServiceItem
          number={"01"}
          text={"Architectural Design And Construction Administration"}
        />
        <ServiceItem number={"02"} text={"Structural Design"} />
        <ServiceItem number={"03"} text={"Life Safety Planning"} />
        <ServiceItem number={"04"} text={"Exterior Design"} />
        <ServiceItem number={"05"} text={"Space Planning"} />
        <ServiceItem number={"06"} text={"Project Management"} />
        <ServiceItem
          number={"07"}
          text={"Interior Design And Furniture/Artwork Selection"}
        />
        <ServiceItem number={"08"} text={"Pre-Design Consulting"} />
        <ServiceItem number={"09"} text={"Sustainable Design Evaluation"} />
        <ServiceItem number={"10"} text={"Budget Management"} />
        <ServiceItem number={"11"} text={"Contractor Selection"} />
        <ServiceItem number={"12"} text={"Post Occupancy Survey"} />
        <ServiceItem number={"13"} text={"Facility Masterplanning"} />
        <ServiceItem number={"14"} text={"Graphic Design"} />
        <ServiceItem number={"15"} text={"Landscape Design"} />
        <ServiceItem number={"16"} text={"Supervision"} />
      </div>
      <img src={cloudArrow} alt={"cloud"} className="absolute opacity-20" />
    </div>
  );
};

export default OurServices;
