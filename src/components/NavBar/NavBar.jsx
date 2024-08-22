import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ModeContext } from "../../Context/ModeContext";
import me from "../../assets/me3.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const { mode, setMode } = useContext(ModeContext);
  let bodyTheme = document.getElementById("sasa");
  useEffect(() => {
    if (mode == "light") {
      bodyTheme.classList.add("light");
      bodyTheme.classList.remove("dark");
    } else {
      bodyTheme.classList.add("dark");
      bodyTheme.classList.remove("light");
    }
  }, [mode]);
  return (
    <>
      <div className="pc border-b-mainColor border-transparent border-[1px] dark:bg-black bg-[#1E0235]">
        <div className="hidden lg:flex container justify-between py-5  text-white font-titleFont">
          <div className="flex">
          
          <h1 className="text-2xl font-bold text-mainColor">Mostafa Mosad</h1>
            
          </div>
          <ul className=" text-xl bg-navBG rounded-full px-6 py-2 text-center space-x-4 font-semibold">
            <NavLink to={""}>Home</NavLink>
            <NavLink to={"about"}>About</NavLink>
            <NavLink to={"Project"}>Project</NavLink>
            <NavLink to={"education"}>Education</NavLink>
            <NavLink to={"skills"}>Skills</NavLink>
            <NavLink to={"contact"}>Contact</NavLink>
          </ul>
          <i
            onClick={() => {
              if (mode == "light") {
                localStorage.setItem("mode", "dark");
                setMode("dark");
              } else {
                setMode("light");
                localStorage.setItem("mode", "light");
              }
            }}
            className={`fa-solid ${
              mode == "light" ? "fa-moon" : "fa-sun"
            } text-4xl `}
          ></i>
        </div>
      </div>
      <div className="mobile dark:bg-backGround bg-cyan-700">
        <div className="flex flex-col">
          <div className="lg:hidden  flex container justify-between py-5  text-white font-titleFont">
            <h1 className="text-2xl font-bold">Mostafa Mosad</h1>
            <div className=" space-x-4">
              <i
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="fa-solid fa-bars text-4xl"
              ></i>
              <i
                onClick={() => {
                  if (mode == "light") {
                    localStorage.setItem("mode", "dark");
                    setMode("dark");
                  } else {
                    setMode("light");
                    localStorage.setItem("mode", "light");
                  }
                }}
                className={`fa-solid ${
                  mode == "light" ? "fa-moon" : "fa-sun"
                } text-4xl `}
              ></i>
            </div>
          </div>
          {isOpen && (
            <div className="">
            <ul data-aos="flip-up" className="  flex flex-col  relative z-10  text-xl text-white bg-navBG rounded-md w-2/4 mx-auto mb-5 font-titleFont  p-12 font-semibold">
              <NavLink className={"border-b-2 w-full my-2 py-1 "} to={""}>
                Home
              </NavLink>
              <NavLink className={"border-b-2 w-full my-2 py-1 "} to={"about"}>
                About
              </NavLink>
              <NavLink className={"border-b-2 w-full my-2 py-1 "} to={"Project"}>
                Project
              </NavLink>
              <NavLink className={"border-b-2 w-full my-2 py-1 "} to={"education"}>
                Education
              </NavLink>
              <NavLink className={"border-b-2 w-full my-2 py-1 "} to={"skills"}>
                Skills
              </NavLink>
              <NavLink className={"border-b-2 w-full my-2 py-1 "} to={"contact"}>
                Contact
              </NavLink>
              <i
                onClick={() => setIsOpen(false)}
                className="fa-brands fa-x-twitter absolute top-4 right-4 hover:rotate-180 duration-1000 hover:text-red-500"
              ></i>
            </ul>
            <div
                onClick={() => setIsOpen(false)}
                className=" fixed -z-0 inset-0 bg-[#32323A]/50 "
              ></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default NavBar;
