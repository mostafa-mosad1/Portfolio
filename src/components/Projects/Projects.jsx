import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import freshCart from "../../assets/ptojects/freshCart.png";
import freshCart2 from "../../assets/ptojects/freshCart2.png";
import freshCart3 from "../../assets/ptojects/freshCart3.png";
import freshCart4 from "../../assets/ptojects/freshCart4.png";
import freshCart5 from "../../assets/ptojects/freshCart5.png";
import freshCart6 from "../../assets/ptojects/freshCart6.png";

import party1 from "../../assets/ptojects/party1.png";
import party2 from "../../assets/ptojects/party2.png";
import party3 from "../../assets/ptojects/party3.png";

import game from "../../assets/ptojects/game1.png";
import game2 from "../../assets/ptojects/game2.png";
import game3 from "../../assets/ptojects/game3.png";

import crud1 from "../../assets/ptojects/crud1.png";
import crud2 from "../../assets/ptojects/crud2.png";
import crud3 from "../../assets/ptojects/crud3.png";

import start1 from "../../assets/ptojects/start1.png";
import start2 from "../../assets/ptojects/start2.png";
import start3 from "../../assets/ptojects/start5.png";
import start4 from "../../assets/ptojects/start4.png";

import route1 from "../../assets/ptojects/route1.png";
import route2 from "../../assets/ptojects/route2.png";
import route3 from "../../assets/ptojects/route3.png";

import yummy1 from "../../assets/ptojects/yummy1.png";
import yummy2 from "../../assets/ptojects/yummy2.png";
import yummy3 from "../../assets/ptojects/yummy3.png";
import yummy4 from "../../assets/ptojects/yummy4.png";
import yummy5 from "../../assets/ptojects/yummy5.png";

import quiz1 from "../../assets/ptojects/quiz1.png";
import quiz2 from "../../assets/ptojects/quiz2.png";
import quiz3 from "../../assets/ptojects/quiz3.png";

import fun1 from "../../assets/ptojects/fun1.png";
import fun2 from "../../assets/ptojects/fun2.png";
import fun3 from "../../assets/ptojects/fun3.png";

import book1 from "../../assets/ptojects/book1.png";
import book2 from "../../assets/ptojects/book2.png";
import book3 from "../../assets/ptojects/book3.png";

import delicious1 from "../../assets/ptojects/delicious1.png";
import delicious2 from "../../assets/ptojects/delicious2.png";
import delicious3 from "../../assets/ptojects/delicious3.png";
import delicious4 from "../../assets/ptojects/delicious4.png";
import delicious5 from "../../assets/ptojects/delicious5.png";

import social1 from "../../assets/ptojects/social1.png";
import social2 from "../../assets/ptojects/social2.png";
import social3 from "../../assets/ptojects/social3.png";
import social4 from "../../assets/ptojects/social5.png";
import social5 from "../../assets/ptojects/social6.png";

import wheater from "../../assets/ptojects/wheater.png";

const categories = [
  {
    name: "All",
    posts: [
      {
        id: 1,
        title: "Social App",
        image: [social1, social2, social3, social4, social5],
        description:
          "Developed a Next.js application using Redux Toolkit for state management, React Hook Form for form handling, and Axios for API interactions. The platform features a userauthentication system allowing users to log in, view their own and others' posts, andmanage posts and comments. Implemented robust functionalities for post creation,deletion, and commenting.",
        technologies:
          "NextJs - Typescript - Reduxjs/toolkit- TaillwindCSS - React-hook-form - Axios - headlessui",
        Githup: "https://github.com/mostafa-mosad1/web-social-app",
        Demo: "https://web-social-app-six.vercel.app/",
      },
      {
        id: 2,
        title: "fresh Cart",
        image: [
          freshCart,
          freshCart2,
          freshCart3,
          freshCart4,
          freshCart5,
          freshCart6,
        ],
        description:
          "This project is an e-commerce website for selling products. Key features include Products, Categories, Brands listings, add-to-cart and remove-from-cart functionalities,add-to-Washlist and remove-from-Washlist functionalities, user authentication (sign-up and login) and hadling forget password. this project implemented withBackend by using Apis.",
        technologies:
          " reactjs, Tailwindcss, fontawesome, react-router-dom, aos, react-slick, react-hooks, Axios, react Query",
        Githup: "https://github.com/mostafa-mosad1/freshCart",
        Demo: "https://fresh-cart-five-delta.vercel.app/home",
      },
      {
        id: 3,
        title: "CRUD-SYSTEM-TS",
        image: [crud1, crud2, crud3],
        description:
          "This React and TypeScript project is designed for managing products, featuring functionality to add items with attributes like price, category, image, colors, and description. It uses Headless UI for accessible components, TailwindCSS for modern styling, and UUID for generating unique product identifiers.",
        technologies:
          " React - TaillwindCSS - React HOOKS - TypeScript - Headlessui",
        Githup: "https://github.com/mostafa-mosad1/CRUD-SYSTEM-TS",
        Demo: "https://crud-system-ts.vercel.app/",
      },
      {
        id: 4,
        title: "START-FRAMEWORK",
        image: [start1, start2, start3, start4],
        description:
          "This project is a self website portfolio used to manage projects, skills and information it help the user to marketing for him self.",
        technologies:
          "reactjs, Tailwindcss, fontawesome, react-router-dom, react-hooks",
        Githup: "https://github.com/mostafa-mosad1/START-FRAMEWORK",
        Demo: "https://mostafa-mosad1.github.io/START-FRAMEWORK/",
      },
      {
        id: 5,
        title: "Route-Tech",
        image: [route1, route2, route3],
        description:
          "This project is seems to dashbord, it's contain table to display customer transactions and draw a chart to show the Percentage of each transaction. Key features include search by name of customer and search by the amount of transaction",
        technologies: "HTML, CSS, Bootstrap,JS,fetch API and chart-js",
        Githup: "https://github.com/mostafa-mosad1/Route-Tech",
        Demo: "https://mostafa-mosad1.github.io/Route-Tech/",
      },
      {
        id: 6,
        title: "Yummy",
        image: [yummy1, yummy2, yummy3, yummy4, yummy5],
        description:
          "This project is a restaurant website for making and delevering fast meals. Key features include search by name of meal, search by first letter of meal, display categories of meal ,display meals for each area and disply ingrediants for each meal. this project build with single page and this project implemented withBackend by using Apis.",
        technologies:
          "html, css, javascript, bootstrap, fontawesome , jQuery , real Apis",
        Githup: "https://github.com/mostafa-mosad1/Yummy",
        Demo: "https://mostafa-mosad1.github.io/Yummy/",
      },
      {
        id: 7,
        title: "Quiz App",
        image: [quiz1, quiz2, quiz3],
        description:
          "This project is a simple website. With this app, you can Make your own quizzes , Take quizzes by entering a special code . It's designed to be easy to use and fun for everyone!. ",
        technologies:
          "html, css, javascript, bootstrap,real Apis,fontawesome ,toastr.js",
        Githup: "https://github.com/mostafa-mosad1/Quiz-App",
        Demo: "https://mostafa-mosad1.github.io/Quiz-App/",
      },
      {
        id: 8,
        title: "GAME-REVIEWS",
        image: [fun1, fun2, fun3],
        description:
          "This project is a gmaes website. Key features include Register, login, home and details pages implemented withBackend by using Apis, it has dark and light mode and it has guard authentication and security.",
        technologies:
          "html, css, javascript, bootstrap,real Apis,fontawesome ,toastr.js",
        Githup: "https://github.com/mostafa-mosad1/Fun-World-Sidte",
        Demo: "https://mostafa-mosad1.github.io/Fun-World-Sidte/",
      },

      {
        id: 9,
        title: "wheather app",
        image: [wheater, wheater],
        description:
          "wheatherwheatherwheather wheatherwheatherwheather wheatherwheatherwheatherwheather wheather",
        technologies:
          "html, css, javascript, bootstrap,fontawesome , real Apis ",
        Githup: "https://github.com/mostafa-mosad1/wheather-API",
        Demo: "https://mostafa-mosad1.github.io/wheather-API/",
      },
      {
        id: 10,
        title: "Bookmark-with-undo",
        image: [book1, book2, book3],
        description:
          "This project is a CRUd website. Key features include create, remove, update, display and undo product",
        technologies: "html , css , javascript , bootstrap , fontawesome ",
        Githup: "https://github.com/mostafa-mosad1/Boookmark-with-undo",
        Demo: "https://mostafa-mosad1.github.io/Boookmark-with-undo/",
      },
      {
        id: 11,
        title: "Delicious",
        image: [delicious1, delicious2, delicious3, delicious4, delicious5],
        description:
          "This project is a restaurant website for making and delevering fast meals. This project build with single page ",
        technologies: "html, css, javascript , fontawesome , bootstrap ",
        Githup: "https://github.com/mostafa-mosad1/Delicious",
        Demo: "https://mostafa-mosad1.github.io/Delicious/",
      },
      {
        id: 12,
        title: "Egyption-Party",
        image: [party1, party2, party3],
        description: "This project is an event website.",
        technologies: "html, css, javascript, bootstrap, jquery",
        Githup: "https://github.com/mostafa-mosad1/Egyption-Party",
        Demo: "https://mostafa-mosad1.github.io/Egyption-Party/",
      },
      {
        id: 13,
        title: "Rock-paper-scissors-game",
        image: [game, game2, game3],
        description: "Games.",
        technologies: "html, css, javascript",
        Githup: "https://github.com/mostafa-mosad1/Rock-paper-scissors-game",
        Demo: "https://mostafa-mosad1.github.io/Rock-paper-scissors-game/",
      },
    ],
  },
  {
    name: "JavaScript",
    posts: [
      {
        id: 1,
        title: "Route-Tech",
        image: [party1, party2, party3],
        description:
          "This project is seems to dashbord, it's contain table to display customer transactions and draw a chart to show the Percentage of each transaction. Key features include search by name of customer and search by the amount of transaction",
        technologies: "HTML, CSS, Bootstrap,JS,fetch API and chart-js",
        Githup: "https://github.com/mostafa-mosad1/Route-Tech",
        Demo: "https://mostafa-mosad1.github.io/Route-Tech/",
      },
      {
        id: 2,
        title: "Yummy",
        image: [yummy1, yummy2, yummy2, yummy4, yummy5],
        description:
          "This project is a restaurant website for making and delevering fast meals. Key features include search by name of meal, search by first letter of meal, display categories of meal ,display meals for each area and disply ingrediants for each meal. this project build with single page and this project implemented withBackend by using Apis.",
        technologies:
          "html, css, javascript, bootstrap, fontawesome , jQuery , real Apis",
        Githup: "https://github.com/mostafa-mosad1/Yummy",
        Demo: "https://mostafa-mosad1.github.io/Yummy/",
      },
      {
        id: 3,
        title: "Quiz App",
        image: [quiz1, quiz2, quiz3],
        description:
          "This project is a simple website. With this app, you can Make your own quizzes , Take quizzes by entering a special code . It's designed to be easy to use and fun for everyone!. ",
        technologies:
          "html, css, javascript, bootstrap,real Apis,fontawesome ,toastr.js",
        Githup: "https://github.com/mostafa-mosad1/Quiz-App",
        Demo: "https://mostafa-mosad1.github.io/Quiz-App/",
      },
      {
        id: 4,
        title: "GAME-REVIEWS",
        image: [fun1, fun2, fun3],
        description:
          "This project is a gmaes website. Key features include Register, login, home and details pages implemented withBackend by using Apis, it has dark and light mode and it has guard authentication and security.",
        technologies:
          "html, css, javascript, bootstrap,real Apis,fontawesome ,toastr.js",
        Githup: "https://github.com/mostafa-mosad1/Fun-World-Sidte",
        Demo: "https://mostafa-mosad1.github.io/Fun-World-Sidte/",
      },

      {
        id: 5,
        title: "wheather app",
        image: [wheater, wheater],
        description:
          "wheatherwheatherwheather wheatherwheatherwheather wheatherwheatherwheatherwheather wheather",
        technologies:
          "html, css, javascript, bootstrap,fontawesome , real Apis ",
        Githup: "https://github.com/mostafa-mosad1/wheather-API",
        Demo: "https://mostafa-mosad1.github.io/wheather-API/",
      },
      {
        id: 6,
        title: "Bookmark-with-undo",
        image: [book1, book2, book3],
        description:
          "This project is a CRUd website. Key features include create, remove, update, display and undo product",
        technologies: "html , css , javascript , bootstrap , fontawesome ",
        Githup: "https://github.com/mostafa-mosad1/Boookmark-with-undo",
        Demo: "https://mostafa-mosad1.github.io/Boookmark-with-undo/",
      },
      {
        id: 11,
        title: "Delicious",
        image: [delicious1, delicious2, delicious3, delicious4, delicious5],
        description:
          "This project is a restaurant website for making and delevering fast meals. This project build with single page ",
        technologies: "html, css, javascript , fontawesome , bootstrap ",
        Githup: "https://github.com/mostafa-mosad1/Delicious",
        Demo: "https://mostafa-mosad1.github.io/Delicious/",
      },
      {
        id: 7,
        title: "Rock-paper-scissors-game",
        image: [game, game2, game3],
        description: "Games.",
        technologies: "html, css, javascript",
        Githup: "https://github.com/mostafa-mosad1/Rock-paper-scissors-game",
        Demo: "https://mostafa-mosad1.github.io/Rock-paper-scissors-game/",
      },
    ],
  },
  {
    name: "jQuery",
    posts: [
      {
        id: 1,
        title: "Yummy",
        image: [yummy1, yummy2, yummy3, yummy4, yummy5],
        description:
          "This project is a restaurant website for making and delevering fast meals. Key features include search by name of meal, search by first letter of meal, display categories of meal ,display meals for each area and disply ingrediants for each meal. this project build with single page and this project implemented withBackend by using Apis.",
        technologies:
          "html, css, javascript, bootstrap, fontawesome , jQuery , real Apis",
        Githup: "https://github.com/mostafa-mosad1/Yummy",
        Demo: "https://mostafa-mosad1.github.io/Yummy/",
      },
      {
        id: 2,
        title: "Egyption-Party",
        image: [party1, party2, party3],
        description: "This project is an event website.",
        technologies: "html, css, javascript, bootstrap, jquery",
        Githup: "https://github.com/mostafa-mosad1/Egyption-Party",
        Demo: "https://mostafa-mosad1.github.io/Egyption-Party/",
      },
    ],
  },
  {
    name: "React",
    posts: [
      {
        id: 2,
        title: "fresh Cart",
        image: [
          freshCart,
          freshCart2,
          freshCart3,
          freshCart4,
          freshCart5,
          freshCart6,
        ],
        description:
          "This project is an e-commerce website for selling products. Key features include Products, Categories, Brands listings, add-to-cart and remove-from-cart functionalities,add-to-Washlist and remove-from-Washlist functionalities, user authentication (sign-up and login) and hadling forget password. this project implemented withBackend by using Apis.",
        technologies:
          " reactjs, Tailwindcss, fontawesome, react-router-dom, aos, react-slick, react-hooks, Axios, react Query",
        Githup: "https://github.com/mostafa-mosad1/freshCart",
        Demo: "https://fresh-cart-five-delta.vercel.app/home",
      },
      {
        id: 3,
        title: "CRUD-SYSTEM-TS",
        image: [crud1, crud2, crud3],
        description:
          "This React and TypeScript project is designed for managing products, featuring functionality to add items with attributes like price, category, image, colors, and description. It uses Headless UI for accessible components, TailwindCSS for modern styling, and UUID for generating unique product identifiers.",
        technologies:
          " React - TaillwindCSS - React HOOKS - TypeScript - Headlessui",
        Githup: "https://github.com/mostafa-mosad1/CRUD-SYSTEM-TS",
        Demo: "https://crud-system-ts.vercel.app/",
      },
      {
        id: 4,
        title: "START-FRAMEWORK",
        image: [start1, start2, start3, start4],
        description:
          "This project is a self website portfolio used to manage projects, skills and information it help the user to marketing for him self.",
        technologies:
          "reactjs, Tailwindcss, fontawesome, react-router-dom, react-hooks",
        Githup: "https://github.com/mostafa-mosad1/START-FRAMEWORK",
        Demo: "https://mostafa-mosad1.github.io/START-FRAMEWORK/",
      },
    ],
  },
  {
    name: "Next.js",
    posts: [
      {
        id: 1,
        title: "Social App",
        image: [social1, social2, social3, social4, social5],
        description:
          "Developed a Next.js application using Redux Toolkit for state management, React Hook Form for form handling, and Axios for API interactions. The platform features a userauthentication system allowing users to log in, view their own and others' posts, andmanage posts and comments. Implemented robust functionalities for post creation,deletion, and commenting.",
        technologies:
          "NextJs - Typescript - Reduxjs/toolkit- TaillwindCSS - React-hook-form - Axios - headlessui",
        Githup: "https://github.com/mostafa-mosad1/web-social-app",
        Demo: "https://web-social-app-six.vercel.app/",
      },
    ],
  },
];

export default function Projects() {
  var settings = {
    autoplay: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="flex h-screen w-full justify-center pt-20 px-4">
        <div className="w-full container">
          <TabGroup>
            <TabList className="flex flex-wrap flex-row justify-center items-center text-2xl gap-4">
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  className="rounded-full py-1 px-3  font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
                >
                  {name}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="mt-3">
              {categories.map(({ name, posts }) => (
                <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
                    {posts.map((post) => (
                      <div
                        data-aos="flip-up"
                        key={post.id}
                        className="bg-gray-700  mx-auto w-full p-5  border-mainColor border-2 rounded-md"
                      >
                        <div className="flex  flex-col ">
                          <div className="">
                            <div className="flex pb-2 lg:pb-4 flex-wrap justify-between">
                              <div className="text-2xl hover:text-mainColor uppercase  tracking-[1px]">
                                {post.title}
                              </div>
                              <div className="space-x-4 text-2xl">
                                <a target="_blank" href={post.Githup}>
                                  <i className="fa-brands fa-github cursor-pointer hover:text-mainColor text-3xl "></i>
                                </a>
                                <a target="_blank" href={post.Demo}>
                                  <i className="fa-solid fa-link cursor-pointer hover:text-mainColor text-3xl "></i>
                                </a>
                              </div>
                            </div>
                            <div className="overflow-hidden pb-2 lg:pb-0 xl:h-[250px]">
                              <Slider {...settings}>
                                {post.image.map((element, ind) => (
                                  <div key={ind} className="my-8">
                                    <img
                                      src={element}
                                      className="w-full"
                                      alt={element}
                                    />
                                  </div>
                                ))}
                              </Slider>
                            </div>
                            <div className="my-4  overflow-auto capitalize  h-30">
                              <span className="text-mainColor font-bold text-1xl  me-2">
                                Description:
                              </span>
                              {post.description}
                            </div>
                          </div>
                          <div className="capitalize">
                            <span className="text-mainColor font-bold text-1xl me-2">
                              Technologies :
                            </span>
                            {post.technologies}
                          </div>
                        </div>
                      </div>
                    ))}
                  </ul>
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </div>

      {/* <div className="bg-red-500  mx-auto w-1/2 p-5 border border-mainColor border-2 rounded-md">
        <div className="flex h-[400px] flex-col justify-between">
          <div className="">
            <div className="flex flex-wrap justify-between">
              <div className="text-2xl uppercase font-titleFont">CRUD</div>
              <div className="space-x-4 text-2xl">
                <i className="fa-brands fa-github"></i>
                <i className="fa-solid fa-link"></i>
              </div>
            </div>
            <div className=""></div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              ea. Quae, aliquid ipsum earum sint autem repellendus
              exercitationem itaque fugit sequi mollitia natus, enim magni ipsam
              ab, voluptatibus velit at!
            </div>
          </div>
          <div className="">
            ReactJs - TaillwindCSS - React Slick - AOS Library
          </div>
        </div>
      </div> */}
    </>
  );
}
