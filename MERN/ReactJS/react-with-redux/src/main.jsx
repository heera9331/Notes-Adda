import ReactDOM from "react-dom/client";

import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Todos from "./components/Todos";
import AddTodos from "./components/AddTodo";

function App() {
  return (
    <>
      <Provider store={store}>
        <h1 className="text-5xl font-bold p-2 text-center">Redux Tool Kit</h1>
        <div className="container border mx-auto py-10">
          <Todos />
          <AddTodos />
        </div>
      </Provider>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
