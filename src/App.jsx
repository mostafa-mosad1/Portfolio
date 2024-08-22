import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education.JSX";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ModeContextProvider from "./Context/ModeContext";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles



AOS.init();

const routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "Project", element: <Projects /> },
      { path: "education", element: <Education /> },
      { path: "contact", element: <Contact /> },
      { path: "skills", element: <Skills /> },
    ],
  },
]);

function App() {
  return (
  
      <ModeContextProvider>
      <RouterProvider router={routers}>
        <Layout  />
      </RouterProvider>
    </ModeContextProvider>
    
  );
}

export default App;
