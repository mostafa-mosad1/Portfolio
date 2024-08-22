import React,{useEffect} from "react";
import Typed from "typed.js";

function TypeJs() {
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Web Developer"],
      typeSpeed: 150,
      loop:true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="App text-4xl  dark:text-white  font-bold">
      <span ref={el} />
    </div>
  );
}

export default TypeJs;
