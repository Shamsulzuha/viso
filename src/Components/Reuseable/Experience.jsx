import React from "react";
import { FaPlus } from "react-icons/fa6";

const Experience = ({ user1, para1, para2 }) => {
  return (
    <>
      <div className="flex items-center gap-1 md:gap-5">
        <div className="flex items-center">
          <h4 className="text-3xl lg:text-5xl font-bold text-dark-blue">
            {user1}
          </h4>
          <FaPlus className="text-xl lg:text-2xl text-dark-blue " />
        </div>

        <div className="text-xs sm:text-sm lg:text-base">
          <p>{para1}</p>
          <p>{para2}</p>
        </div>
      </div>
    </>
  );
};

export default Experience;
