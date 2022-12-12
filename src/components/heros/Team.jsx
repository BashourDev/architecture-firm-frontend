import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import api from "../../api/api";

const Team = () => {
  const { t } = useTranslation();
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    try {
      const res = await api.get("/employees/landing");
      setEmployees(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <section className="relative py-20 overflow-hidden bg-white w-full">
      <span className="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
        <span className="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50"></span>
      </span>

      <span className="absolute bottom-0 left-0"> </span>

      <div className="relative px-3 md:px-16 mx-auto max-w-7xl">
        <p className="font-medium tracking-wide text-dark-gold uppercase">
          {t("our_team")}{" "}
          <Link to={"/team"} className="text-dark-blue">
            {t("show_all")}
          </Link>
        </p>
        <h2 className="relative max-w-lg mt-5 mb-10 text-3xl font-semibold leading-tight lg:text-4xl text-dark-blue">
          {t("a_team_of")} <br />
          {t("amazing_individuals")}
        </h2>
        <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
          {employees.map((e) => (
            <div className="flex flex-col items-center justify-center col-span-1">
              <div className="relative p-5">
                <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
                <img
                  className="relative z-20 w-full rounded-full"
                  src={e?.first_media_only?.original_url}
                />
              </div>
              <div className="mt-3 space-y-2 text-center">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3>{e?.name}</h3>
                  <p className="text-dark-gold">{e?.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
