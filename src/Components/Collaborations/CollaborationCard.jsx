import React from "react";

function CollaborationCard({ img }) {
  return (
    <>
      <div className="flex justify-center">
        <img
          className="object-cover hover:scale-105 duration-300 transition-all "
          src={img}
          alt="img"
        />
      </div>
    </>
  );
}

export default CollaborationCard;
