import { motion } from "framer-motion";
import Link from "next/link";
import { MenuToggle } from "./MenuToggle";
import { useState } from "react";
import useMenuAnimation from "../../../utils/useMenuAnimation";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);
  return (
    <div>
      {" "}
      <nav className="h-20 hidden md:block overflow-hidden sticky">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: "1" }}
          className="md:flex justify-between h-full items-center hidden"
        >
          <div className="text-white font-medium text-lg">
            <Link href="/">
              <img
                src="https://storage.googleapis.com/my-image-products/icon_portfolio.png"
                alt=""
                className="w-[100px] h-[100px]"
              />
            </Link>
          </div>

          <ul className="md:flex gap-10 text-white font-medium text-lg hidden">
            <li>
              <Link href="#main">MAIN</Link>
            </li>
            <li>
              <Link href="#about">ABOUT</Link>
            </li>
            <li>
              <Link href="#work">WORK</Link>
            </li>
            <li>
              <Link href="#techskills">TECH SKILLS</Link>
            </li>

            <li>
              <Link href="#project">PROJECTS</Link>
            </li>
            <li>
              <Link
                href="/blog/hello-world "
                className="py-2 px-5 bg-purple-600 rounded-3xl"
              >
                SAY HELLO
              </Link>
            </li>
          </ul>
        </motion.div>
      </nav>
      <nav className="h-20 block md:hidden overflow-hidden fixed top-0 left-4 right-4 z-10 bg-black">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: "1" }}
          className="flex justify-between h-full items-center"
        >
          <div className="text-white font-medium text-lg">
            <Link href="/">
              {" "}
              <img
                src="https://storage.googleapis.com/my-image-products/icon_portfolio.png"
                alt=""
                className="w-[50px] h-[50px]"
              />
            </Link>
          </div>
          <div ref={scope}>
            <nav className="menu md:hidden">
              <ul className="flex flex-col text-5xl font-black text-center text-white gap-10 px-5">
                <li className="" onClick={() => setIsOpen(!isOpen)}>
                  <Link href="#main">MAIN</Link>
                </li>
                <li className="" onClick={() => setIsOpen(!isOpen)}>
                  <Link href="#about" legacyBehavior>
                    ABOUT
                  </Link>
                </li>
                <li className="" onClick={() => setIsOpen(!isOpen)}>
                  <Link href="#techskills" legacyBehavior>
                    TECH SKILLS
                  </Link>
                </li>
                <li className="" onClick={() => setIsOpen(!isOpen)}>
                  <Link href="#project" legacyBehavior>
                    PROJECTS
                  </Link>
                </li>
                <li className="mt-5" onClick={() => setIsOpen(!isOpen)}>
                  <Link href="#getintouch" legacyBehavior>
                    <a className="px-10 py-1 rounded-3xl bg-purple-500">
                      SAY HELLO
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
          </div>
        </motion.div>
      </nav>
    </div>
  );
};

export default Header;
