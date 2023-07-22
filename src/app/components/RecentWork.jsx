import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const RecentWork = () => {
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
        <h1>RECENT&nbsp;</h1>
        <span className="text-purple-500">PROJECTS</span>
      </div>

      <div className="flex flex-col gap-20 md:gap-40">
        {dataProject &&
          dataProject.map((project) => {
            return (
              <div
                key={project.stt}
                data-aos="fade-up"
                className="relative h-[50%] text-white mt-40"
              >
                <h1 className="font-bold tracking-wide text-[140px] md:text-[200px] absolute z-[-1] -top-32 md:-top-44">
                  {project.stt}
                </h1>
                <div className="relative p-4 md:p-5 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-zinc-950   border border-slate-900 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms] rounded-3xl duration-1000 overflow-hidden z-[999]">
                  <Image
                    width={1920}
                    height={1080}
                    src={project.mainImage}
                    alt="project img"
                    className="w-full h-full object-contain rounded-3xl shadow-2xl z-20"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex items-center gap-4 ">
                    <Link href={project.demoUrl} legacyBehavior>
                      <a
                        target="_blank"
                        className="px-4 py-2 rounded-2xl bg-black text-2xl w-fit inline-block"
                      >
                        View Demo
                      </a>
                    </Link>

                    <button className="px-4 py-2 rounded-2xl bg-purple-500">
                      Details
                    </button>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center mt-5 md:mt-10 gap-5 md:gap-10">
                  <div className="flex items-center gap-4 md:w-[30%]">
                    <h1 className="text-4xl md:text-5xl uppercase font-bold">
                      {project.name}
                    </h1>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 md:w-[50%]">
                    {project.techList?.map((tech, index) => (
                      <span
                        key={index}
                        className="text-sm md:text-lg bg-[#0d0d0d] px-4 py-1 rounded-2xl hover:bg-purple-500 duration-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 md:w-[20%] ">
                    Example
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RecentWork;
