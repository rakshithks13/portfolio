import { Fragment } from "react";
import { TiLocationArrow } from "react-icons/ti";
import img from "../assets/rakshith.jpg";

export default function About() {
  return (
    <Fragment>
      <div
        id="home"
        className=" my-10 mt-0 p-5 py-10 bg-slate-700 shadow-lg  text-white  bg-none
             md:flex md:justify-center md:gap-14 md:items-center   md:shadow-2xl
             md:mt-0 md:pt-12  lg:justify-center lg:gap-28 lg:py-28 lg:opacity-90"
      >
        <div className=" text-center flex flex-col items-center font-semibold ">
          <div className=" md:pb-6">
            <img
              src={img}
              alt="Profile_Picture"
              className="m-auto w-40 h-40 rounded-full
                   md:w-48 md:h-48 lg:w-52 lg:h-52  xl:w-60 xl:h-60"
            />
          </div>
          <h1 className="text-3xl mt-2 p-1 lg:text-4xl ">Rakshith K S</h1>
          <p className="p-1 text-lg lg:text-xl">Software Developer</p>
          <div className="flex items-center max-w-sm  mt-2  font-medium text-center  justify-center ">
            <div>
              <TiLocationArrow />
            </div>
            <p className="pl-2">Bangalore, Karnataka</p>
          </div>
        </div>

        <div className=" m-auto px-2 py-4 text-center text-xl text-justify  max-w-md md:m-0 lg:max-w-xl lg:text-2xl xl:max-w-3xl">
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
