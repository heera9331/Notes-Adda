import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <ul>
          {todos.map((todo) => {
            return <li key={todo.id}>
              {todo.text}
              <button
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                done
              </button> 
            </li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default Todos;
