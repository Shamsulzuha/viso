import React from "react";
import { PiPhone } from "react-icons/pi";
import List from "../Reuseable/List";

function ServicesCard({ imgC, name }) {
  return (
    <>
      <div className="bg-white rounded-xl hover:shadow-lg hover:shadow-[#ededed] hover:-translate-y-3 duration-500 transition-all p-4 group cursor-pointer border border-[#EDEDED]">
        <div className="">
          <img className="object-cover w-full" src={imgC} alt="img" />
        </div>

        <h3 className="text-dark-blue text-base font-semibold py-3 lg:py-5">
          {name}
        </h3>
        <List list="Customized Solutions" />
        <List list="Legal Compliance and Expertise" />

        <button className="flex items-center justify-center gap-2 w-full border border-[#EDEDED] text-dark-blue rounded-lg py-2 md:py-[10px] text-[10px] font-semibold lg:mt-4 mt-2 group-hover:bg-dark-blue group-hover:text-white">
          <span>
            <PiPhone className="" />
          </span>
          Contact Us
        </button>
      </div>
    </>
  );
}

export default ServicesCard;
