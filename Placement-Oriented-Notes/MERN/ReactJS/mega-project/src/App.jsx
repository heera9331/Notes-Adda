import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { useEffect, useState } from "react";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Provider } from "react";
import store from "./store/store";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div className="min-h-screen">
      <Header />
      <Footer />
      <h1>ReactJS + Vite</h1>
    </div>
  ) : null;
}

export default App;
