import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import timerIcon from "@/../public/timer-svgrepo-com.svg";
import thinkingIcon from "@/../public/reshot-icon-thinking-face-KTBHEAU5VP.svg";

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

      <div data-aos="fade-up" className="mt-20 bg-[#0d0d0d] p-5 rounded-xl">
        <div className="text-lg md:text-5xl flex flex-col gap-2 md:flex-row items-center justify-between">
          <h1>
            Intern Front-end Developer -{" "}
            <span className="text-purple-500">TD Company</span>
          </h1>
          <h1>12/2022 - 02/2023</h1>
        </div>
        <div className="bg-purple-500 w-full m-auto h-[3px] mt-5 mb-10" />
        <div className="flex items-center gap-3 justify-center my-5">
          <h1 className="text-xl md:text-5xl">What did i do here?</h1>
          <img
            src={thinkingIcon.src}
            alt=""
            className="w-10 h-10 md:w-14 md:h-14"
          />
        </div>
        <div className="text-sm md:text-xl mt-5 tracking-wide leading-6 md:leading-9">
          <p>
            - Read project manuals and tested existing functions of the WPF
            project.
          </p>
          <p>- Built user interface using MUI library.</p>
          <p>- Learned and improved TypeScript skills.</p>
          <p>
            - Coded pages for project requirements specified by the project
            manager, including drug category management, supplier management,
            manufacturer management, examination kit management, and
            prescription management.
          </p>
          <p>
            - Obtained data through API provided by the back-end and rendered it
            to the view.
          </p>
          <p>
            - Coded forms to capture user input and send it to the server via
            API provided by the back-end.
          </p>
          <p>- Reported work progress to Team Leader every week.</p>
          <p>
            - Learned how to organize source code in ReactJS and gained
            practical experience through working on a real project in the
            company
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
