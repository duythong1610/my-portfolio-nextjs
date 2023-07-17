"use client";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Link from "next/link";
import { useRef } from "react";
import Header from "./components/Header";
import avatar from "../../public/avatar.jpg";
import FavoriteQuote from "./components/FavoriteQuote";
import RecentWork from "./components/RecentWork";
import useMenuAnimation from "../../utils/useMenuAnimation";
import { MenuToggle } from "./components/MenuToggle";
import { useState } from "react";

export default function Home() {
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
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

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
        </motion.div>
      </div>
    );
  }

  return (
    <main className="max-w-[1500px] m-auto pt-10 px-4 md:px-0">
      <div className="md:h-screen flex flex-col gap-16 md:gap-40 ">
        <Header />
        <div className="flex justify-between">
          <div className="w-min h-min overflow-hidden flex flex-col gap-6 ">
            <div className="h-auto overflow-visible relative whitespace-pre w-auto flex justify-between ">
              <div className="flex flex-col gap-2">
                <motion.h1
                  initial={{ y: -200 }}
                  animate={{ y: 0 }}
                  transition={{ duration: "1" }}
                  className="text-purple-500 text-2xl md:text-6xl font-medium"
                >
                  Hello, I am
                </motion.h1>
                <motion.div
                  initial={{ y: -200 }}
                  animate={{ y: 0 }}
                  transition={{ duration: "1" }}
                  className="flex items-start text-white text-[40px] md:text-8xl font-bold"
                >
                  <motion.h1 className="-tracking-wider">DUY&nbsp;</motion.h1>
                  <motion.span className="-tracking-wider hover:text-purple-500 transition-all">
                    THONG
                  </motion.span>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: "1" }}
              className="flex items-center h-auto overflow-visible relative whitespace-pre w-auto gap-3 md:gap-10 "
            >
              <h1 className="text-base md:text-3xl  text-white">
                Personal portfolio
              </h1>
              <div className="h-[2px] bg-white flex-1"></div>
              <h1 className="text-base md:text-3xl  text-white">2023</h1>
            </motion.div>
          </div>
          {/* <div className="mr-[15%]">
            <img
              src={avatar.src}
              alt="au_duy_thong"
              className="w-[300px] h-[300px] rounded-full object-cover"
            />
          </div> */}
        </div>

        <div className="flex  justify-between">
          <div>abc</div>
          <div className="w-min h-min overflow-hidden flex flex-col gap-6">
            <div className="h-auto overflow-visible relative  whitespace-pre w-auto">
              <motion.h1
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: "1" }}
                className="text-4xl md:text-8xl font-bold text-white "
              >
                WEB DEVELOPER
              </motion.h1>
            </div>
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: "1" }}
              className="flex items-center h-auto overflow-visible relative whitespace-pre w-auto gap-3 md:gap-10"
            >
              <h1 className="text-base md:text-3xl text-white">Phu Nhuan</h1>
              <div className="h-[2px] bg-white flex-1"></div>
              <h1 className="text-base md:text-3xl text-white">
                Ho Chi Minh City
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <section className="md:text-3xl font-medium text-white">
        <ParallaxText baseVelocity={-10} className>
          Framer Motion
        </ParallaxText>
        <ParallaxText baseVelocity={10}>Scroll velocity</ParallaxText>
      </section> */}
      <section>
        <FavoriteQuote />
      </section>
      <section>
        <RecentWork />
      </section>
    </main>
  );
}
