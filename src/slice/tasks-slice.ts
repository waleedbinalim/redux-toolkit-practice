import { createSlice } from "@reduxjs/toolkit";

type TaskType = {
  to: string;
  text: string;
};

export type TasksState = {
  entities: TaskType[];
};

const initialState: TasksState = {
  entities: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state) => {
      return state;
    },
    removeTask: (state) => {
      return state;
    },
  },
});
