import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiAmazonaws,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import interior from "../assets/interiors.png";
import travel from "../assets/travel.png";

const [html, css, javascript, react, nodejs, mongodb, redux, tailwind, Aws] = [
  <AiFillHtml5 size="2.2rem" color="#ff7b53e0" />,
  <SiCss3 size="2rem" color="#7b7bf7" />,
  <SiJavascript size="2rem" color="#3ca73c" />,
  <SiReact size="2rem" color="#61dafb" />,
  <IoLogoNodejs size="2rem" color="green" />,
  <SiMongodb size="2rem" color="green" />,
  <SiRedux size="2rem" color="#7b7bf7" />,
  <SiTailwindcss size="2rem" color="#ff7b53e0" />,
  <SiAmazonaws size="2rem" color="#ff7b53e0" />,
];

export const projectList = [
  {
    image: interior,
    name: "Interior Design",
    desc: `A modern interior design platform offering customized solutions for homes and offices. It combines aesthetics with functionality, ensuring space optimization and premium finishes. The platform provides a seamless experience from design selection to execution.`,
    tech_stacks_icons: [
      Aws,
      javascript,
      react,
      redux,
      nodejs,
      mongodb,
      tailwind,
    ],
    tech_stacks: [
      "AWS",
      "Javascript",
      "React",
      "Redux",
      "NodeJs",
      "MongoDB",
      "TailwindCSS",
    ],
    deployed_link: "https://skyfinityinteriors.com/",
  },
  {
    image: travel,
    name: "Travel",
    desc: `A dynamic travel platform that helps users discover and book personalized trips effortlessly. It offers curated destinations, real-time booking options, and seamless itinerary planning. The platform ensures a hassle-free travel experience with expert recommendations. `,
    tech_stacks_icons: [javascript, react, redux, mongodb, tailwind],
    tech_stacks: ["Javascript", "React", "Redux", "MongoDB", "TailwindCSS"],
    deployed_link: "https://saipravas.in/",
  },
];
