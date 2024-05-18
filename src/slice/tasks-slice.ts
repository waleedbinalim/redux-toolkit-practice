import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

// STANDARD STUFF
type TaskType = { id: string; title: string };
export type TasksState = { entities: TaskType[] };
const initialState: TasksState = { entities: [] };

// CREATE TASK ACTION (SO WE DON'T NEED TO SPECIFY ID)
type DraftTask = Pick<TaskType, "title">;

export const createTask = (draftTask: DraftTask): TaskType => {
  return { id: nanoid(), ...draftTask };
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state: TasksState, action: PayloadAction<DraftTask>) => {
      const task = createTask(action.payload);
      state.entities.unshift(task);
      return state;
    },
    removeTask: (state: TasksState, _action: PayloadAction<TaskType>) => {
      return state;
    },
  },
});

export const tasksReducer = tasksSlice.reducer;

export const { addTask, removeTask } = tasksSlice.actions;
