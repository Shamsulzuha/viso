import React from "react";

function PrimaryHeading({ Heading1, Heading2, Heading3 }) {
  return (
    <>
      <div className="sm:pb-4 pb-2">
        <h2 className="text-lg sm:text-3xl lg:text-4xl text-dark-blue font-bold lg:leading-[50px] tracking-wide">
          {Heading1} <br /> <span className="text-light-blue">{Heading2}</span>
          {Heading3}
        </h2>
      </div>
    </>
  );
}

export default PrimaryHeading;
