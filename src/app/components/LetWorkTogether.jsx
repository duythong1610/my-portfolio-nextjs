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

      <div data-aos="fade-up" className="text-center mt-10 flex flex-col gap-3">
        <Link href="mailto:auduythong1610@gmail.com" legacyBehavior>
          <a className="text-purple-500 text-base md:text-2xl">
            auduythong1610@gmail.com
          </a>
        </Link>
        <Link href="tel:0398052707" className="" legacyBehavior>
          <a className="text-white text-base md:text-2xl">+84 398.052.707</a>
        </Link>
      </div>
    </div>
  );
};

export default LetWorkTogether;
