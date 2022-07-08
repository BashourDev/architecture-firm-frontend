import React from "react";
import createCommTable from "../../assets/images/create-comm-table.jpg";
import hex from "../../assets/images/comm-hex.png";
import roomWindow from "../../assets/images/create-comm-win.png";
import { useTranslation } from "react-i18next";

const CreateCommunity = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-full flex flex-col md:flex-row max-w-7xl self-center bg-white">
      <div className="w-2/6 bg-gradient-to-r from-dark-blue/95 via-dark-blue to-dark-blue relative">
        <img
          src={hex}
          alt="executive summary"
          className={`w-full absolute ${t(
            "create_community_image_pos"
          )} top-12 opacity-25 md:opacity-100`}
        />
      </div>
      {/* <div className="relative w-[14%]">
        <img
          src={}
          alt="building"
          className="h-fit w-44 md:absolute bottom-0"
        />
      </div> */}
      <div className="w-full px-3 md:px-20 py-5 space-y-5 text-dark relative">
        <div className="flex justify-center md:justify-end h-44">
          <img src={roomWindow} alt="windows" />
        </div>
        <div>
          {/* <h2 className="text-dark-gold text-base font-medium">About Us</h2> */}
          <h1 className="text-dark-blue text-3xl">{t("create_community")}</h1>
        </div>
        <p className="text-lg max-w-xl"> {t("create_community_section")}</p>
        <div className="flex justify-center md:justify-end">
          <img
            src={createCommTable}
            alt="table"
            className=" h-44 md:opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateCommunity;
