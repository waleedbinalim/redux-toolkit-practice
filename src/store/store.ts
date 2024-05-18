import { tasksReducer } from "@/slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { tasks: tasksReducer },
});
