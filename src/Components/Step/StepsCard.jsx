import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

function StepsCard({ name, cardPara, num }) {
  return (
    <>
      <div className="bg-white rounded-[70px] md:rounded-[100px] lg:rounded-[185px] hover:drop-shadow-xl cursor-pointer px-2 py-4 gap-4 md:px-4 md:py-7 lg:px-2 lg:py-6 xl:px-5 xl:py-10 lg:gap-5 xl:gap-7 flex flex-col justify-center items-center hover:bg-dark-blue group hover:-translate-y-5 duration-500 transition-all">
        <div
          className="bg-[#ededed] group-hover:bg-light-blue group-hover:text-white md:w-16 md:h-16 w-12 h-12 rounded-full flex items-center justify-center
        text-dark-blue font-semibold md:text-2xl text-xl"
        >
          {num}
        </div>
        <h3 className="text-dark-blue text-base md:text-xl font-bold text-center group-hover:text-white">
          {name}
        </h3>
        <p className="text-[#333] text-xs sm:text-sm md:text-base font-normal text-center group-hover:text-white md:px-2">
          {cardPara}
        </p>
        <div className="bg-dark-blue text-white group-hover:bg-light-blue group-hover:text-white text-2xl w-10 h-10 rounded-full flex items-center justify-center">
          <HiArrowLongRight />
        </div>
      </div>
    </>
  );
}

export default StepsCard;
