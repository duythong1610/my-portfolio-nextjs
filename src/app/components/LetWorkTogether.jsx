import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import timerIcon from "@/../public/timer-svgrepo-com.svg";
import Link from "next/link";
const LetWorkTogether = () => {
  return (
    <div className="mt-32 text-white pb-10">
      <div
        data-aos="zoom-out-right"
        className="text-5xl md:text-8xl font-bold flex justify-center"
      >
        <h1>LET&apos;S WORK&nbsp;</h1>
        <span className="text-purple-500">TOGETHER</span>
      </div>

      <div data-aos="fade-up" className="mt-20">
        <Link href="abc.com" legacyBehavior>
          <a className="text-purple-500">auduythong1610@gmail.com</a>
        </Link>
      </div>
    </div>
  );
};

export default LetWorkTogether;
