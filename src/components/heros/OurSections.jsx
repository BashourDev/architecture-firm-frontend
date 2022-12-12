import React from "react";
import { useTranslation } from "react-i18next";
import ProjectsCarousel from "../ProjectsCarousel";
import SectionItem from "../SectionItem";

const OurSections = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-dark-blue flex flex-col items-center py-20">
      <div className="w-full relative min-h-[30rem] max-w-7xl">
        <div className="w-full absolute -top-1/4 md:-top-1/3 lg:-top-1/2">
          <ProjectsCarousel
            title={t("our_projects_title")}
            subtitle={t("our_projects_subtitle")}
          />
        </div>
        <div className="pt-64 grid grid-cols-1 md:grid-cols-2">
          <SectionItem
            number={"01"}
            title={t("architecture")}
            description={t("architecture_description")}
          />
          <SectionItem
            number={"02"}
            title={t("interiors")}
            description={t("interiors_description")}
          />
          <SectionItem
            number={"03"}
            title={t("structural_design")}
            description={t("structural_design_description")}
          />
          <SectionItem
            number={"04"}
            title={t("planning")}
            description={t("planning_description")}
          />
        </div>
      </div>
    </div>
  );
};

export default OurSections;
