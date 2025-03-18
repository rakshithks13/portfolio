import GitHubCalendar from "react-github-calendar";
import Heading from "./Heading";

function GithubStats() {
  return (
    <div>
      <Heading text=" Github Stats and Contribution" />
      <div className="p-4 py-10 my-2 text-white ">
        <div className="w-full flex justify-center py-8 text-lg ">
          <GitHubCalendar
            username="rakshithks13"
            year={new Date().getFullYear()}
          />
        </div>
        <div className="py-8 flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-center">
          <a href="https://github.com/rakshithks13">
            <img
              src="https://github-readme-stats.vercel.app/api?username=rakshithks13&show_icons=true&hide=&count_private=true&title_color=14b8a6&text_color=ffffff&icon_color=0891b2&bg_color=64748b&hide_border=true&show_icons=true"
              alt="rakshithks13's GitHub stats"
            />
          </a>

          <a href="https://github.com/rakshithks13">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=rakshithks13&stroke=ffffff&background=64748b&ring=14b8a6&fire=14b8a6&currStreakNum=ffffff&currStreakLabel=14b8a6&sideNums=ffffff&sideLabels=ffffff&dates=ffffff&hide_border=true"
              alt="rakshithks13's GitHub contribution stats"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default GithubStats;
