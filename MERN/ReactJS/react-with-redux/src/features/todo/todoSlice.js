import { createSlice, nanoid } from "@reduxjs/toolkit";

// nanoid -> generate unique id

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello world",
    },
    {
      id: 2,
      text: "React redux",
    },
  ],
};

// reducers is a object -> contains properties and functions
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
      state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      for (let i = 0; i < state.todos.length; i++) {
        if (state.todos[i].id === action.payload.id) {
          state.todos[i].text = action.payload.text;
          break;
        }
      }
    },
  },
});


export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;
