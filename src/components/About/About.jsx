import Lottie from "lottie-react";
import me from "../../assets/animation/me.json";

function About() {
  return (
    <>
      <div className=" container mx-auto">
        <div className="flex flex-col  lg:flex-row justify-between items-center gap-4  lg:translate-y-[50%] ">
          <div className="w-full order-2 lg:order-1 space-y-10 lg:space-y-0 lg:w-2/4 lg:space-y-4">
            <p className="text-2xl">
              I am{" "}
              <span className="text-3xl font-titleFont font-bold text-mainColor">
                Mosatafa Mosad
              </span>{" "}
              Frontend Developer and I have experience in the field of web
              development and design, More than one year of experience in
              frontend .
            </p>
            <p className="text-2xl">
              I am constantly striving to improve my skills and knowledge. I
              believe that ongoing training and personal projects are key to
              success. I am committed to staying up-to-date with the latest
              developments in my field and continuously expanding my knowledge
              and skills.
            </p>
          </div>
          <div className=" w-3/4 lg:w-1/4 order-1  lg:order-2">
            <Lottie loop="" animationData={me} />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
