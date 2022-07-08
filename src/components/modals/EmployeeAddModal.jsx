import React, { useEffect, useState } from "react";
import AppForm from "../forms/AppForm";
import AppFormTextArea from "../forms/AppFormTextArea";
import * as Yup from "yup";
import AppSubmitButton from "../forms/AppSubmitButton";
import AppModal from "./AppModal";
import AppProfilePictureInput from "../AppProfilePictureInput";
import AppInput from "../forms/AppInput";
import api from "../../api/api";
import AppFormSwitch from "../forms/AppFormSwitch";

const EmployeeAddModal = ({ isOpen, onClose, setEmployees }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = async (values) => {
    let formData = new FormData();
    formData.append("profile_pic", selectedImage);
    formData.append("name", values?.name);
    formData.append("role", values?.role);
    formData.append("is_on_landing", values?.is_on_landing ? 1 : 0);

    try {
      setIsLoading(true);
      const res = await api.post("/employees/create", formData);
      setEmployees((old) => [...old, res.data]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setSelectedImage("");
  }, [isOpen]);

  return (
    <AppModal isOpen={isOpen} onClose={onClose} title={"Add Employee"}>
      <div className="space-y-3">
        <div className="flex gap-x-2 justify-center py-2">
          <div className="text-dark">
            <AppProfilePictureInput
              selectedFile={selectedImage}
              onChange={(e) => setSelectedImage(e.target.files[0])}
            />
          </div>
        </div>
        <AppForm
          initialValues={{ name: "", role: "", is_on_landing: false }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required().label("Name"),
            role: Yup.string().required().label("Role"),
          })}
          onSubmit={handleCreate}
        >
          <AppInput
            id={"name"}
            label={"Name"}
            placeholder={"Enter the employee name"}
          />
          <AppInput
            id={"role"}
            label={"Role"}
            placeholder={"Enter the employee's Role"}
          />
          <AppFormSwitch name={"is_on_landing"} text={"Show on landing page"} />

          <AppSubmitButton isLoading={isLoading}>Create</AppSubmitButton>
        </AppForm>
      </div>
    </AppModal>
  );
};

export default EmployeeAddModal;
