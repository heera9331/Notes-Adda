import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { FaShoppingCart } from "react-icons/fa";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { cart } = useSelector((state) => state);
  

  return (
    <header className="flex justify-between items-center px-2 py-2 my-4 bg-stone-900 text-white w-full h-full
    ">
      <Link to={""}>
        <h1 className="text-4xl font-bold underline">Redux Cart</h1>
      </Link>
      <Link to={"cart"}>
        <div className="flex">
          <FaShoppingCart className="size-6" />
          {cart.length != 0 && (
            <sup className="bg-red-900 p-2 text-white rounded-lg">
              {" "}
              {cart.length}
            </sup>
          )}
        </div>
      </Link>
    </header>
  );
};

function App() {
  return (
    <div className="max-w-[1080px] m-auto mb-4">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Home />
              </div>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
