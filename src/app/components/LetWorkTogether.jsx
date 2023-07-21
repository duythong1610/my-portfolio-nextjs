import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import timerIcon from "@/../public/timer-svgrepo-com.svg";
import Link from "next/link";
const LetWorkTogether = () => {
  console.log("alo");
  return (
    <div className="mt-32 text-white pb-10">
      <div
        data-aos="zoom-out-right"
        className="text-5xl md:text-8xl font-bold flex flex-wrap gap-2 md:gap-0 justify-center"
      >
        <h1>LET&apos;S WORK&nbsp;</h1>
        <span className="text-purple-500">TOGETHER</span>
      </div>

      <div data-aos="fade-up" className="">
        <Link href="abc.com" legacyBehavior>
          <a className="text-purple-500">auduythong1610@gmail.com</a>
        </Link>
      </div>
      <div>
        <a
          href="../CV-AuDuyThong-Fresher-Frontend_ENG.pdf"
          download="CV-AuDuyThong-Fresher-Frontend_ENG.pdf"
        >
          Dowload
        </a>
      </div>
    </div>
  );
};

export default LetWorkTogether;
