import React from "react";
import { useTranslation } from "react-i18next";
import building from "../../assets/images/ins-simp-building.jpg";
import insp from "../../assets/images/ins-simp2.jpg";

const InspireSimpify = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl relative rounded-md overflow-hidden ring-4 ring-light-gold">
      <div className="flex flex-col items-center w-full md:w-1/2 py-10 px-5 md:px-16 bg-[#d1d2d4] text-dark-blue h-full space-y-20">
        <img
          src={building}
          alt="building"
          className="w-full h-1/2 rounded-md"
        />

        <div className="space-y-4">
          <h2 className="text-2xl">{t("simplify")}</h2>
          <p className="text-lg">{t("simplify_description")}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center w-full md:w-1/2 text-white bg-dark-blue h-full">
        <div className="px-5 md:px-16 space-y-4 flex flex-col justify-center min-h-[50%] py-5">
          <h2 className="text-2xl">{t("inspire")}</h2>
          <p className="text-lg">{t("inspire_description")}</p>
        </div>
        <img
          src={insp}
          alt="inspire"
          className="w-full h-1/2 justify-self-end"
        />
      </div>
    </div>
  );
};

export default InspireSimpify;
