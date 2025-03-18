import { Fragment } from "react";
import TechStack from "./components/TechStack";
import { Navbar } from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
// import GithubStats from "./components/GithubStats";
import About from "./components/About";
import GotoTop from "./components/GotoTop";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Fragment>
        <div className=" bg-slate-700  p-2 pt-10">
          <About />
          {/* Tech Stacks and Project */}
          <div className=" w-full ">
            <TechStack />

            <Projects />
            {/* <GithubStats /> */}

            <Contact />
          </div>
        </div>
      </Fragment>
      <GotoTop />
    </Fragment>
  );
}

export default App;
