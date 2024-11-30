import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import An from "../An";



function Layout() {
  return (
    <>
      <div className="absolute inset-0 text-white dark:text-white">
        <div className="relative z-10">
          <NavBar />
         <div className = " mt-20">
         <Outlet />
           </div>
        </div>
        <An />
      </div>
    </>
  );
}



export default Layout;

