import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useContext, useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use loadSlim, install the "@tsparticles/slim" package too.
import { ModeContext } from "../Context/ModeContext";

const An = () => {
  const [init, setInit] = useState(false);
const {mode} = useContext(ModeContext)




  useEffect(() => {
    initParticlesEngine(async (engine) => {
      
      await loadSlim(engine);
      
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          // value:mode=="light" ? "#1E0235" : "#000"
          value:"#000"
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: mode=="light" ? "#fff" : "#fff"
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: false,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 8 },
        },
      },
      detectRetina: true,
    }),
    [mode]
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};
export default An;
