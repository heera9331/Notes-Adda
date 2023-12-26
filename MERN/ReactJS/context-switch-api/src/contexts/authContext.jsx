/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const authContext = createContext();

export const useAuthContext = () => {
  return useContext(authContext);
};

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const logout = () => {
    setIsLogin(false);
  };

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  return (
    <authContext.Provider
      value={{ isLogin, setIsLogin, user, setUser, logout }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
