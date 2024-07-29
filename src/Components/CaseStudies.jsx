// import React, { useEffect } from "react";
import PrimaryHeading from "./PrimaryHeading";
import PrimaryPara from "./PrimaryPara";
import Experience from "./Reuseable/Experience";
import List from "./Reuseable/List";
import { RxDividerVertical } from "react-icons/rx";
import { MdArrowDropDown } from "react-icons/md";
import caseStudie from "./../assets/CaseStudies.webp";

function About() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <div
        className="container px-3 sm:px-6 md:px-8 xl:px-20 py-10 md:py-20"
        id="casestudies"
      >
        <div className="grid md:grid-cols-2 gap-10 md:gap-4 lg:gap-10">
          <div className="">
            <PrimaryHeading
              Heading1="Here are the"
              Heading2="Case Studie"
              Heading3=" of our  clients!"
            />
            <PrimaryPara
              pb="25px"
              para="Lorem ipsum dolor sit amet consectetur. Pulvinar orci ut massa  Pulvinar orci ut massa Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Pulvinar orci ut massa  Pulvinar orci ut massa Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur."
            />

            <List
              pBottom="15px"
              list="Customized Solutions"
              fSize="14px"
              fWeight="600"
            />
            <List
              pBottom="15px"
              list="Legal Compliance and Expertise"
              fSize="14px"
              fWeight="600"
            />
            <List
              pBottom="15px"
              list="Timely Communication and Updates"
              fSize="14px"
              fWeight="600"
            />
            <List
              pBottom="15px"
              list="Client Support and Assistance"
              fSize="14px"
              fWeight="600"
            />
            <List
              pBottom="15px"
              list="Application Assistance and Submission"
              fSize="14px"
              fWeight="600"
            />
            <div className="flex items-center gap-4 md:gap-10 mt-4 lg:mt-8">
              <button className="flex rounded-xl py-[10px] lg:py-[14px] px-6 text-white bg-dark-blue text-xs md:text-base font-bold">
                Contact Us
              </button>

              <div className="flex items-center cursor-pointer text-dark-blue text-xs md:text-base font-bold">
                Learn More
                <MdArrowDropDown size={20} />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="px-16 md:px-0">
              <img
                className="object-cover xl:w-[450px]"
                src={caseStudie}
                alt="Hero Img"
              />
            </div>
            <div className="flex md:gap-4 items-center pt-12">
              <Experience user1="1M" para1="Cases" para2="Successful" />
              <RxDividerVertical className="text-light-gray text-3xl xl:text-5xl" />
              <Experience user1="20" para1="Years" para2="Experience" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
