import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import building from "../assets/images/building-gray-2.jpg";
import WelcomeHexagon from "./WelcomeHexagon";

const Welcome = () => {
  return (
    <section className="px-2 py-32 md:px-0">
      <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-3xl md:text-3xl lg:text-5xl xl:text-5xl">
                <span className="block xl:inline">Welcome To The Best </span>
                <span className="block text-dark-gold xl:inline">
                  Architecture Company
                </span>
              </h1>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis natus maxime ducimus quidem officiis perferendis
                tenetur deleniti sapiente dolorem.
              </p>
              <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                <HashLink
                  to="/#contact-us"
                  className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-dark-gold rounded-md sm:mb-0 hover:bg-dark-gold/90 sm:w-auto"
                >
                  Contact Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </HashLink>
                <Link
                  to="/faqs"
                  className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
              <img src={building} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
