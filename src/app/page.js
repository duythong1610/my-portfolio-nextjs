"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  motion
} from "framer-motion";
import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import AboutMe from "./components/AboutMe";
import FavoriteQuote from "./components/FavoriteQuote";
import Header from "./components/Header";
import LetWorkTogether from "./components/LetWorkTogether";
import RecentWork from "./components/RecentWork";
import TechSkills from "./components/TechSkills";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
  useEffect(() => {
    AOS.init();
    Scrollbar.initAll();
  }, []);

  return (
    <>
      <main className="max-w-[1500px] w-[90%] m-auto pt-10 md:px-0">
        <section id="main">
          <div className="md:h-screen max-h-[1000px] flex flex-col gap-16 md:gap-[10vh] lg:gap-40 ">
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
                      className="flex items-start text-white text-6xl md:text-9xl font-medium"
                    >
                      <motion.h1>AU DUY&nbsp;</motion.h1>
                      <motion.span className=" hover:text-purple-500 transition-all">
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
                  <h1 className="text-base md:text-3xl text-white">
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

            <div className="flex justify-between">
              <div></div>

              <div className="w-min h-min overflow-hidden flex flex-col gap-6">
                <div className="h-auto overflow-visible relative  whitespace-pre w-auto">
                  <motion.h1
                    initial={{ y: -200 }}
                    animate={{ y: 0 }}
                    transition={{ duration: "1" }}
                    className="text-[55px] md:text-9xl font-medium text-white "
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
                  <h1 className="text-base md:text-3xl text-white">
                    Phu Nhuan
                  </h1>
                  <div className="h-[2px] bg-white flex-1"></div>
                  <h1 className="text-base md:text-3xl text-white">
                    Ho Chi Minh City
                  </h1>
                </motion.div>
              </div>
            </div>
            <div data-aos="fade-up" id="section10">
              <a href="#about">
                <span></span>Scroll
              </a>
            </div>
          </div>
        </section>
        {/* <section className="md:text-3xl font-medium text-white">
        <ParallaxText baseVelocity={-10} className>
          Framer Motion
        </ParallaxText>
        <ParallaxText baseVelocity={10}>Scroll velocity</ParallaxText>
      </section> */}
        <div className="flex flex-col gap-20 md:gap-40">
          <section id="">
            <FavoriteQuote />
          </section>
          <section id="about">
            <AboutMe />
          </section>
          <section id="work">
            <WorkExperience />
          </section>
          <section id="techskills">
            <TechSkills />
          </section>
          <section id="project">
            <RecentWork />
          </section>
          <section id="getintouch">
            <LetWorkTogether />
          </section>
          <section className="md:w-1/2 m-auto">
            <iframe
              src="https://open.spotify.com/embed/track/7221xIgOnuakPdLqT0F3nP?utm_source=generator"
              width="100%"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="h-52 rounded-2xl !bg-transparent"
            ></iframe>
          </section>
        </div>
      </main>
    </>
  );
}
