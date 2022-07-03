import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Welcome2 = () => {
  return (
    <section className="w-full px-6 pb-12 antialiased">
      <div className="mx-auto max-w-7xl">
        <div className="container max-w-lg px-4 py-32 mx-auto mt-px text-left md:max-w-none md:text-center">
          <h1 className="text-3xl font-extrabold leading-10 tracking-tight text-left text-gray-200 md:text-center sm:leading-none md:text-5xl lg:text-6xl">
            <span className="inline md:block">We Don't Design Spaces</span>{" "}
            <span className="relative mt-2 pb-1 text-transparent bg-clip-text bg-gradient-to-br from-dark-gold to-light-gold md:inline-block">
              We Thind About <br /> A New Way Of Living
            </span>
          </h1>
          <div className="mx-auto mt-5 text-gray-300 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
            deserunt! Nihil eaque dolor sit expedita adipisci qui nemo, delectus
            itaque voluptatem maiores nisi iusto perferendis! Nobis commodi
            distinctio numquam molestiae.
          </div>
          <div className="flex flex-col items-center mt-12 text-center">
            <span className="relative inline-flex w-full md:w-auto">
              <HashLink
                to={"/#contact-us"}
                className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-gradient-to-tr from-dark-gold to-light-gold border border-transparent rounded-full md:w-auto hover:opacity-95 focus:outline-none"
              >
                Contact Us
              </HashLink>
            </span>
            <Link to={"/faq"} className="mt-3 text-sm text-light">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome2;
