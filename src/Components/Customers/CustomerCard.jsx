import React from "react";

function CustomerCard({ imgC, name }) {
  return (
    <>
      <div className="p-6 w-full sm:w-11/12 md:w-5/6 lg:w-3/5 text-center mx-auto bg-white rounded-[90px] shadow-lg flex flex-col items-center mt-11 md:mt-5 relative">
        <div className="absolute -top-10">
          <img className="w-20" src={imgC} alt="img" />
        </div>
        <h5 className="font-bold text-dark-blue text-xl md:text-2xl pt-10 md:pb-5 pb-3">
          {name}
        </h5>
        <p className="text-sm md:text-base text-[#333] font-light">
          “Best Experts In the Agency ,i have ever seen. Best Experts In the
          Agency ,i have ever seen.”“Best Experts In the Agency ,i have ever
          seen Doctors In the Hospital i have ever seen. In the Hospital i have
          Everseen Best Doctors.”
        </p>
      </div>
    </>
  );
}

export default CustomerCard;
