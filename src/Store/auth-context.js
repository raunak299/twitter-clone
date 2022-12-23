import { createContext } from "react";

const authContext = createContext({
  login: "",
  userId: "",
  email: "",
  loginHandler: () => {},
  logoutHandler: () => {},
});

export default authContext;
