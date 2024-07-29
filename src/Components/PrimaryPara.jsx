import React from "react";

function PrimaryPara({ para, pb }) {
  return (
    <>
      <p
        className="text-sm lg:text-xl text-[#333] font-light xl:pb-16 md:pb-10 pb-6 tracking-wide"
        style={{ paddingBottom: `${pb}` }}
      >
        {para}
      </p>
    </>
  );
}

export default PrimaryPara;
