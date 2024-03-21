"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoMdRefresh } from "react-icons/io";

const Refreshbtn = () => {
  const [rotation, setRotation] = useState(0);
  const handleClick = () => {
    setRotation(rotation + 360);
    router.refresh();
  };
  const router = useRouter();
  return (
    <div className="flex justify-end overflow-hidden">
      <IoMdRefresh
        id="btn"
        className="cursor-pointer transition-transform ease-in-out duration-200 origin-center"
        style={{
          transition: "transform 0.5s ease-in-out",
          transform: `rotate(${rotation}deg)`,
        }}
        onClick={handleClick}
      />
    </div>
  );
};

export default Refreshbtn;
