import React from "react";
import CollaborationCard from "./CollaborationCard";
import Slider from "react-slick";
import "./Collaboration.css";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import collaboration1 from "./../../assets/Collaboration1.webp";
import collaboration2 from "./../../assets/Collaboration2.webp";
import collaboration3 from "./../../assets/Collaboration3.webp";

function Collaboration() {
  const settings = {
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <HiArrowLongRight />,
    prevArrow: <HiArrowLongLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="py-10 sm:py-20 bg-background-gray" id="collaboration">
        <div className="container px-6 md:px-16 lg:px-24 xl:px-40">
          <div className="text-center text-dark-blue text-xl mb-7">
            <span className="text-light-blue">2400+ Renowned Agencies </span>
            Are Affiliated With Us Due To Our Customer Support.
          </div>
          <Slider {...settings}>
            <CollaborationCard img={collaboration1} />
            <CollaborationCard img={collaboration2} />
            <CollaborationCard img={collaboration3} />
            <CollaborationCard img={collaboration1} />
            <CollaborationCard img={collaboration2} />
            <CollaborationCard img={collaboration3} />
            <CollaborationCard img={collaboration1} />
            <CollaborationCard img={collaboration2} />
            <CollaborationCard img={collaboration3} />
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Collaboration;
