"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-[1500px] m-auto pt-5">
      <div className="min-h-screen p-5 flex flex-col gap-16 md:gap-40">
        <nav className="h-14 overflow-hidden flex justify-between">
          <div className="text-white font-medium text-2xl">
            <Link href="/">LOGO</Link>
          </div>
          <motion.ul
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: "1" }}
            className="flex gap-5 text-white font-medium text-2xl"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog/hello-world">Contact</Link>
            </li>
          </motion.ul>
        </nav>
        <div className="w-min h-min overflow-hidden flex flex-col gap-6">
          <div className="flex items-start h-auto overflow-visible relative whitespace-pre w-auto">
            <motion.h1
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: "1" }}
              className="text-5xl md:text-8xl font-medium text-white"
            >
              AU DUY&nbsp;
            </motion.h1>
            <motion.span className="text-5xl md:text-8xl font-medium text-white hover:text-purple-500 hover:animate-bounce transition-all">
              THONG
            </motion.span>
          </div>
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: "1" }}
            className="flex items-center h-auto overflow-visible relative whitespace-pre w-auto gap-4"
          >
            <h1 className="text-base md:text-3xl font-medium text-white">
              PERSONAL PORTFOLIO
            </h1>
            <div className="h-[2px]  bg-white flex-1"></div>
            <h1 className="text-base md:text-3xl font-medium text-white">
              2023
            </h1>
          </motion.div>
        </div>

        <div className="flex ">
          <div className="w-full h-min overflow-hidden flex flex-col items-end place-content-end gap-6">
            <div className="flex items-end h-auto overflow-visible relative whitespace-pre w-auto">
              <motion.h1
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: "1" }}
                className="text-5xl md:text-8xl font-medium text-white"
              >
                WEB DEVELOPER
              </motion.h1>
            </div>
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: "1" }}
              className="flex items-center h-auto overflow-visible relative whitespace-pre w-auto gap-4"
            >
              <h1 className="text-base md:text-3xl font-medium text-white">
                PHU NHUAN
              </h1>
              <div className="h-[2px] w-[300px] bg-white flex-1"></div>
              <h1 className="text-base md:text-3xl font-medium text-white">
                HO CHI MINH
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
