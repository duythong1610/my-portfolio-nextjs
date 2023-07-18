import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const WorkExperience = () => {
  const [dataProject, setDataProject] = useState("");
  const fetchProjectData = async () => {
    const res = await fetch("./project.json");
    const jsonData = await res.json();
    setDataProject(jsonData);
  };

  useEffect(() => {
    fetchProjectData();
  }, []);
  return (
    <div className="mt-32 text-white">
      <div
        data-aos="zoom-out-right"
        className="text-5xl md:text-8xl font-bold flex justify-center"
      >
        <h1 className="text-purple-500">WORK&nbsp;</h1>
        <span>EXPERIENCE</span>
      </div>

      {dataProject &&
        dataProject.map((project) => {
          return (
            <div
              data-aos="fade-up"
              className="relative h-[50%] text-white mt-40"
            >
              <h1 className="font-bold tracking-wide text-[140px] md:text-[200px] absolute z-[-1] -top-32 md:-top-44">
                {project.stt}
              </h1>
              <div className="relative p-4 md:p-5 bg-black hover:bg-purple-500 rounded-3xl transition duration-1000">
                <img
                  src={project.mainImage}
                  alt=""
                  className="w-full h-full object-contain rounded-3xl z-10 shadow-2xl"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex items-center gap-4 ">
                  <button className="px-4 py-2 rounded-2xl bg-black text-2xl w-fit inline-block">
                    View Demo
                  </button>

                  <button className="px-4 py-2 rounded-2xl bg-purple-500">
                    Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default WorkExperience;
