import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import freshCart from "../../assets/projects/freshCart.png";
import freshCart2 from "../../assets/projects/freshCart2.png";
import freshCart3 from "../../assets/projects/freshCart3.png";
import freshCart4 from "../../assets/projects/freshCart4.png";
import freshCart5 from "../../assets/projects/freshCart5.png";
import freshCart6 from "../../assets/projects/freshCart6.png";

import party1 from "../../assets/projects/party1.png";
import party2 from "../../assets/projects/party2.png";
import party3 from "../../assets/projects/party3.png";

import game from "../../assets/projects/game1.png";
import game2 from "../../assets/projects/game2.png";
import game3 from "../../assets/projects/game3.png";

import crud1 from "../../assets/projects/crud1.png";
import crud2 from "../../assets/projects/crud2.png";
import crud3 from "../../assets/projects/crud3.png";

import start1 from "../../assets/projects/start1.png";
import start2 from "../../assets/projects/start2.png";
import start3 from "../../assets/projects/start5.png";
import start4 from "../../assets/projects/start4.png";

import route1 from "../../assets/projects/route1.png";
import route2 from "../../assets/projects/route2.png";
import route3 from "../../assets/projects/route3.png";

import yummy1 from "../../assets/projects/yummy1.png";
import yummy2 from "../../assets/projects/yummy2.png";
import yummy3 from "../../assets/projects/yummy3.png";
import yummy4 from "../../assets/projects/yummy4.png";
import yummy5 from "../../assets/projects/yummy5.png";

import quiz1 from "../../assets/projects/quiz1.png";
import quiz2 from "../../assets/projects/quiz2.png";
import quiz3 from "../../assets/projects/quiz3.png";

import fun1 from "../../assets/projects/fun1.png";
import fun2 from "../../assets/projects/fun2.png";
import fun3 from "../../assets/projects/fun3.png";

import book1 from "../../assets/projects/book1.png";
import book2 from "../../assets/projects/book2.png";
import book3 from "../../assets/projects/book3.png";

import delicious1 from "../../assets/projects/delicious1.png";
import delicious2 from "../../assets/projects/delicious2.png";
import delicious3 from "../../assets/projects/delicious3.png";
import delicious4 from "../../assets/projects/delicious4.png";
import delicious5 from "../../assets/projects/delicious5.png";

import social1 from "../../assets/projects/social1.png";
import social2 from "../../assets/projects/social2.png";
import social3 from "../../assets/projects/social3.png";
import social4 from "../../assets/projects/social5.png";
import social5 from "../../assets/projects/social6.png";

import wheater from "../../assets/projects/wheater.png";

import Qurank1 from "../../assets/projects/Qurank1.png";
import Qurank2 from "../../assets/projects/Qurank2.png";
import Qurank3 from "../../assets/projects/Qurank3.png";
import Qurank4 from "../../assets/projects/Qurank4.png";
import Qurank5 from "../../assets/projects/Qurank5.png";
import Qurank6 from "../../assets/projects/Qurank6.png";
import Qurank7 from "../../assets/projects/Qurank7.png";


import ecommerce1 from "../../assets/projects/dashbord1.png";
import ecommerce2 from "../../assets/projects/dashbord2.png";
import ecommerce3 from "../../assets/projects/dashbord3.png";
import ecommerce4 from "../../assets/projects/dashbord4.png";
import ecommerce5 from "../../assets/projects/dashbord5.png";
import ecommerce6 from "../../assets/projects/dashbord6.png";

import todo1 from "../../assets/projects/todo1.png";
import todo2 from "../../assets/projects/todo2.png";
import todo3 from "../../assets/projects/todo3.png";
import todo4 from "../../assets/projects/todo4.png";
import todo5 from "../../assets/projects/todo5.png";

import medical1 from "../../assets/projects/medical1.png";
import medical2 from "../../assets/projects/medical2.png";
import medical3 from "../../assets/projects/medical3.png";
import medical4 from "../../assets/projects/medical4.png";

import petcare1 from "../../assets/projects/petcare1.png";
import petcare2 from "../../assets/projects/petcare2.png";
import petcare3 from "../../assets/projects/petcare3.png";
import petcare4 from "../../assets/projects/petcare4.png";
import petcare5 from "../../assets/projects/petcare5.png";
import petcare6 from "../../assets/projects/petcare6.png";
import petcare7 from "../../assets/projects/petcare7.png";
import petcare8 from "../../assets/projects/petcare8.png";







const categories = [
  {
    name: "All",
    posts: [
      {
        id: 18,
        title: "PetCare ",
        image: [petcare1, petcare2, petcare3, petcare4,petcare5, petcare6, petcare7, petcare8],
        description:
          ``,
        technologies:
          "React - TaillwindCSS - TypeScript - react_router_dom - react-slick - Axios - redux - redux toolkit query - Shadcn/ui ",
        Githup: "https://github.com/mostafa-mosad1/PetCare-final-graduation",
        Demo: "https://drive.google.com/file/d/1nT5j1CEA5yjtOmunvflOWKAzEpbY_8v-/view",
      },
      {
        id: 17,
        title: "Medical-Islands-Company ",
        image: [medical1, medical2, medical3, medical4],
        description:
          `A task management web application built with React, using Redux for state management and Material UI for an attractive interface. The app displays a task list with features to add, edit, delete, and categorize tasks by priority or due date. It interacts with the Dummy JSON API using Axios to simulate operations and updates data in real-time via Socket.io-client. The application supports instant updates and synchronization across connected devices, ensuring a seamless user experience.`,
        technologies:
          "Redux - Material UI - Axios - Dummy JSON - Socket.io-client",
        Githup: "https://github.com/mostafa-mosad1/Medical-Islands-Task",
        Demo: "https://drive.google.com/file/d/1nT5j1CEA5yjtOmunvflOWKAzEpbY_8v-/view",
      },
      {
        id: 16,
        title: "Todo-App ",
        image: [todo1, todo2, todo3, todo4, todo5],
        description:
          `The TODO project is an application designed to help you manage daily activities and tasks. It 
allows you to add new activities, mark them as completed, and edit or delete them as 
needed. The app also provides an option to view all added activities, making it easier to track 
progress and prioritize tasks effectively. `,
        technologies:
          "next.js - MongoDB - shadcn/ui - Clerk  - TypeScript   ",
        Githup: "https://github.com/mostafa-mosad1/Todo-App",
        Demo: "https://todo-app-beta-nine-51.vercel.app/",
      },
      {
        id: 15,
        title: "Ecommerce-with-Dashboard ",
        image: [ecommerce1, ecommerce2, ecommerce3, ecommerce4, ecommerce5, ecommerce6],
        description:
          `The project is an e-commerce website where users can browse and purchase products, with a 
shopping cart feature to manage items before checkout. It includes an admin dashboard for 
managing products and categories, allowing for easy addition, deletion, and updates. `,
        technologies:
          "React - TaillwindCSS - TypeScript - strapi.io  - react_router_dom - react-slick - Axios - redux - redux toolkit query - Chakra UI ",
        Githup: "https://github.com/mostafa-mosad1/Ecommerce-with-Dashboard",
        Demo: "https://ecommerce-with-dashboard-sage.vercel.app/Home",
      },
      {
        id: 14,
        title: "Qurank",
        image: [Qurank1, Qurank2, Qurank3, Qurank4, Qurank5, Qurank6, Qurank7],
        description:
          "A comprehensive Quran website offering recitations, multiple interpretations for each verse, related Hadiths, and live Quran radio streaming. It aims to facilitate Quran understanding and reflection through educational and interactive tools.",
        technologies:
          "React - TaillwindCSS - TypeScript - Headlessui - real Apis - fontawesome - react-router-dom - react-slick - Axios",
        Githup: "https://github.com/mostafa-mosad1/Qurank",
        Demo: "https://qurank.vercel.app/",
      },
      {
        id: 1,
        title: "Social App",
        image: [social1, social2, social3, social4, social5],
        description:
          "Developed a Next.js application using Redux Toolkit for state management, React Hook Form for form handling, and Axios for API interactions. The platform features a userauthentication system allowing users to log in, view their own and others' posts, andmanage posts and comments. Implemented robust functionalities for post creation,deletion, and commenting.",
        technologies:
          "NextJs - Typescript - Reduxjs/toolkit- TaillwindCSS - React-hook-form - Axios - headlessui",
        Githup: "https://github.com/mostafa-mosad1/web-social-app",
        Demo: "https://social-app-chi.vercel.app/",
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
          "reactjs - Tailwindcss - fontawesome - react-router-dom - react-hooks",
        Githup: "https://github.com/mostafa-mosad1/START-FRAMEWORK",
        Demo: "https://mostafa-mosad1.github.io/START-FRAMEWORK/",
      },
      {
        id: 5,
        title: "Route-Tech",
        image: [route1, route2, route3],
        description:
          "This project is seems to dashbord, it's contain table to display customer transactions and draw a chart to show the Percentage of each transaction. Key features include search by name of customer and search by the amount of transaction",
        technologies: "HTML - CSS - Bootstrap - JS - fetch API and chart-js",
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
          "html - css - javascript - bootstrap - real Apis - fontawesome - toastr.js",
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
          "html - css - javascript - bootstrap - real Apis - fontawesome  - toastr.js",
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
      id: 18,
      title: "PetCare ",
      image: [petcare1, petcare2, petcare3, petcare4,petcare5, petcare6, petcare7, petcare8],
      description:
        ``,
      technologies:
        "React - TaillwindCSS - TypeScript - react_router_dom - react-slick - Axios - redux - redux toolkit query - Shadcn/ui ",
      Githup: "https://github.com/mostafa-mosad1/PetCare-final-graduation",
      Demo: "https://drive.google.com/file/d/1nT5j1CEA5yjtOmunvflOWKAzEpbY_8v-/view",
    },
    {
      id: 17,
      title: "Medical-Islands-Company ",
      image: [medical1, medical2, medical3, medical4],
      description:
        `A task management web application built with React, using Redux for state management and Material UI for an attractive interface. The app displays a task list with features to add, edit, delete, and categorize tasks by priority or due date. It interacts with the Dummy JSON API using Axios to simulate operations and updates data in real-time via Socket.io-client. The application supports instant updates and synchronization across connected devices, ensuring a seamless user experience.`,
      technologies:
        "Redux - Material UI - Axios - Dummy JSON - Socket.io-client",
      Githup: "https://github.com/mostafa-mosad1/Medical-Islands-Task",
      Demo: "https://drive.google.com/file/d/1nT5j1CEA5yjtOmunvflOWKAzEpbY_8v-/view",
    },
      {
        id: 15,
        title: "Ecommerce-with-Dashboard ",
        image: [ecommerce1, ecommerce2, ecommerce3, ecommerce4, ecommerce5, ecommerce6],
        description:
          `The project is an e-commerce website where users can browse and purchase products, with a 
shopping cart feature to manage items before checkout. It includes an admin dashboard for 
managing products and categories, allowing for easy addition, deletion, and updates. `,
        technologies:
          "React - TaillwindCSS - TypeScript - strapi.io  - react_router_dom - react-slick - Axios - redux - redux toolkit query - Chakra UI ",
        Githup: "https://github.com/mostafa-mosad1/Ecommerce-with-Dashboard",
        Demo: "https://ecommerce-with-dashboard-sage.vercel.app/Home",
      },  
      {
        id: 14,
        title: "Qurank",
        image: [Qurank1, Qurank2, Qurank3, Qurank4, Qurank5, Qurank6, Qurank7],
        description:
          "A comprehensive Quran website offering recitations, multiple interpretations for each verse, related Hadiths, and live Quran radio streaming. It aims to facilitate Quran understanding and reflection through educational and interactive tools.",
        technologies:
          "React - TaillwindCSS - TypeScript - Headlessui - real Apis - fontawesome - react-router-dom - react-slick - Axios",
        Githup: "https://github.com/mostafa-mosad1/Qurank",
        Demo: "https://qurank.vercel.app/",
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
    ],
  },
  {
    name: "Next.js",
    posts: [
      {
        id: 16,
        title: "Todo-App ",
        image: [todo1, todo2, todo3, todo4, todo5],
        description:
          `The TODO project is an application designed to help you manage daily activities and tasks. It 
allows you to add new activities, mark them as completed, and edit or delete them as 
needed. The app also provides an option to view all added activities, making it easier to track 
progress and prioritize tasks effectively. `,
        technologies:
          "next.js - MongoDB - shadcn/ui - Clerk  - TypeScript   ",
        Githup: "https://github.com/mostafa-mosad1/Todo-App",
        Demo: "https://todo-app-beta-nine-51.vercel.app/",
      },
      {
        id: 1,
        title: "Social App",
        image: [social1, social2, social3, social4, social5],
        description:
          "Developed a Next.js application using Redux Toolkit for state management, React Hook Form for form handling, and Axios for API interactions. The platform features a userauthentication system allowing users to log in, view their own and others' posts, andmanage posts and comments. Implemented robust functionalities for post creation,deletion, and commenting.",
        technologies:
          "NextJs - Typescript - Reduxjs/toolkit- TaillwindCSS - React-hook-form - Axios - headlessui",
        Githup: "https://github.com/mostafa-mosad1/web-social-app",
        Demo: "https://social-app-chi.vercel.app/",
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
      <div className="flex relative h-screen w-full justify-center pt-20 px-4">
        <div className="w-full container">
          <TabGroup>
            <TabList className="flex sticky top-2 z-40 inset-x-0  bg-navBG rounded-full px-6 py-2  w-fit mx-auto text-center space-x-4 font-semibold flex-wrap flex-row justify-center items-center text-2xl gap-4">
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
