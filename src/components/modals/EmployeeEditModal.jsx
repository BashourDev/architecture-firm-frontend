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

const EmployeeAddModal = ({ isOpen, onClose, setEmployees, eid }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    name: "",
    role: "",
    is_on_landing: false,
  });

  const handleEdit = async (values) => {
    let formData = new FormData();
    formData.append("profile_pic", selectedImage);
    formData.append("name", values?.name);
    formData.append("role", values?.role);
    formData.append("is_on_landing", values?.is_on_landing ? 1 : 0);
    formData.append("update_media", selectedImage ? 1 : 0);

    try {
      setIsLoading(true);
      const res = await api.post(`/employees/${eid}/update`, formData);
      console.log("====================================");
      console.log(res);
      console.log("====================================");
      setEmployees((old) =>
        old.map((e) => {
          if (e?.id === eid) {
            e.name = res.data?.name;
            e.role = res.data?.role;
            e.first_media_only = res.data?.first_media_only;
          }
          return e;
        })
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getEmployee = async () => {
    try {
      const res = await api.get(`/employees/${eid}`);
      setInitialValues(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    setSelectedImage("");
    if (eid !== 0) {
      getEmployee();
    }
  }, [isOpen]);

  return (
    <AppModal isOpen={isOpen} onClose={onClose} title={"Add Employee"}>
      <div className="space-y-3">
        <div className="flex gap-x-2 justify-center py-2">
          <div className="text-dark">
            <AppProfilePictureInput
              selectedFile={selectedImage}
              existingImage={initialValues?.first_media_only?.original_url}
              onChange={(e) => setSelectedImage(e.target.files[0])}
            />
          </div>
        </div>
        <AppForm
          initialValues={initialValues}
          validationSchema={Yup.object().shape({
            name: Yup.string().required().label("Name"),
            role: Yup.string().required().label("Role"),
          })}
          onSubmit={handleEdit}
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

          <AppSubmitButton isLoading={isLoading}>Edit</AppSubmitButton>
        </AppForm>
      </div>
    </AppModal>
  );
};

export default EmployeeAddModal;
