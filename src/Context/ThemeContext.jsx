import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, settheme] = useState("light");
  const toggletheme = () => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    toggletheme();
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, settheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
