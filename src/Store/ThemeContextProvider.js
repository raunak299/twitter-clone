import themeContext from "./themeContext";
import { useState } from "react";

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("dark-theme");
  const themeHandler = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  const currValue = { theme, themeHandler };

  return (
    <themeContext.Provider value={currValue}>
      {props.children}
    </themeContext.Provider>
  );
}

export default ThemeContextProvider;
