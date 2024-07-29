import React from "react";

function PrimaryHeading({ fHeading }) {
  return (
    <>
      <div className="sm:pb-4 pb-2">
        <h2 className="text-lg text-dark-blue font-bold">{fHeading}</h2>
      </div>
    </>
  );
}

export default PrimaryHeading;
