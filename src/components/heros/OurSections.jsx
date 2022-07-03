import React from "react";
import ProjectsCarousel from "../ProjectsCarousel";
import SectionItem from "../SectionItem";

const OurSections = () => {
  return (
    <div className="w-full bg-dark-blue flex flex-col items-center pb-20">
      <div className="w-full relative min-h-[30rem] max-w-7xl">
        <div className="w-full absolute -top-1/4 md:-top-1/3 lg:-top-1/2">
          <ProjectsCarousel
            title={"Our Projects"}
            subtitle={"Chech Out Our Projects"}
          />
        </div>
        <div className="pt-64 grid grid-cols-1 md:grid-cols-2">
          <SectionItem
            number={"01"}
            title="Architecture"
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aspernatur eveniet quae necessitatibus nesciunt, voluptate, tempo readipisci ab magnam laboriosam quis cupiditate harum non porro illo quod ipsam eligendi dignissimos?"
            }
          />
          <SectionItem
            number={"02"}
            title="Interiors"
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aspernatur eveniet quae necessitatibus nesciunt, voluptate, tempo readipisci ab magnam laboriosam quis cupiditate harum non porro illo quod ipsam eligendi dignissimos?"
            }
          />
          <SectionItem
            number={"03"}
            title="Structural Design"
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aspernatur eveniet quae necessitatibus nesciunt, voluptate, tempo readipisci ab magnam laboriosam quis cupiditate harum non porro illo quod ipsam eligendi dignissimos?"
            }
          />
          <SectionItem
            number={"04"}
            title="Planning"
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aspernatur eveniet quae necessitatibus nesciunt, voluptate, tempo readipisci ab magnam laboriosam quis cupiditate harum non porro illo quod ipsam eligendi dignissimos?"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default OurSections;
