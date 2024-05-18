import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
    addTask: (state: TasksState, action: PayloadAction<TaskType>) => {
      state.entities.push(action.payload);
      return state;
    },
    removeTask: (state: TasksState, action: PayloadAction<TaskType>) => {
      return state;
    },
  },
});

export const tasksReducer = tasksSlice.reducer;

export const { addTask, removeTask } = tasksSlice.actions;
