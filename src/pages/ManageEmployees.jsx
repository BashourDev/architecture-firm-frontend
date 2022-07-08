import React, { useEffect, useState } from "react";
import EmployeeCard from "../components/EmployeeCard";
import swal from "sweetalert";
import EmployeeAddModal from "../components/modals/EmployeeAddModal";
import EmployeeEditModal from "../components/modals/EmployeeEditModal";
import api from "../api/api";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

const ManageEmployees = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(0);

  const getEmployees = async () => {
    try {
      setIsLoading(true);
      const res = await api.get("/employees");
      setEmployees(res.data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this employee!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          await api.delete(`/employees/${id}/delete`);
          setEmployees((old) => old.filter((e) => e?.id !== id));
        } catch (error) {
          toast.error("Something went wrong!");
        }
        swal("Poof! The employee has been deleted!", {
          icon: "success",
        });
      } else {
        swal("The employee is safe!");
      }
    });
  };

  const handleEdit = (eid) => {
    setSelectedEmployee(eid);
    setIsEditOpen(true);
  };

  return (
    <div className="py-10 max-w-6xl w-full mx-auto">
      <div className="w-full flex items-center justify-end px-5">
        <button
          className="py-2 px-4 bg-dark-blue rounded-md text-white"
          onClick={() => setIsAddOpen(true)}
        >
          Add Employee
        </button>
      </div>
      {isLoading && <Loading />}
      <div className="flex flex-wrap gap-5 px-3 py-10 w-full">
        {employees.map((emp) => (
          <EmployeeCard
            key={emp?.id}
            employee={emp}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <EmployeeAddModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        setEmployees={setEmployees}
      />
      <EmployeeEditModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        eid={selectedEmployee}
        setEmployees={setEmployees}
      />
    </div>
  );
};

export default ManageEmployees;
