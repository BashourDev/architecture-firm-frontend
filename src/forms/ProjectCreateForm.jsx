import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import AppFileInput from "../components/AppFileInput";
import AppForm from "../components/forms/AppForm";
import AppFormSwitch from "../components/forms/AppFormSwitch";
import AppFormTextArea from "../components/forms/AppFormTextArea";
import AppInput from "../components/forms/AppInput";
import * as Yup from "yup";
import Header from "../components/Header";
import AppSubmitButton from "../components/forms/AppSubmitButton";
import AppCancelButton from "../components/AppCancelButton";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const ProjectCreateForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [photosURLs, setPhotosURLs] = useState([]);
  const [photos, setPhotos] = useState([]);

  const initialValues = {
    en_name: "",
    en_country: "",
    en_city: "",
    en_address: "",
    en_description: "",

    ar_name: "",
    ar_country: "",
    ar_city: "",
    ar_address: "",
    ar_description: "",

    is_completed: true,
    completion_date: "",
  };

  const onPhotosChange = (e) => {
    setPhotos((old) => [...old, ...e.target.files]);
    let array = [];
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i];
      array.push(URL.createObjectURL(file));
    }
    setPhotosURLs((old) => [...old, ...array]);
  };

  const removeImage = async (i) => {
    setPhotosURLs((old) => old.filter((_photo, j) => j !== i));
    setPhotos((old) => old.filter((photo, j) => old.indexOf(photo) !== i));
  };

  const handleCreate = async (values) => {
    try {
      setIsLoading(true);
      let formData = new FormData();

      for (let i = 0; i < photos.length; i++) {
        let file = photos[i];
        formData.append("photo" + i, file);
      }

      formData.append("photosCount", photos.length);

      formData.append("en_name", values?.en_name);
      formData.append("en_country", values?.en_country);
      formData.append("en_city", values?.en_city);
      formData.append("en_address", values?.en_address);
      formData.append("en_description", values?.en_description);

      formData.append("ar_name", values?.en_name);
      formData.append("ar_country", values?.en_country);
      formData.append("ar_city", values?.en_city);
      formData.append("ar_address", values?.en_address);
      formData.append("ar_description", values?.en_description);

      formData.append("is_completed", values?.is_completed ? 1 : 0);
      formData.append("completion_date", values?.completion_date);

      await api.post("/projects/create", formData);

      navigate("/admin/projects");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="space-y-5 mx-auto max-w-6xl w-full bg-white ring-1 ring-light-gold rounded-md px-3 py-8 md:p-10 my-10">
        <AppForm
          initialValues={initialValues}
          validationSchema={Yup.object().shape({})}
          onSubmit={handleCreate}
        >
          <div className="col-span-1 lg:col-span-2 space-y-2 lg:space-y-0 lg:space-x-2 flex flex-col lg:flex-row flex-start items-center">
            <AppFileInput
              id={"photos"}
              label={"Select Photos:"}
              containerClassName={"w-full lg:w-72"}
              onChange={onPhotosChange}
            />
            <div className="flex overflow-x-auto">
              {photosURLs.map((photo, i) => (
                <div
                  key={i}
                  className="relative mx-1 rounded-md overflow-hidden"
                >
                  <img
                    src={photo}
                    alt={"photos"}
                    className="max-w-xs h-28 object-cover"
                  />
                  <div className="absolute top-1 left-1 w-full h-full">
                    <MdDelete
                      className="text-danger text-2xl cursor-pointer"
                      onClick={() => removeImage(i)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5 ring-1 ring-light-gold rounded-md p-5">
            <h1 className="text-lg text-dark-blue pb-2">English Version</h1>
            <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-4">
              <AppInput
                id={"en_name"}
                label="Project Name:"
                placeholder={"Greate Project"}
              />
              <AppInput
                id={"en_country"}
                label="Country:"
                placeholder={"Syria"}
              />
            </div>
            <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-4">
              <AppInput id={"en_city"} label="City:" placeholder={"Homs"} />
              <AppInput
                id={"en_address"}
                label="Address:"
                placeholder={"Main Street"}
              />
            </div>
            <AppFormTextArea
              id={"en_description"}
              label="Description:"
              placeholder={"Something about the project"}
            />
          </div>
          <div className="space-y-5 ring-1 ring-light-gold rounded-md p-5">
            <h1 className="text-lg text-dark-blue pb-2">Arabic Version</h1>
            <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-4">
              <AppInput
                id={"ar_name"}
                label="Project Name:"
                placeholder={"Greate Project"}
              />
              <AppInput
                id={"ar_country"}
                label="Country:"
                placeholder={"Syria"}
              />
            </div>
            <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-4">
              <AppInput id={"ar_city"} label="City:" placeholder={"Homs"} />
              <AppInput
                id={"ar_address"}
                label="Address:"
                placeholder={"Main Street"}
              />
            </div>
            <AppFormTextArea
              id={"ar_description"}
              label="Description:"
              placeholder={"Something about the project"}
            />
          </div>
          <div className="col-span-2 flex items-center gap-x-5">
            <AppFormSwitch name={"is_completed"} text={"Completed"} />
            <AppInput
              id={"completion_date"}
              label="Date:"
              placeholder={"1/1/2099"}
              type="date"
            />
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-x-5 md:gap-x-20 gap-y-4">
            <AppSubmitButton isLoading={isLoading}>Create</AppSubmitButton>
            <AppCancelButton onClick={() => navigate("/admin/projects")}>
              Cancel
            </AppCancelButton>
          </div>
        </AppForm>
      </div>
    </>
  );
};

export default ProjectCreateForm;
