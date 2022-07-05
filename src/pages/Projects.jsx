import React, { useState } from "react";
import AdminProjectCard from "../components/AdminProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Greate Project",
      country: "Syria",
      city: "Homs",
      address: "Main Street",
      first_media_only: {
        name: "blah",
        original_url:
          "https://i.pinimg.com/originals/82/04/c1/8204c1140a1d524dc471d33cbef8c590.jpg",
      },
    },
  ]);
  return (
    <div className="mx-auto py-10 w-full max-w-7xl flex flex-wrap">
      {projects.map((project) => (
        <AdminProjectCard key={project?.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
