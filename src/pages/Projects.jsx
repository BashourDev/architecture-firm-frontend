import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import api from "../api/api";
import AdminProjectCard from "../components/AdminProjectCard";
import Loading from "../components/Loading";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProjects = async () => {
    try {
      setIsLoading(true);
      const res = await api.get("/projects");
      setProjects(res.data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this project!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          await api.delete(`/projects/${id}/delete`);
          setProjects((old) => old.filter((p) => p?.id !== id));
        } catch (error) {
          toast.error("Something went wrong!");
        }
        swal("Poof! The project has been deleted!", {
          icon: "success",
        });
      } else {
        swal("The project is safe!");
      }
    });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="mx-auto py-10 w-full max-w-7xl">
      <div className="w-full flex items-center justify-end px-5">
        <Link
          className="py-2 px-4 bg-dark-blue rounded-md text-white"
          to={"/admin/projects/create"}
        >
          Add Project
        </Link>
      </div>
      {isLoading && <Loading />}
      <div className="py-10 w-full flex justify-center md:justify-start flex-wrap gap-5 md:gap-10">
        {projects.map((project) => (
          <AdminProjectCard
            key={project?.id}
            project={project}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
