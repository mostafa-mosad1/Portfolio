import TypeJs from "../TypeJs/TypeJs";
import me from "../../assets/me3.png";
import arrow from "../../assets/curved-arrow.svg";
import line from "../../assets/random-lines.svg";
import style from "../Home/Home.module.css";

function Home() {
  return (
    <>
      <div className=" md:container py-10 ">
        <div className="flex flex-col lg:flex-row  items-center justify-between  flex-wrap gap-y-10 lg:gap-0">
          <div data-aos="fade-right" className="w-6/12 order-2 space-y-4">
            <h2 className="text-4xl font-bold font-titleFont dark:text-white">
              Hello👋 I am
            </h2>
            <h2 className="text-4xl text-mainColor font-bold font-titleFont ">
              Mostafa Mosad
            </h2>
            <TypeJs />
            <div className=" lg:space-x-4">
              <button className="bg-mainColor  p-2 my-2 rounded-md w-full lg:w-fit hover:bg-white  hover:text-mainColor font-bold">
                Hire me
              </button>
              <button className=" border-mainColor border-[2px] w-full lg:w-fit  p-2 my-2 rounded-md hover:bg-mainColor hover:text-white font-bold">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1ruQIgKBAeQhU8xesY4YL_LyiXjfRB-EA/view?usp=sharing"
                >
                  Get Resume
                </a>
              </button>
            </div>
            <div className="flex justify-center lg:justify-start lg:items-start space-x-3 mt-4 text-2xl">
              <a target="_blank" href="mailto:mostafamosad246@gmail.com">
                <i className="border-mainColor hover:bg-mainColor hover:border-white rounded-full border-[2px] bg-gray-600/50 p-3 fa-regular fa-envelope"></i>{" "}
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mostafa-mosad-al-tonbary-41561429b/"
              >
                <i className="border-mainColor hover:bg-mainColor hover:border-white rounded-full border-[2px] bg-gray-600/50 p-3 fa-brands fa-linkedin-in"></i>
              </a>
              <a target="_blank" href="https://github.com/mostafa-mosad1">
                <i className="border-mainColor hover:bg-mainColor hover:border-white rounded-full border-[2px] bg-gray-600/50 p-3 fa-brands fa-github"></i>
              </a>
              <a target="_blank" href="https://wa.me/01207124605">
                <i className="border-mainColor hover:bg-mainColor hover:border-white rounded-full border-[2px] bg-gray-600/50 p-3 fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="w-6/12 mb-12  lg:mb-0 order-1 lg:order-4  flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8  justify-center items-center"
          >
            <div
              className={`relative  rounded-md   after:bg-indigo-900/50 dark:after:bg-white/80  p-1 ${style.img}`}
            >
              <img
                src={me}
                className=" relative z-10 size-full rounded-md"
                alt=""
              />
              <p
                className={`${style.squer}  dark:bg-mainColor bg-mainColor `}
              ></p>
              <p className="singur absolute -right-12 rotate-12 -z-1 bottom-5">
                <img src={line} alt="" />
              </p>
              <p className="arrow absolute lg:top-1/4  lg:-left-16  lg:rotate-90 z-30">
                <img src={arrow} alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
