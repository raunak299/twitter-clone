import { useState } from "react";
import authContext from "./auth-context";

const AuthContextProvider = (props) => {
  const [login, setLogin] = useState("");
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const loginHandler = (data) => {
    localStorage.setItem("token", data.encodedToken);
    localStorage.setItem("userId", data.createdUser.username);
    localStorage.setItem("email", data.createdUser["_id"]);
    setLogin(data.encodedToken);
    setUserId(data.createdUser.username);
    setEmail(data.createdUser["_id"]);
  };
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    setLogin("");
    setUserId("");
    setEmail("");
  };

  const currState = {
    login,
    userId,
    loginHandler,
    logoutHandler,
  };

  return (
    <authContext.Provider value={currState}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
