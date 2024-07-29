import React, { useEffect } from "react";
import PrimaryHeading from "../PrimaryHeading";
import StepsCard from "./StepsCard";
import ViewAll from "../ViewAll";
import PrimaryPara from "../PrimaryPara";

function Steps() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="py-10 md:py-20 bg-background-gray" id="steps">
        <div className="container px-3 sm:px-6 md:px-8 xl:px-20">
          <div className="">
            <PrimaryHeading
              Heading1="Here are few"
              Heading2="Steps"
              Heading3=" to follow you!"
            />
            <PrimaryPara para="Lorem ipsum dolor sit amet consectetur. Pulvinar orci ut massa  Pulvinar orci ut massa Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Pulvinar orci ut massa  Pulvinar orci ut massa Lorem ipsum dolor sit " />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-7 md:gap-8 justify-center items-center">
            <StepsCard
              num="01"
              name="Contact Us"
              cardPara="Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna."
            />

            <StepsCard
              num="02"
              name="Fill Your Details"
              cardPara="Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna."
            />

            <StepsCard
              num="03"
              name="Submit Application"
              cardPara="Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna."
            />

            <StepsCard
              num="04"
              name="Meet Our Experts"
              cardPara="Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna."
            />
          </div>

          <ViewAll See="Learn More" />
        </div>
      </div>
    </>
  );
}

export default Steps;
