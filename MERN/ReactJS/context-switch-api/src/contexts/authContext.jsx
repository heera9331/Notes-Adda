import { createContext, useState } from "react";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(null);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  return (
    <authContext.Provider value={{ isLogin, setIsLogin, user, setUser }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
