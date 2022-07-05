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

const ProjectCreateForm = () => {
  const [photosURLs, setPhotosURLs] = useState([]);
  const [photos, setPhotos] = useState([]);

  const initialValues = {
    name: "",
    country: "",
    city: "",
    address: "",
    description: "",
    is_complete: true,
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
  return (
    <>
      <div className="space-y-5 mx-auto max-w-6xl w-full bg-white ring-1 ring-light-gold rounded-md px-3 py-8 md:p-10 my-10">
        <AppForm
          initialValues={initialValues}
          validationSchema={Yup.object().shape({})}
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
                id={"name"}
                label="Project Name:"
                placeholder={"Greate Project"}
              />
              <AppInput id={"country"} label="Country:" placeholder={"Syria"} />
            </div>
            <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-4">
              <AppInput id={"city"} label="City:" placeholder={"Homs"} />
              <AppInput
                id={"address"}
                label="Address:"
                placeholder={"Main Street"}
              />
            </div>
            <AppFormTextArea
              id={"description"}
              label="Description:"
              placeholder={"Something about the project"}
            />
          </div>
          <div className="space-y-5 ring-1 ring-light-gold rounded-md p-5">
            <h1 className="text-lg text-dark-blue pb-2">Arabic Version</h1>
            <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-4">
              <AppInput
                id={"name"}
                label="Project Name:"
                placeholder={"Greate Project"}
              />
              <AppInput id={"country"} label="Country:" placeholder={"Syria"} />
            </div>
            <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-4">
              <AppInput id={"city"} label="City:" placeholder={"Homs"} />
              <AppInput
                id={"address"}
                label="Address:"
                placeholder={"Main Street"}
              />
            </div>
            <AppFormTextArea
              id={"description"}
              label="Description:"
              placeholder={"Something about the project"}
            />
          </div>
          <div className="col-span-2 flex items-center gap-x-5">
            <AppFormSwitch name={"is_complete"} text={"Completed"} />
            <AppInput
              id={"completion_date"}
              label="Date:"
              placeholder={"1/1/2099"}
              type="date"
            />
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-x-5 md:gap-x-20 gap-y-4">
            <AppSubmitButton>Create</AppSubmitButton>
            <AppCancelButton>Cancel</AppCancelButton>
          </div>
        </AppForm>
      </div>
    </>
  );
};

export default ProjectCreateForm;
