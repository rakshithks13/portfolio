"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { TiLocationArrow } from "react-icons/ti";
import img from "../assets/Rak1.jpeg";

export default function About() {
  // Explicitly adding spaces using `\u00A0` (non-breaking space)
  const name = "RAKSHITH\u00A0K\u00A0S".split("");

  return (
    <Fragment>
      <div
        id="home"
        className="my-10 mt-0 p-5 py-10 bg-slate-700 shadow-lg text-white bg-none
             md:flex md:justify-center md:gap-14 md:items-center md:shadow-2xl
             md:mt-0 md:pt-12 lg:justify-center lg:gap-28 lg:py-28 lg:opacity-90"
      >
        <div className="text-center flex flex-col items-center font-semibold">
          <div className="flex justify-center items-center">
            <img
              src={img}
              alt="Profile_Picture"
              className="w-40 h-40 rounded-full shadow-lg border-4 border-white
               md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-60 xl:h-60
               transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Animated Name with Hover Effect */}
          <motion.h1
            className="text-3xl mt-2 p-1 lg:text-4xl flex tracking-widest"
            style={{
              fontFamily: "'Courier New', monospace",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.1 }} // Slight zoom on hover
          >
            {name.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ opacity: 1, y: 0 }} // Re-run only when hovered
                transition={{ delay: index * 0.1, duration: 0.2 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <p className="p-1 text-lg lg:text-xl">Software Developer</p>
          <div className="flex items-center max-w-sm mt-2 font-medium text-center justify-center">
            <div>
              <TiLocationArrow />
            </div>
            <p className="pl-2">Bangalore, Karnataka</p>
          </div>
        </div>

        <div className="m-auto px-2 py-4 text-center text-xl text-justify max-w-md md:m-0 lg:max-w-xl lg:text-2xl xl:max-w-3xl">
          <p>
            Aspiring Full Stack Web Developer passionate about building clean,
            user-friendly experiences. Skilled in frontend development, program
            management, and software development, with hands-on experience in
            AWS. Actively seeking an opportunity to contribute to a dynamic
            startup, adapt quickly, and deliver impactful solutions.
          </p>
        </div>
      </div>
    </Fragment>
  );
}
