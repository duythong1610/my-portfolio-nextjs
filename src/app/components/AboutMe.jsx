import React, { useEffect, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { useRef } from "react";
import mongoIcon from "@/../public/mongodb-svgrepo-com.svg";
import htmlIcon from "@/../public/icons8-html.svg";
import reactIcon from "@/../public/icons8-react-native.svg";
import cssIcon from "@/../public/icons8-css.svg";
import jsIcon from "@/../public/icons8-javascript.svg";
import tailwindIcon from "@/../public/icons8-tailwindcss.svg";
import reduxIcon from "@/../public/icons8-redux.svg";
import vscodeIcon from "@/../public/icons8-visual-studio-code-2019.svg";

const AboutMe = () => {
  return (
    <div className="mt-32 text-white">
      {/* <div
        data-aos="zoom-out-right"
        className="text-5xl md:text-8xl font-bold flex justify-center"
      >
        <h1>ABOUT&nbsp;</h1>
        <span className="text-purple-500">ME</span>
      </div> */}
      <div className="flex flex-col items-center md:flex-row gap-20 mt-10">
        <div data-aos="fade-up" className="md:w-1/2">
          <img
            src="https://storage.googleapis.com/my-image-products/avatar.png"
            alt=""
            className="rounded-2xl w-full mix-blend-darken "
          />
        </div>

        <div
          data-aos="zoom-out-right"
          className="text-white md:w-1/2 text-base md:text-xl tracking-wide leading-6 md:leading-9 flex flex-col gap-5 "
        >
          <div className="w-fit">
            <h1 className="text-5xl md:text-9xl tracking-wide font-bold">
              HELLO!
            </h1>
            <div className="w-full h-[5px] bg-purple-500"></div>
          </div>
          <h1>
            I'm <span className="text-purple-500">Au Duy Thong</span>, a web
            developer with limited experience. I have a strong passion for
            creating products that prioritize user interface and experience. I
            can spend entire days sitting in front of my computer, trying to
            solve any challenges that I feel are not yet satisfactory.
          </h1>
          <h1>
            Thank you for taking the time to review my portfolio. Currently, I
            am seeking a job related to web development (ReactJS). Below are
            some of my modest experiences and projects that I have worked on.
            Please take a look, and I hope there might be an opportunity for us
            to work together.
          </h1>
          {/* <div>
            <h1 className="text-2xl font-bold">For contact</h1>
            <span>alo</span>
            <span>alo</span>
            <span>alo</span>
            <span>alo</span>
          </div> */}
          <div>
            <a
              href="../CV-AuDuyThong-Fresher-Frontend_ENG.pdf"
              download="CV-AuDuyThong-Fresher-Frontend_ENG.pdf"
              className="rounded-2xl bg-purple-500 px-5 py-2"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
