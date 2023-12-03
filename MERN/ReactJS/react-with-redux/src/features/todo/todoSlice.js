import { createSlice, nanoid } from "@reduxjs/toolkit";

// nanoid -> generate unique id

const initialState = {
  todos: [
    { id: 1, text: "Hello world" },
    { id: 2, text: "react.js" },
  ],
};

// reducers is an object -> contains properties and functions
// state - current state
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

// todoReducer -> imported into store
export default todoSlice.reducer;
