/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Product from "../components/Product";
import { useSelector, useDispatch } from "react-redux";
import { TiTick } from "react-icons/ti";

function Home() {
  const [products, setProducts] = useState([]);
  const [click, setClick] = useState(false);
  function fetchData() {
    fetch("https://fakestoreapi.com/products")
      .then((value) =>
        console.log(value.json().then((data) => setProducts(data)))
      )
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 ">
        {products.map((product, idx) => (
          <Product key={idx} product={product} />
        ))}
      </div>
    </>
  );
}

export default Home;
