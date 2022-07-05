import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";
import OtherProjectsCarousel from "../components/OtherProjectsCarousel";
import ProjectsCarousel from "../components/ProjectsCarousel";

const ProjectOverview = () => {
  const { id } = useParams();
  const [project, setProject] = useState({
    name: "Greate Project",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quos exercitationem, eligendi voluptate at eveniet aliquid, blanditiis soluta illo fugit accusamus esse labore aspernatur culpa nemo cupiditate repellat dicta autem.",
    media: [
      {
        id: 1,
        original_url:
          "https://i.pinimg.com/originals/82/04/c1/8204c1140a1d524dc471d33cbef8c590.jpg",
      },
      {
        id: 2,
        original_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9irJPE-brdC986Mk_wY-jRJB6qmlSevh8_w&usqp=CAU",
      },
    ],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    project.media[0].original_url
  );

  return (
    <>
      <div className="w-full h-full bg-building bg-[#001724] bg-blend-overlay bg-no-repeat">
        <Header />
      </div>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          {isLoading && <Loading />}
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
            <div className="space-y-2">
              <img
                alt="project"
                className="h-[26rem] max-w-sm xl:max-w-md 2xl:max-w-lg object-cover object-center rounded border border-gray-200"
                src={selectedImage}
              />
              <div className="flex space-x-3 items-center">
                {project?.media?.map((media, i) => (
                  <img
                    key={i}
                    src={media?.original_url}
                    alt=""
                    onClick={() => setSelectedImage(media?.original_url)}
                    className={`w-20 h-24 object-cover object-center rounded border border-gray-200 cursor-pointer hover:opacity-95 ${
                      selectedImage === media?.original_url
                        ? "ring-4 ring-primaryDark/60"
                        : ""
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 space-y-3">
              {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {project?.brand?.name}
            </h2> */}
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {project?.name}
              </h1>

              <p className="leading-relaxed">{project?.description}</p>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Location</span>
                <span className="ml-auto text-gray-900">Homs, Syria</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Completed</span>
                <span className="ml-auto text-gray-900">Yes</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Completed In</span>
                <span className="ml-auto text-gray-900">14 months</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full max-w-7xl mx-auto pb-10">
        <OtherProjectsCarousel
          title={"Projects"}
          subtitle={"Check Out Other Projects"}
        />
      </div>
    </>
  );
};

export default ProjectOverview;
