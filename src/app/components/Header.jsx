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
            <Link href="/">LOGO</Link>
          </div>

          <ul className="md:flex gap-10 text-white font-medium text-lg hidden">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link
                href="/blog/hello-world "
                className="py-2 px-5 bg-purple-600 rounded-3xl"
              >
                GET IN TOUCH
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
            <Link href="/">LOGO</Link>
          </div>
          <div ref={scope}>
            <nav className="menu md:hidden">
              <ul className="flex flex-col text-4xl font-black text-white gap-10 px-5">
                <li className="-tracking-wider">HOME</li>
                <li className="-tracking-wider">ABOUT</li>
                <li className="-tracking-wider">
                  <Link href="/blog/hello-world ">GET IN TOUCH</Link>
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
