import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import An from "../An";

function Layout() {
  return (
    <>
    <div className="">

      <div className="  text-white   absolute inset-0  dark:text-white z-50 ">
        <NavBar />
        <Outlet></Outlet>
      </div>
        <An />
    </div>
    </>
  );
}

export default Layout;
