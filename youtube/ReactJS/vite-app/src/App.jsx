/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

const App = () => {
  // useRef hook - provide direct access of dom element, it allows you to persist values between renders
  let [count, setCount] = useState(0);
  let inputRef = useRef(null);

  useEffect(() => {
    console.log("re-render");
  }, [count]);
  return (
    <div>
      <h1>React Hooks</h1>
      <p>Value is {count}</p>
      <input ref={inputRef} type="text" value={count} />

      <div>
        <button
          onClick={() => {
            inputRef.current.value = Number(count) + 1;
            setCount(count + 1);
          }}
        >
          increment
        </button>
      </div>
    </div>
  );
};
/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}*/

export default App;
