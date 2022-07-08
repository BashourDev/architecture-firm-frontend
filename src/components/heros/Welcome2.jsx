import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Welcome2 = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full px-6 pb-12 antialiased">
      <div className="mx-auto max-w-7xl">
        <div className="container max-w-lg px-4 py-32 mx-auto mt-px text-left md:max-w-none md:text-center">
          <h1 className="text-3xl font-extrabold leading-10 tracking-tight text-left text-gray-200 md:text-center sm:leading-none md:text-5xl lg:text-6xl">
            <span className="inline md:block">
              {t("we_dont_design_spaces")}
            </span>{" "}
            <span className="relative mt-2 pb-1 text-transparent bg-clip-text bg-gradient-to-br from-dark-gold to-light-gold md:inline-block">
              {t("we_think_about")} <br /> {t("a_new_way_of_living")}
            </span>
          </h1>
          <div className="mx-auto mt-5 text-gray-300 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
            {t("executive_summary_first")}
          </div>
          <div className="flex flex-col items-center mt-12 text-center">
            <span className="relative inline-flex w-full md:w-auto">
              <HashLink
                to={"/#contact-us"}
                className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-gradient-to-tr from-dark-gold to-light-gold border border-transparent rounded-full md:w-auto hover:opacity-95 focus:outline-none"
              >
                {t("contact_us")}
              </HashLink>
            </span>
            {/* <Link to={"/faq"} className="mt-3 text-sm text-light">
              {t("learn_more")}
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome2;
