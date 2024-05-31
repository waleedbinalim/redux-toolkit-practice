import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  nanoid,
} from "@reduxjs/toolkit";
import { UserType, removeUser } from "./users-slice";
import { generateTasks } from "@/mock-server/mock-data-generator";

// STANDARD STUFF
export type TaskType = { id: string; title: string; user?: UserType["id"] };
export type TasksState = { entities: TaskType[]; loading: boolean };
const initialState: TasksState = { entities: generateTasks(), loading: false };

// OLD: CREATE TASK ACTION (SO WE DON'T NEED TO SPECIFY ID)
type DraftTask = Pick<TaskType, "title">;

// NEW: CUSTOM TYPE
// IF YOU WANT MORE PROPERTIES YOU CAN GO ```` RequireOnly<TaskType, "title" | "id"> ````
type DraftTask2 = RequireOnly<TaskType, "title">;

export const createTask = (draftTask: DraftTask): TaskType => {
  return { id: nanoid(), ...draftTask };
};

// TIME FOR ASYNC REDUX, First without RTK Query ==================================================
export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (): Promise<TaskType[]> => {
    const response = await fetch("api/tasks").then((res) => res.json());
    return response.entities;
  }
);
// ===============================================================================================

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
      // ACTIONS HERE WORKS FLAWLESSLY WITH TYPE SCRIPT
      const userId = action.payload;

      for (const tasks of state.entities) {
        if (tasks.id === userId) tasks.user = undefined;
      }
    });

    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = false;
    }); // Now use store.dispatch(fetchTasks()) outside component in required place

    builder.addCase(fetchTasks.pending, (state, _action) => {
      state.loading = true;
    });

    builder.addCase(fetchTasks.rejected, (state, _action) => {
      state.loading = true;
    });
  },
});

export const tasksReducer = tasksSlice.reducer;

export const { addTask, removeTask } = tasksSlice.actions;
