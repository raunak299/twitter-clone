import React from "react";

const themeContext = React.createContext({
  theme: "",
  themeHandler: () => {},
});

export default themeContext;
