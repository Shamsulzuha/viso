import React from "react";
import CustomerCard from "./CustomerCard";
import Slider from "react-slick";
import PrimaryHeading from "../PrimaryHeading";
import PrimaryPara from "../PrimaryPara";
import "./customer.css";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import customer1 from "./../../assets/Customer1.webp";
import customer2 from "./../../assets/Customer2.webp";
import customer3 from "./../../assets/Customer3.webp";
import customer4 from "./../../assets/Customer4.webp";
import customer5 from "./../../assets/Customer5.webp";

function Customer() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <HiArrowLongRight />,
    prevArrow: <HiArrowLongLeft />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div
        className="container px-3 sm:px-6 md:px-8 xl:px-20 pt-10 sm:pt-20 pb-14 sm:pb-24"
        id="customer"
      >
        <div className="flex flex-col md:w-3/4 mx-auto text-center">
          <PrimaryHeading
            Heading1="What Our"
            Heading2="Customers"
            Heading3=" say about us!"
          />
          <PrimaryPara para="Lorem ipsum dolor sit amet consectetur. Pulvinar orci ut massa  Pulvinar orci ut massa Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Pulvinar orci ut massa  Pulvinar orci ut massa Lorem ipsum dolor sit " />
        </div>
        <Slider {...settings}>
          <CustomerCard name="Mr. Alex" imgC={customer1} />
          <CustomerCard name="Dr. Shakespear" imgC={customer2} />
          <CustomerCard name="Mr. Alex" imgC={customer3} />
          <CustomerCard name="Dr. Broad" imgC={customer4} />
          <CustomerCard name="Mr. Alex" imgC={customer5} />
        </Slider>
      </div>
    </>
  );
}

export default Customer;
