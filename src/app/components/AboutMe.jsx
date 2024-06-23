import avatar from "../../../public/assets/images/avatar.jpg";
import Image from "next/image";

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
        <div data-aos="fade-up" className="md:w-[300px]">
          <Image
            src={avatar}
            alt=""
            className="rounded-2xl w-[300px] mix-blend-darken "
            width={300}
            height={300}
          />
        </div>

        <div
          data-aos="zoom-out-right"
          className="text-white md:flex-1 text-base md:text-xl tracking-wide leading-6 md:leading-9 flex flex-col gap-5 "
        >
          <div className="w-fit">
            <h1 className="text-5xl md:text-9xl tracking-wide font-bold">
              HELLO!
            </h1>
            <div className="w-full h-[5px] bg-purple-500"></div>
          </div>
          <h1>
            I&apos;m <span className="text-purple-500">Au Duy Thong</span>, a
            passionate and creative Front End Developer with over 1 year of
            experience in building and developing user interfaces for websites
            and web applications. I am always seeking new challenges and
            constantly learning to improve my skills.
          </h1>
          <h1>
            Thank you for visiting my portfolio! I look forward to the
            opportunity to work and learn from you. Thank you for reviewing my
            portfolio, and I hope to collaborate in the future.
          </h1>
          {/* <div>
            <h1 className="text-2xl font-bold">For contact</h1>
            <span>alo</span>
            <span>alo</span>
            <span>alo</span>
            <span>alo</span>
          </div> */}
          {/* <div>
            <a
              href="../CV-AuDuyThong-Fresher-Frontend_ENG.pdf"
              download="CV-AuDuyThong-Fresher-Frontend_ENG.pdf"
              className="rounded-2xl bg-purple-500 px-5 py-2"
            >
              Download CV
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
