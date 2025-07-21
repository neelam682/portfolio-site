import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className='w-24 h-24 flex items-center justify-center bg-[#1e1e2f] rounded-xl shadow-md p-3'
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className='w-full h-full object-contain'
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

