import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { UserType, removeUser } from "./users-slice";

// STANDARD STUFF
export type TaskType = { id: string; title: string; user?: UserType["id"] };
export type TasksState = { entities: TaskType[] };
const initialState: TasksState = { entities: [] };

// OLD: CREATE TASK ACTION (SO WE DON'T NEED TO SPECIFY ID)
type DraftTask = Pick<TaskType, "title">;

// NEW: CUSTOM TYPE
// IF YOU WANT MORE PROPERTIES YOU CAN GO ```` RequireOnly<TaskType, "title" | "id"> ````
type DraftTask2 = RequireOnly<TaskType, "title">;

export const createTask = (draftTask: DraftTask): TaskType => {
  return { id: nanoid(), ...draftTask };
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state: TasksState, action: PayloadAction<DraftTask2>) => {
      const task = createTask(action.payload);
      state.entities.unshift(task);
      return state;
    },
    removeTask: (state: TasksState, action: PayloadAction<TaskType["id"]>) => {
      const index = state.entities.findIndex(
        (task) => task.id === action.payload
      );
      state.entities.splice(index, 1);
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeUser, (state, action) => {
      //WHEN YOU REMOVE USER YOU GOTTA REMOVE USER AS ASIGNEE FROM ALL TASKS
      const userId = action.payload;

      for (const tasks of state.entities) {
        if (tasks.id === userId) tasks.user = undefined;
      }
    });
  },
});

export const tasksReducer = tasksSlice.reducer;

export const { addTask, removeTask } = tasksSlice.actions;
