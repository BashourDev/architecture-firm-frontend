import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const EmployeeCard = ({ employee, onEdit, onDelete }) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-md ring-1 ring-dark/60">
      <div className="flex p-1">
        <div>
          <img
            src={employee?.first_media_only?.original_url}
            alt={"employee prfile"}
            className="max-h-[5rem] max-w-[5rem] w-full avatar mask mask-squircle"
          />
        </div>
        <div className="w-full px-3 ">
          <h2 className="text-lg text-dark-blue font-medium">
            {employee?.name}
          </h2>
          <span className="text-dark">{employee?.role}</span>
        </div>
      </div>
      <div className="divider my-0" />
      <div className="flex items-center justify-evenly py-2">
        <button
          className="flex items-center justify-center text-dark"
          onClick={() => onEdit(employee?.id)}
        >
          <MdEdit className="text-warning text-xl" />
          Edit
        </button>
        <button
          className="flex items-center justify-center text-dark"
          onClick={() => onDelete(employee?.id)}
        >
          <MdDelete className="text-error text-xl" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
