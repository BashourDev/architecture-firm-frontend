import React from "react";
import ServiceItem from "../ServiceItem";
import cloudArrow from "../../assets/images/cloud-arrow.jpg";
import { useTranslation } from "react-i18next";

const OurServices = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col items-center justify-center max-w-7xl w-full px-2 md:px-20 py-10 bg-white rounded ring ring-light-gold/70">
      <h1 className="text-3xl font-medium text-dark-blue z-10">
        Our Best Services
      </h1>
      <div className="flex flex-wrap gap-5 py-10 justify-center w-full relative z-10">
        <ServiceItem
          number={"01"}
          text={t("architectural_design_and_construction_administration")}
        />
        <ServiceItem number={"02"} text={t("structural_design")} />
        <ServiceItem number={"03"} text={t("sife_safety_planning")} />
        <ServiceItem number={"04"} text={t("exterior_design")} />
        <ServiceItem number={"05"} text={t("space_planning")} />
        <ServiceItem number={"06"} text={t("project_management")} />
        <ServiceItem
          number={"07"}
          text={t("interior_design_and_furniture_artwork_selection")}
        />
        <ServiceItem number={"08"} text={t("pre_design_consulting")} />
        <ServiceItem number={"09"} text={t("sustainable_design_evaluation")} />
        <ServiceItem number={"10"} text={t("budget_management")} />
        <ServiceItem number={"11"} text={t("contractor_selection")} />
        <ServiceItem number={"12"} text={t("post_occupancy_survey")} />
        <ServiceItem number={"13"} text={t("facility_masterplanning")} />
        <ServiceItem number={"14"} text={t("graphic_design")} />
        <ServiceItem number={"15"} text={t("landscape_design")} />
        <ServiceItem number={"16"} text={t("supervision")} />
      </div>
      <img src={cloudArrow} alt={"cloud"} className="absolute opacity-20" />
    </div>
  );
};

export default OurServices;
