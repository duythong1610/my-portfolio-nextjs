import React from "react";
import { motion } from "framer-motion";
const RecentWork = () => {
  return (
    <div className="mt-32 text-white">
      <div className="text-3xl md:text-5xl font-bold flex">
        <h1>RECENT&nbsp;</h1>
        <span className="text-purple-500">PROJECTS</span>
      </div>

      <div data-aos="fade-up" className="relative h-[50%] text-white mt-40">
        <h1 className="font-black text-[140px] md:text-[200px] absolute z-[-1] -top-32 md:-top-44">
          01
        </h1>
        <div className="p-4 md:p-5 bg-black hover:bg-purple-500 rounded-3xl transition duration-1000">
          <img
            src="https://storage.googleapis.com/my-image-products/project1.jpg"
            alt=""
            className="w-full h-full object-contain rounded-3xl z-10 shadow-2xl"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <h1 className="text-5xl font-medium">Name</h1>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="relative h-auto md:h-[50%] text-white mt-40 "
      >
        <h1 className="font-black  text-[140px] md:text-[200px] absolute z-[-1] -top-32 md:-top-44">
          02
        </h1>
        <div className="p-4 md:p-5 bg-black hover:bg-purple-500 rounded-3xl transition duration-1000">
          <img
            src="https://storage.googleapis.com/my-image-products/project2.png"
            alt=""
            className="w-full h-full object-contain rounded-3xl z-10 shadow-2xl"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <h1 className="text-5xl font-medium">Name</h1>
        </div>
      </div>

      <div data-aos="fade-up" className="relative h-[50%] text-white mt-40 ">
        <h1 className="font-black  text-[140px] md:text-[200px] absolute z-[-1] -top-32 md:-top-44">
          03
        </h1>
        <div className="p-4 md:p-5 bg-black hover:bg-purple-500 rounded-3xl transition duration-1000">
          <img
            src="https://storage.googleapis.com/my-image-products/project3.png"
            alt=""
            className="w-full h-full object-contain rounded-3xl z-10 shadow-2xl"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <h1 className="text-5xl font-medium">Name</h1>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
