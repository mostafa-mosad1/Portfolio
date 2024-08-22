import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import js from "../../assets/skills/js.png";
import jQuery from "../../assets/skills/jQuery.png";
import react from "../../assets/skills/react.png";
import router from "../../assets/skills/react-router.png";
import redux from "../../assets/skills/redux.png";
import git from "../../assets/skills/git.png";
import github from "../../assets/skills/github.png";
import bootstrap from "../../assets/skills/bootstrap.png";
import postman from "../../assets/skills/postman.png";
import npm from "../../assets/skills/npm.png";
import sass from "../../assets/skills/sass.png";
import webpack from "../../assets/skills/webpack.png";

function Skills() {
  return (
    <>
      <div className="container py-10">
        <h2 className="font-titleFont  space-x-2 flex items-center text-4xl">
          <p className="w-20 h-1 bg-white"></p>
          <p>Tech stack</p>
        </h2>
        <div className="flex flex-col  sm:flex-row flex-wrap gap-4 my-10">
          <div
            data-aos="fade-up-left"
            className="card  hover:bg-[#83dbff1a]  flex flex-wrap space-x-4 border-[2px] border-mainColor py-4 px-8"
          >
            <img src={html} className="w-8" alt="logo" />
            <h3 className="text-2xl font-semibold">Html</h3>
          </div>
          <div
            data-aos="fade-up-left"
            className="card  hover:bg-[#83dbff1a]  flex flex-wrap space-x-4 border-[2px] border-mainColor py-4 px-8"
          >
            <img src={css} className="w-8" alt="logo" />
            <h3 className="text-2xl font-semibold">CSS</h3>
          </div>
          
          <div
            data-aos="fade-up-left"
            className="card  hover:bg-[#83dbff1a]  flex flex-wrap space-x-4 border-[2px] border-mainColor py-4 px-8"
          >
            <img src={js} className="w-8" alt="logo" />
            <h3 className="text-2xl font-semibold">Javascript</h3>
          </div>
          <div
            data-aos="fade-up"
            className="card  hover:bg-[#83dbff1a]  flex flex-wrap space-x-4 border-[2px] border-mainColor py-4 px-8"
          >
            <img src={react} className="w-8" alt="logo" />
            <h3 className="text-2xl font-semibold">React JS</h3>
          </div>
          <div
            data-aos="fade-up-left"
            className="card  hover:bg-[#83dbff1a]  flex flex-wrap space-x-4 border-[2px] border-mainColor py-4 px-8"
          >
            <img src={jQuery} className="w-8 bg-white" alt="logo" />
            <h3 className="text-2xl font-semibold">jQuery</h3>
          </div>
          <div
            data-aos="fade-up"
            className="card  hover:bg-[#83dbff1a]  flex flex-wrap space-x-4 border-[2px] border-mainColor py-4 px-8"
          >
            <img src={bootstrap} className="w-8" alt="logo" />
            <h3 className="text-2xl font-semibold">Bootstrap</h3>
          </div>

          <div
            data-aos="fade-up"
            className="card  hover:bg-[#83dbff1a]  flex flex-wrap space-x-4 border-[2px] border-mainColor py-4 px-8"
          >
            <img src={router} className="w-8" alt="logo" />
            <h3 className="text-2xl font-semibold">Router</h3>
          </div>
          <div
            data-aos="fade-up-left"
            className="card  hover:bg-[#83dbff1a]  flex flex-wrap space-x-4 border-[2px] border-mainColor py-4 px-8"
          >
            <img src={sass} className="w-8" alt="logo" />
            <h3 className="text-2xl font-semibold">SASS</h3>
          </div>
          <div
            data-aos="fade-up"
            className="card  hover:bg-[#83dbff1a]  flex flex-wrap space-x-4 border-[2px] border-mainColor py-4 px-8"
          >
            <img src={redux} className="w-8" alt="logo" />
            <h3 className="text-2xl font-semibold">Redux</h3>
          </div>
          <div
            data-aos="fade-up-left"
            className="card  hover:bg-[#83dbff1a]  flex flex-wrap space-x-4 border-[2px] border-mainColor py-4 px-8"
          >
            <img src={webpack} className="w-8" alt="logo" />
            <h3 className="text-2xl font-semibold">Webpack</h3>
          </div>
        </div>
        <h2 className="font-titleFont  space-x-2 flex items-center text-4xl">
          <p className="w-20 h-1 bg-white"></p>
          <p>Tools used</p>
        </h2>
        <div className="flex flex-col  sm:flex-row flex-wrap gap-4 my-10">
          <div
            data-aos="fade-up-left"
            className="card  hover:bg-[#83dbff1a]  flex flex-wrap space-x-4 border-[2px] border-mainColor py-4 px-8"
          >
            <img src={git} className="w-8" alt="logo" />
            <h3 className="text-2xl font-semibold">Git</h3>
          </div>
          <div
            data-aos="fade-up"
            className="card  hover:bg-[#83dbff1a]  flex flex-wrap space-x-4 border-[2px] border-mainColor py-4 px-8"
          >
            <img src={github} className="w-8 bg-white" alt="logo" />
            <h3 className="text-2xl font-semibold">Github</h3>
          </div>
          <div
            data-aos="fade-up"
            className="card  hover:bg-[#83dbff1a]  flex flex-wrap space-x-4 border-[2px] border-mainColor py-4 px-8"
          >
            <img src={npm} className="w-8" alt="logo" />
            <h3 className="text-2xl font-semibold">NPM</h3>
          </div>
          <div
            data-aos="fade-up-left"
            className="card  hover:bg-[#83dbff1a]  flex flex-wrap space-x-4 border-[2px] border-mainColor py-4 px-8"
          >
            <img src={postman} className="w-8" alt="logo" />
            <h3 className="text-2xl font-semibold">Postman</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
// #83dbff1a
