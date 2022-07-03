import React, { useContext, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ProjectsCarousel = ({ title, subtitle }) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Beautiful Building",
      first_media_only: {
        original_url:
          "https://images.adsttc.com/media/images/5de9/3010/3312/fd9f/fd00/04a7/newsletter/Lv_Lin.jpg?1575563274",
      },
      country: "Syria",
      city: "Homs",
      address: "main street",
    },
    {
      id: 2,
      name: "Beautiful Building 2",
      first_media_only: {
        original_url:
          "https://i.pinimg.com/originals/82/04/c1/8204c1140a1d524dc471d33cbef8c590.jpg",
      },
      country: "Syria",
      city: "Homs",
      address: "main street",
    },
    {
      id: 3,
      name: "Beautiful Building 3",
      first_media_only: {
        original_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9irJPE-brdC986Mk_wY-jRJB6qmlSevh8_w&usqp=CAU",
      },
      country: "Syria",
      city: "Homs",
      address: "main street",
    },
    {
      id: 4,
      name: "Beautiful Building 4",
      first_media_only: {
        original_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ISovDhjA4rBm1RbRBYROEqJy4JPn5pgP-A&usqp=CAU",
      },
      country: "Syria",
      city: "Homs",
      address: "main street",
    },
    {
      id: 5,
      name: "Beautiful Building 5",
      first_media_only: {
        original_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNj2ObNXYDeLR7kOGgjHV51UhmU9xhyACOQw&usqp=CAU",
      },
      country: "Syria",
      city: "Homs",
      address: "main street",
    },
    {
      id: 6,
      name: "Beautiful Building 6",
      first_media_only: {
        original_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmvLSiRVobNyps9YSN87L0dRnT12QpDpBHpuc7DgzXRfCD5bICQ0BNd64kP0DWETjHQXA&usqp=CAU",
      },
      country: "Syria",
      city: "Homs",
      address: "main street",
    },
    {
      id: 7,
      name: "Beautiful Building 7",
      first_media_only: {
        original_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO58qUpHYYmDl8tOOTDpPgrR4rSV0A6P3Wlg&usqp=CAU",
      },
      country: "Syria",
      city: "Homs",
      address: "main street",
    },
  ]);
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className}`}
        style={{
          ...style,
          display: props.onClick === null ? "none" : "block",
          background: "#986f25",
          colorAdjust: "black",
          width: props.onClick === null ? "0px" : "60px",
          height: props.onClick === null ? "0px" : "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "30px",
          zIndex: props.onClick === null ? 0 : 1000,
          right: props.onClick === null ? "0px" : "15px",
        }}
        onClick={onClick}
      >
        <MdChevronRight
          className={`fixed text-white bg-dark-gold ${
            props.onClick === null ? "w-0 h-0" : "w-7 h-7"
          }`}
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className}`}
        style={{
          ...style,
          display: props.onClick === null ? "none" : "block",
          background: "#986f25",
          colorAdjust: "black",
          width: props.onClick === null ? "0px" : "60px",
          height: props.onClick === null ? "0px" : "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "30px",
          zIndex: props.onClick === null ? 0 : 1000,
          left: props.onClick === null ? "0px" : "15px",
        }}
        onClick={onClick}
      >
        <MdChevronLeft
          className={`fixed text-white bg-dark-gold ${
            props.onClick === null ? "w-0 h-0" : "w-7 h-7"
          }`}
        />
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    arrows: true,
    className: "slider variable-width",
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    // autoplay: true,
    // autoplaySpeed: 50,
    // cssEase: "linear",
    // pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: false,
          arrows: true,
          adaptiveHeight: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: false,
          arrows: true,
          adaptiveHeight: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          arrows: true,
          adaptiveHeight: false,
          //   centerMode: true,
          //   centerPadding: "20%",
        },
      },
    ],
  };

  return (
    <div className="rounded-sm pt-8 pb-12">
      <div className="px-2 sm:px-6 pb-8 flex flex-col items-center space-y-4">
        <h3 className="text-dark-gold text-center w-full font-semibold text-base">
          {title}
        </h3>
        <h3 className="text-dark-blue text-center max-w-sm w-full font-bold text-3xl">
          {subtitle}
        </h3>
        <div className="w-2/6 md:w-1/6 h-0.5 bg-dark-blue mt-2"></div>
      </div>
      <Slider {...settings}>
        {projects.map((project) => (
          <div
            onDragStartCapture={() => setIsDragging(true)}
            onDragEndCapture={() =>
              setTimeout(() => setIsDragging(false), 1000)
            }
            key={project.id}
            className="group relative px-3 w-56"
          >
            <div className="min-h-64 h-64 w-56 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden transition group-hover:opacity-95 lg:h-64 lg:aspect-none">
              <img
                src={project?.first_media_only?.original_url}
                alt={project?.first_media_only?.name}
                draggable={false}
                className="w-full h-full drag object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 flex justify-between w-56">
              <div>
                <h3 className="text-base font-medium text-gray-100">
                  <button
                    onClick={() =>
                      !isDragging && navigate(`/projects/${project.id}`)
                    }
                  >
                    <span
                      aria-hidden="true"
                      draggable={false}
                      className="absolute inset-0"
                    />
                    {project.name}
                  </button>
                </h3>
                <p className="mt-1 text-xs text-gray-200">
                  {project?.country}, {project?.city}, {project?.address}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectsCarousel;
