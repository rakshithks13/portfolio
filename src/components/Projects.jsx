import { Fragment } from "react";
// import { GrGithub } from "react-icons/gr";
import { RiExternalLinkFill } from "react-icons/ri";
import { projectList } from "../assets/projects";
import Heading from "./Heading";

function Projects() {
  return (
    <Fragment>
      <div id="project">
        <Heading text="Projects" />
        <div
          className="flex flex-col gap-12 transition-all md:gap-9 justify-center items-center  py-10  text-white
        md:flex-row md:flex-wrap md:items-stretch md:py-14  xl:justify-center xl:px-10"
        >
          {projectList.map((project) => (
            <div
              key={project.name}
              className="shadow-sm shadow-cyan-300 rounded-md bg-slate-800
              max-w-lg flex flex-col items-center justify-start text-center p-2 md:w-max xl:my-4"
            >
              <div className="w-full p-2">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64"
                />
              </div>
              <div className=" flex-grow flex flex-col justify-between  px-2  ">
                <div>
                  <h1 className="text-2xl my-2 font-semibold">
                    {project.name}
                  </h1>
                  <p className="py-2 text-lg">{project.desc}</p>
                </div>
                <div className="bg-slate-700 py-4 rounded-lg">
                  <div className="text-xl">Tech Stacks</div>
                  <div className=" py-4 flex justify-center gap-6 flex-wrap ">
                    {project.tech_stacks_icons.map((stack, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center gap-2 justify-between "
                      >
                        <div>{stack}</div>
                        <div className=" font-bold rounded-md px-2">
                          {" "}
                          {project.tech_stacks[i]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center gap-7 py-4">
                  <a
                    href={project.deployed_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex flex-col gap-1 items-center">
                      <RiExternalLinkFill size="1.7rem" />
                      <p>Live</p>
                    </div>
                  </a>
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Projects;
