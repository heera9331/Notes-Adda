/* eslint-disable react-refresh/only-export-components */
import React, { forwardRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { useRef, useState } from "react";

const InputField = forwardRef(function InputField(props, ref) {
  console.log(ref)
  return (
    <>
      <input type="text" ref={ref.current} />
    </>
  );
});

const App = () => {
  const text = useRef();

  return (
    <>
      <h1>forwordRef</h1>
      <InputField ref={text} var={"value"} />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
