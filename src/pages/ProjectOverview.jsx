import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import api from "../api/api";
import Header from "../components/Header";
import Loading from "../components/Loading";
import OtherProjectsCarousel from "../components/OtherProjectsCarousel";
import ProjectsCarousel from "../components/ProjectsCarousel";

const ProjectOverview = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [otherProjects, setOtherProjects] = useState([]);

  const getProject = async () => {
    try {
      setIsLoading(true);
      const res = await api.get(`/projects/${id}`);
      setProject(res.data);
      setSelectedImage(res.data?.media[0]?.original_url);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const getOtherProjects = async () => {
    const res = await api.get(`/projects/other/${id}`);
    setOtherProjects(res.data);
  };

  useEffect(() => {
    getProject();
    getOtherProjects();
  }, [id]);

  return (
    <>
      <div className="w-full h-full bg-building bg-[#001724] bg-blend-overlay bg-no-repeat">
        <Header />
      </div>
      <section className="text-gray-700 body-font overflow-hidden bg-white pb-10">
        <div className="container px-5 py-10 md:py-24 mx-auto">
          {isLoading && <Loading />}
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
            <div className="space-y-2 h-full">
              <img
                alt="project"
                className="max-h-[24rem] mx-auto max-w-sm xl:max-w-md 2xl:max-w-lg object-contain object-center rounded border border-gray-200"
                src={selectedImage}
              />
              <div className="flex space-y-3 justify-center md:justify-start items-center max-w-sm xl:max-w-md 2xl:max-w-lg flex-wrap h-fit">
                {project?.media?.map((media, i) => (
                  <img
                    key={i}
                    src={media?.original_url}
                    alt=""
                    onClick={() => setSelectedImage(media?.original_url)}
                    className={`w-[5.2rem] h-24 mx-2 object-cover object-center rounded border border-gray-200 cursor-pointer hover:opacity-95 ${
                      selectedImage === media?.original_url
                        ? "ring-4 ring-primaryDark/60"
                        : ""
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:px-10 lg:py-6 mt-6 lg:mt-0 space-y-3">
              {/* <h2 className="text-sm title-font text-dark-gold tracking-widest">
                {project?.type === 1
                  ? t("ln") === "en"
                    ? "Modren"
                    : "عصري"
                  : t("ln") === "en"
                  ? "Classic"
                  : "كلاسيكي"}
              </h2> */}
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {t("ln") === "en" ? project?.en_name : project?.ar_name}
              </h1>

              <p className="leading-relaxed">
                {t("ln") === "en"
                  ? project?.en_description
                  : project?.ar_description}
              </p>
              <div className="flex justify-between border-t border-gray-200 py-2">
                <span className="text-gray-500">{t("location")}</span>
                <span className="text-gray-900">
                  {t("ln") === "en" ? project?.en_country : project?.ar_country}
                  , {t("ln") === "en" ? project?.en_city : project?.ar_city},{" "}
                  {t("ln") === "en" ? project?.en_address : project?.ar_address}
                </span>
              </div>
              <div className="flex justify-between border-t border-gray-200 py-2">
                <span className="text-gray-500">{t("completed")}</span>
                <span className="text-gray-900">
                  {project?.is_completed ? t("yes") : t("no")}
                </span>
              </div>
              <div className="flex justify-between border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">{t("completed_in")}</span>
                <span className="text-gray-900">
                  {project?.completion_date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full max-w-7xl mx-auto pb-10">
        <OtherProjectsCarousel
          title={"Projects"}
          subtitle={t("other_projects_subtitle")}
          projects={otherProjects}
        />
      </div>
    </>
  );
};

export default ProjectOverview;
