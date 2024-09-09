import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputErrorMessage from "./../InputErrorMessage";
import Button from "../Button";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Lottie from "lottie-react";
import cont from "../../assets/animation/contact.json";

function Contact() {
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm("service_h9yzvsa", "template_m0a1phc", form.current, {
        publicKey: "5JKFCwSLV6r6KKqdX",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const schema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .max(15, "max character is 15")
      .min(5, "min character is 5"),
    email: yup.string().required("email is required").email("not vaild email"),
    message: yup
      .string()
      .max(200, "max character is 200")
      .min(5, "min character is 5"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = async (inputsData) => {
    console.log(inputsData);
    sendEmail();
  };

  return (
    <>
      <div className="container flex flex-col lg:flex-row flex-wrap pb-10 items-center lg:justify-between">
        <div className=" order-2 lg:order-1 lg:w-1/2 flex flex-col items-start justify-start">
          <div className="w-full my-10 p-4 bg-400 text-black dark:text-black">
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col flex-wrap space-y-2">
                <label className="ps-3 text-2xl text-white font-semibold">
                  Name
                </label>
                <input
                  className="p-1 ps-3 text-2xl text-black font-serif rounded-md"
                  {...register("name")}
                />
                <InputErrorMessage msg={errors.name?.message} />
                <label className=" text-2xl text-white font-semibold">
                  Email
                </label>
                <input
                  className="p-1 ps-3 rounded-md text-2xl text-black font-serif"
                  {...register("email")}
                />
                <InputErrorMessage msg={errors.email?.message} />
                <label className="ps-3 text-2xl text-white font-semibold">
                  Message
                </label>
                <textarea className="p-1 ps-3 rounded-md text-2xl text-black font-serif" cols={10} rows={8} {...register("message")} />
                <InputErrorMessage msg={errors.message?.message} />
                <Button
                  type="submit"
                  name={"Send"}
                  className={"text-white bg-mainColor my-4"}
                />
              </div>
            </form>
          </div>
          <div className="flex space-x-3 mx-auto text-2xl">
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
        <div className="lg:w-2/4 w-3/4 order-1 lg:order-2">
          <Lottie animationData={cont} />
        </div>
      </div>
    </>
  );
}

export default Contact;
