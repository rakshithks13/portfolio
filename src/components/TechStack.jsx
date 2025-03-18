import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiChakraui,
  SiRedux,
  SiPostgresql,
  SiPython,
  SiAmazonaws,
  SiVuedotjs,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import Heading from "./Heading";

const data = [
  { name: "React", icon: <SiReact size="2rem" color="#61dafb" /> },
  { name: "Javascript", icon: <SiJavascript size="2rem" color="#f7df1e" /> },
  { name: "AWS", icon: <SiAmazonaws size="2rem" color="#FF9900" /> },
  { name: "NodeJs", icon: <IoLogoNodejs size="2rem" color="#83CD29" /> },
  { name: "Redux", icon: <SiRedux size="2rem" color="#764ABC" /> },
  { name: "Tailwind", icon: <SiTailwindcss size="2rem" color="#38BDF8" /> },
  { name: "Vue.js", icon: <SiVuedotjs size="2rem" color="#42B883" /> },
  { name: "Chakra UI", icon: <SiChakraui size="2rem" color="#319795" /> },
  { name: "HTML", icon: <SiHtml5 size="2rem" color="#E34F26" /> },
  { name: "CSS", icon: <SiCss3 size="2rem" color="#1572B6" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size="2rem" color="#336791" /> },
  { name: "Python", icon: <SiPython size="2rem" color="#3776AB" /> },
];

function TechStack() {
  return (
    <div id="techstack" className="py-10 flex flex-col items-center">
      <Heading text="Tech Stack" />

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-6">
        {data.map((el) => (
          <div
            key={el.name}
            className="flex flex-col items-center bg-white/10 backdrop-blur-lg rounded-2xl p-4 transition-transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full shadow-md">
              {el.icon}
            </div>
            <p className="text-white mt-3 text-lg font-semibold">{el.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
