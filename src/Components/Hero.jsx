import React from "react";
import { RxDividerVertical } from "react-icons/rx";
import Experience from "./Reuseable/Experience";
import hero from "./../assets/Hero.webp";

function Hero() {
  return (
    <>
      <div className="bg-background-gray py-10 md:py-20 md:mt-24 mt-20">
        <div className="container px-3 sm:px-6 md:px-8 xl:px-20">
          <div className="items-center justify-between grid md:grid-cols-2 gap-8 md:gap-3 lg:gap-6 rounded-xl">
            <div className="flex flex-col justify-center">
              <h1 className="z-10 relative text-3xl sm:text-4xl lg:text-[44px] xl:text-[56px] font-bold text-dark-blue lg:leading-[55px] xl:leading-[75px]">
                Expert Visa <br />
                <span className="text-light-blue underline underline-offset-4 decoration-dark-blue">
                  Consultation
                </span>
                {""} for Your <br /> Global Journey.
              </h1>

              <p className="text-xs sm:text-xs lg:text-base font-normal lg:leading-6 my-5 md:my-3 lg:my-5 text-dark-gray tracking-widest flex">
                Lorem ipsum dolor sit amet consectetur. Pulvinar orci ut massa
                Lorem ipsum dolor sit amet consectetur. Pulvinar orci ut massa
              </p>

              <div className="relative flex w-full min-w-[200px] max-w-[24rem]">
                <button
                  type="button"
                  className="bg-dark-blue absolute right-2 top-1 md:right-5 md:top-3 z-10 select-none rounded-full py-2 px-6 text-center text-sm font-medium text-white shadow-md hover:shadow-lg"
                >
                  Book Now
                </button>
                <input
                  type="email"
                  className="w-full rounded-full p-3 md:p-5 pr-28 text-light-Black text-sm font-normal focus:outline-none"
                  placeholder="Select Your Category"
                />
              </div>

              <div className="flex md:gap-4 items-center pt-8 xl:pt-20">
                <Experience user1="1M" para1="Cases" para2="Successful" />
                <RxDividerVertical className="text-light-gray text-3xl xl:text-5xl" />
                <Experience user1="20" para1="Years" para2="Experience" />
              </div>
            </div>

            <div className="flex justify-end px-16 md:px-0">
              <img className="h-auto object-cover" src={hero} alt="Hero Img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
