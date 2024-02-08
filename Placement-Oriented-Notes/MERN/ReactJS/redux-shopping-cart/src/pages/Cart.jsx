import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../app/features/cartSlice";

function Product({ product }) {
  return (
    <div className="border-2 p-4 border-blue-300 rounded-md flex flex-col items-center justify-center hover:scale-110 transition duration-300 ease-in">
      <div className="h-[180px]">
        <img
          src={product.image}
          alt=""
          className="conver-object w-full h-full object-cover"
        />
      </div>
      <p className="text-l font-semibold p-2">
        {product.title.length < 20
          ? product.title
          : product.title.slice(0, 20) + "..."}
      </p>

      <div className="bottom-2 flex flex-row justify-around items-center gap-10 mt-4">
        <p className="font-semibold">{product.price + "₹"}</p>
      </div>
    </div>
  );
}

function Cart() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state);

  function calculateCost() {
    if (cart.length == 0) {
      return 0;
    }
    let cost = 0;
    products.forEach((product) => {
      cost += product.price;
    });
    return cost;
  }
  useEffect(() => {
    setProducts(cart);
    // console.log(cart);
  }, []);

  if (cart.length == 0) {
    return (
      <div className="flex items-center justify-center gap-4">
        <button className="bg-white text-red-900 group-hover:bg-red-700 transition duration-300 ease-in border-2 border-red-700 rounded-sm font-semibold p-1 hover:text-white hover:bg-red-900">
          <Link to={"/"}>Cart is Empty - Continue Shopping</Link>
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 my-4">
        {products.length !== 0 &&
          products.map((product, idx) => {
            return <Product product={product} key={idx} />;
          })}
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          className="bg-white text-red-900 group-hover:bg-red-700 transition duration-300 ease-in border-2 border-red-700 rounded-sm font-semibold p-1 hover:text-white hover:bg-red-900"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear Cart
        </button>
        <button className="bg-white text-blue-900 group-hover:bg-blue-700 transition duration-300 ease-in border-2 border-blue-700 rounded-sm font-semibold p-1 hover:text-white hover:bg-blue-900">
          Place Order Now {"₹"+calculateCost()}
        </button>
      </div>
    </>
  );
}

export default Cart;
