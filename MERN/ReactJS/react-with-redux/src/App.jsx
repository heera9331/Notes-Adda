import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Todos from "./components/Todos";
import AddTodos from "./components/AddTodo";

function App() {
  return (
    <>
      <Provider store={store}>
        <h1>Redux Tool Kit</h1>

        <Todos />
        <AddTodos />
      </Provider>
    </>
  );
}

export default App;
