/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../app/features/cartSlice";

// eslint-disable-next-line react/prop-types
function Product({ product }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  function addToCart(product) {
    console.log("added", product);
    dispatch(addItem(product));
    console.log(cart);
  }

  function removeToCart(product) {
    console.log("removed", product);
    dispatch(removeItem(product));
    console.log(cart);
  }

  useEffect(() => {}, [product]);

  return (
    <>
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
          {cart.some((p) => p.id === product.id) ? (
            <button
              className="bg-white text-blue-900 group-hover:bg-blue-700 transition duration-300 ease-in border-2 border-blue-700 rounded-sm font-semibold p-1 hover:text-white hover:bg-blue-900"
              onClick={() => {
                removeToCart(product);
              }}
            >
              Remove
            </button>
          ) : (
            <button
              className="bg-white text-blue-900 group-hover:bg-blue-700 transition duration-300 ease-in border-2 border-blue-700 rounded-sm font-semibold p-1 hover:text-white hover:bg-blue-900"
              onClick={() => {
                addToCart(product);
              }}
            >
              Add to Cart
            </button>
          )}

          <p className="font-semibold">{"₹" + product.price}</p>
        </div>
      </div>
    </>
  );
}

export default Product;
