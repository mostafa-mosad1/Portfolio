import { createContext, useEffect, useState } from "react";

export const ModeContext = createContext();

function ModeContextProvider({ children }) {
  const [mode, setMode] = useState("light");
  useEffect(() => {
    if (localStorage.getItem("mode") != null) {
      setMode(localStorage.getItem("mode"));
    } else {
      setMode("light");
    }
  }, []);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export default ModeContextProvider;
