import Lottie from "lottie-react";
import edu from "../../assets/animation/education.json";

function Education() {
  return (
    <>
      <div className="flex container justify-between items-center py-10 flex-wrap flex-col lg:flex-row  ">
        <div className="w-2/4 lg:w-1/4">
          <Lottie loop="" animationData={edu} />
        </div>
        <div className="w-full lg:w-1/2 space-y-4">
          <div data-aos="flip-right" className="card bg-gray-500 p-2 rounded-md hover:shadow-mainColor shadow-md">
            <div className="p-6">
              <div className="flex space-x-2 items-center flex-wrap">
                <i className="fa-solid fa-graduation-cap text-lg"></i>
                <p className="text-lg">2019 - 2023</p>
              </div>
              <p className="text-lg">
                Faculty of Computer & Information Sciences.
              </p>
              <p className="text-lg">department of Informatin Technology.</p>
              <a
                target="_blank"
                href="https://www.linkedin.com/school/mansoura-university-official/"
              >
                <p className=" font-titleFont  text-mainColor text-2xl ">
                  Mansoura University{" "}
                </p>
              </a>
            </div>
          </div>
          <div data-aos="flip-right" className="card bg-gray-500 p-2 rounded-md hover:shadow-mainColor shadow-md">
            <div className="p-6">
              <div className="flex space-x-2 items-center flex-wrap">
                <i className="fa-solid fa-graduation-cap text-lg"></i>
                <p className="text-lg">March 2024 - August 2024</p>
              </div>
              <p className="text-lg">Diploma, Front End Developer</p>

              <a
                target="_blank"
                href="https://www.linkedin.com/company/routeacademy/mycompany/"
              >
                <p className=" font-titleFont  text-mainColor text-2xl ">
                  Diploma, Front End Developer
                </p>
              </a>
            </div>
          </div>
          <div data-aos="flip-right" className="card bg-gray-500 p-2 rounded-md hover:shadow-mainColor shadow-md">
            <div className="p-6">
              <div className="flex space-x-2 items-center flex-wrap">
                <i className="fa-solid fa-graduation-cap text-lg"></i>
                <p className="text-lg">Sep. 2023 – Jul. 2023 </p>
              </div>
              <p className="text-lg">training course Flutter</p>
              <div className="flex flex-wrap justify-between">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/school/information-technology-institute-iti-/"
                >
                  <p className=" font-titleFont  text-mainColor text-2xl ">
                    Information Technology Institute
                  </p>
                </a>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1foQkNICSgWHD_yy7rCyjmlfrX3NMSdWN/view"
                >
                  <p className=" font-titleFont  text-mainColor text-2xl ">
                    Certification
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div data-aos="flip-right" className="card bg-gray-500 p-2 rounded-md hover:shadow-mainColor shadow-md">
            <div className="p-6">
              <div className="flex space-x-2 items-center flex-wrap">
                <i className="fa-solid fa-graduation-cap text-lg"></i>
                <p className="text-lg">Feb. 2024 – Dec. 2023 </p>
              </div>
              <p className="text-lg">training course</p>

              <div className="flex justify-between flex-wrap ">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/gdsc-depauw/"
                >
                  <p className=" font-titleFont  text-mainColor text-2xl ">
                    Google Developer Student Clubs
                  </p>
                </a>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1EG7_r1WQLQ9NFTHVoG9vg75BfN01KoSD/view"
                >
                  <p className=" font-titleFont  text-mainColor text-2xl ">
                    Certification
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
