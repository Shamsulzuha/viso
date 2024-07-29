import React from "react";
import { HiOutlineCheckCircle } from "react-icons/hi";

const List = ({ list, fSize, fWeight, pBottom }) => {
  return (
    <>
      <div
        className="flex items-center gap-2 pb-2"
        style={{ paddingBottom: `${pBottom}` }}
      >
        <HiOutlineCheckCircle className="text-light-blue text-lg" />
        <p
          className="text-[10px] lg:text-xs font-light text-[#333]"
          style={{ fontSize: `${fSize}`, fontWeight: `${fWeight}` }}
        >
          {list}
        </p>
      </div>
    </>
  );
};

export default List;
