import React from "react";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import ExecutiveSummary2 from "../components/heros/ExecutiveSummary2";
import InspireSimpify from "../components/heros/InspireSimpify";
import OurSections from "../components/heros/OurSections";
import OurServices from "../components/heros/OurServices";
import Team from "../components/heros/Team";
import Welcome2 from "../components/heros/Welcome2";
import CreateCommunity from "../components/heros/CreateCommunity";

const Home = () => {
  return (
    <>
      <div className="w-full h-full bg-building bg-[#001724] bg-blend-overlay bg-no-repeat">
        <Header />
        {/* <Welcome /> */}
        <Welcome2 />
      </div>
      <div id="about-us" className="w-full flex justify-center py-10">
        <ExecutiveSummary2 />
      </div>
      <div id="services" className="w-full flex justify-center py-10 px-2">
        <OurServices />
      </div>
      <div id="sections" className="w-full flex justify-center pt-80 pb-10">
        <OurSections />
      </div>
      <div id="team" className="w-full flex justify-center py-10 px-2">
        <Team />
      </div>
      <div id="our-strategy" className="w-full flex justify-center py-10 px-2">
        <InspireSimpify />
      </div>
      <div
        id="create-community"
        className="w-full flex justify-center py-10 px-2"
      >
        <CreateCommunity />
      </div>
      {/* <div className="w-full flex justify-center py-10">
        <TestHero />
      </div> */}
      <div
        id="contact-us"
        className="relative w-full flex justify-center bg-dark-blue mt-10"
      >
        <svg
          className="absolute top-0 w-full h-6 -mt-4 sm:-mt-10 sm:h-16 text-dark-blue"
          preserveAspectRatio="none"
          viewBox="0 0 1440 80"
        >
          <path
            fill="#002337"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
        <Footer />
      </div>
    </>
  );
};

export default Home;
