import React from "react";
import execsum from "../../assets/images/exec-sum-structure.jfif";
import execsumeng from "../../assets/images/exec-sum-eng.png";
import execsumbuilding from "../../assets/images/exec-sum-building.jpg";
import { useTranslation } from "react-i18next";

const ExecutiveSummary2 = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-full flex flex-col md:flex-row max-w-7xl self-center bg-white overflow-hidden">
      <div className="w-2/6 bg-gradient-to-r from-dark-blue/95 via-dark-blue to-dark-blue relative">
        <img
          src={execsum}
          alt="executive summary"
          className={`h-[26rem] md:shadow-md md:shadow-dark-blue absolute ${t(
            "executive_summary_image_pos"
          )} top-8 opacity-25 md:opacity-100`}
        />
      </div>
      <div className="relative w-[14%]">
        <img
          src={execsumbuilding}
          alt="building"
          className="h-fit w-44 md:absolute bottom-0"
        />
      </div>
      <div className="w-full px-2 md:px-10 py-5 space-y-5 text-dark relative">
        <div>
          <h2 className="text-dark-gold text-base font-medium">
            {t("about_us")}
          </h2>
          <h1 className="text-dark-blue text-3xl">{t("executive_summary")}</h1>
        </div>
        <p>{t("executive_summary_first")}</p>
        <p>{t("executive_summary_second")}</p>
        <p>{t("executive_summary_third")}</p>
        <div className="flex">
          <div className="">
            <p>
              {/* {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam
              deserunt unde ullam cumque voluptatum quos, soluta consequuntur.
              Dignissimos eaque amet tempore maiores at beatae eos obcaecati
              illo repellat assumenda. */}
            </p>
            <p className="py-5">
              {" "}
              <p>{t("executive_summary_fourth")}</p>
            </p>
            <p className="py-5">
              {" "}
              <p>{t("executive_summary_fifth")}</p>
            </p>
          </div>
          <img
            src={execsumeng}
            alt="engineer"
            className="w-full h-fit absolute md:static opacity-25 md:opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary2;
