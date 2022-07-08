import React from "react";
import { Link } from "react-router-dom";

const AdminProjectCard = ({ project, onDelete }) => {
  return (
    <div className="px-3 w-56">
      <div className="group relative">
        <div className="min-h-64 h-64 w-56 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden transition group-hover:opacity-95 lg:h-64 lg:aspect-none">
          <img
            src={project?.first_media_only?.original_url}
            alt={project?.first_media_only?.name}
            draggable={false}
            className="w-full h-full drag object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between w-56">
          <div>
            <h3 className="text-base font-medium text-gray-700">
              <Link to={`/admin/projects/${project.id}`}>
                <span
                  aria-hidden="true"
                  draggable={false}
                  className="absolute inset-0"
                />
                {project.en_name}
              </Link>
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              {project?.en_country}, {project?.en_city}, {project?.en_address}
            </p>
          </div>
        </div>
      </div>
      <button
        className="w-full py-1 bg-error text-white mx-auto rounded-md my-2"
        onClick={() => onDelete(project?.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default AdminProjectCard;
