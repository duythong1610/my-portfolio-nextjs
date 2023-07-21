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

const TechSkills = () => {
  function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -40, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      /**
       * This is what changes the direction of the scroll once we
       * switch scrolling directions.
       */
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    });

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
      <div className="parallax">
        <motion.div className="scroller" style={{ x }}>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="mt-32 text-white">
      <div
        data-aos="zoom-out-right"
        className="text-5xl md:text-8xl font-bold flex justify-center"
      >
        <h1>TECHNICAL&nbsp;</h1>
        <span className="text-purple-500">SKILLS</span>
      </div>

      <div
        data-aos="fade-up"
        className="flex items-center gap-5 md:gap-14 mt-20 flex-wrap justify-center"
      >
        <div className="flex flex-col items-center gap-2">
          <img
            src={htmlIcon.src}
            alt="alo"
            className="w-14 h-14 md:w-36 md:h-36"
          />
          <h1 className="text-base md:text-2xl">HTML5</h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src={cssIcon.src}
            alt="alo"
            className="w-14 h-14 md:w-36 md:h-36"
          />
          <h1 className="text-base md:text-2xl">CSS3</h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src={jsIcon.src}
            alt="alo"
            className="w-14 h-14 md:w-36 md:h-36"
          />
          <h1 className="text-base md:text-2xl">Javascript</h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src={reactIcon.src}
            alt="alo"
            className="hover:animate-spin w-14 h-14 md:w-36 md:h-36"
          />
          <h1 className="text-base md:text-2xl">ReactJS</h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt="alo"
            className="w-14 h-14 md:w-36 md:h-36"
          />
          <h1 className="text-base md:text-2xl">Ant Design</h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src={reduxIcon.src}
            alt="alo"
            className="w-14 h-14 md:w-36 md:h-36"
          />
          <h1 className="text-base md:text-2xl">Redux</h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src={tailwindIcon.src}
            alt="alo"
            className="w-14 h-14 md:w-36 md:h-36"
          />
          <h1 className="text-base md:text-2xl">Tailwind CSS</h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src={vscodeIcon.src}
            alt="alo"
            className="w-14 h-14 md:w-36 md:h-36"
          />
          <h1 className="text-base md:text-2xl">Visual Studio Code</h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src={mongoIcon.src}
            alt="alo"
            width={150}
            height={150}
            className="w-14 h-14 md:w-36 md:h-36"
          />
          <h1 className="text-base md:text-2xl">Mongo</h1>
        </div>
      </div>
      {/* <section className="md:text-base md:text-2xl font-medium text-white">
        <ParallaxText baseVelocity={-10} className>
          <div className="flex items-center gap-2">
            <h1>mongodb</h1>
            <img src={mongoIcon.src} alt="alo" width={50} height={50} />
          </div>
        </ParallaxText>
      </section> */}
    </div>
  );
};

export default TechSkills;
