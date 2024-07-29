import React from "react";
import { MdArrowDropDown } from "react-icons/md";

function ViewAll({ See }) {
  return (
    <>
      <div className="flex justify-center items-center mt-5 sm:mt-14">
        <div className="text-sm font-bold cursor-pointer text-blue inline-block bg-dark-blue rounded-xl text-white py-2 px-5">
          {See}
          <MdArrowDropDown size={20} className="inline-flex ml-1" />
        </div>
      </div>
    </>
  );
}

export default ViewAll;
