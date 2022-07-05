import React from "react";
import building from "../assets/images/login-building.jpeg";

const Login = () => {
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

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="password"
              >
                Password
              </label>
              {/* <a href="#" className="text-xs text-gray-500 hover:underline">
                Forget Password?
              </a> */}
            </div>

            <input
              id="password"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
            />
          </div>

          <div className="mt-8">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Login
            </button>
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
