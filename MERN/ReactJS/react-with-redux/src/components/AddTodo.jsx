import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [task, setTask] = React.useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <>
      <form
        action="#"
        onSubmit={() => {
          addTodoHandler;
        }}
      >
        <div className="container">
          <label htmlFor="text">Task</label>
          <input
            type="text"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
        </div>

        <button>Add</button>
      </form>
    </>
  );
}

export default AddTodo;
