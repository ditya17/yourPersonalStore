import React from "react";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="container mt-14 mx-auto flex items-center justify-center flex-col px-5 py-5 lg:flex-row">
      <div className="mt-10 lg:w-1/2">
        <p className="text-secondary text-center md:text-xl">
          Easiest way to buy and sell educational goods.
        </p>
        <div className="flex flex-col gap-y-2.5 mt-7 lg:mt-6 relative">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
            <input
              className="placeholder:font-bold font-semibold placeholder:text-[#959EAD] rounded-md pl-12 pr-3 w-full py-3 focus:outline-none border shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] md:py-4"
              type="text"
              placeholder="Search Books and more..."
            />
          </div>
          <button className="w-full bg-primary text-white font-semibold rounded-md px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
