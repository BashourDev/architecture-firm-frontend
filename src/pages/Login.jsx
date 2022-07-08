import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../api/api";
import { setToken } from "../api/token";
import { setUser } from "../api/user";
import building from "../assets/images/login-building.jpeg";
import AppForm from "../components/forms/AppForm";
import AppInput from "../components/forms/AppInput";
import UserContext from "../contexts/userContext";
import * as Yup from "yup";
import AppSubmitButton from "../components/forms/AppSubmitButton";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };

  const handleLogin = async (values) => {
    setIsLoading(true);
    try {
      const res = await api.post("/login", {
        username: values.username,
        password: values.password,
      });

      userContext.setUser(res.data.user);
      setUser(res.data.user);
      setToken(res.data.token);

      navigate("/admin/projects");
    } catch (err) {
      console.log(err);
      if (err?.response?.status === 401) {
        toast.error("wrong username or password");
      } else {
        toast.error("something went wrong");
      }
    }
    setIsLoading(false);
  };
  return (
    <div className="py-32">
      <div className="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl">
        <img
          className="hidden bg-cover lg:block lg:w-1/2"
          src={building}
          alt={"building"}
        />

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-center text-gray-700 ">
            A.I.M
          </h2>

          <p className="text-xl text-center text-gray-600 ">Welcome back!</p>

          <div className="flex items-center justify-between mt-10">
            <span className="w-1/5 border-b lg:w-1/4"></span>

            <span
              href="#"
              className="text-xs text-center text-gray-500 uppercase hover:underline"
            >
              login with your credentials
            </span>

            <span className="w-1/5 border-b lg:w-1/4"></span>
          </div>

          <div className="py-5 space-y-4">
            <AppForm
              initialValues={initialValues}
              validationSchema={Yup.object().shape({
                username: Yup.string().required().label("Username"),
                password: Yup.string().required().label("Password"),
              })}
              onSubmit={handleLogin}
            >
              <AppInput
                id={"username"}
                label={"Username"}
                placeholder={"Enter your username"}
              />

              <AppInput
                id={"password"}
                label={"Password"}
                placeholder={"Enter your password"}
                type="password"
              />

              <div className="mt-8 w-full">
                <AppSubmitButton>Login</AppSubmitButton>
              </div>
            </AppForm>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b md:w-1/4"></span>

            {/* <a
              href="#"
              className="text-xs text-gray-500 uppercase hover:underline"
            >
              or sign up
            </a> */}

            <span className="w-1/5 border-b md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
