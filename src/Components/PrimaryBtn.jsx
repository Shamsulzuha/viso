import React from "react";

function PrimaryBtn({ nameC }) {
  return (
    <>
      <button className="black-gradient flex rounded-xl py-[8px] md:py-[11px] lg:px-5 px-5 text-white duration-200 border border-light-Black text-[10px] font-bold">
        {nameC}
      </button>
    </>
  );
}

export default PrimaryBtn;
