import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { TaskType } from "./tasks-slice";
import { generateUsers } from "@/mock-server/mock-data-generator";

export type UserType = {
  id: string;
  realName: string;
  tasks: TaskType["id"][];
  alterEgo: string;
};

type UserState = {
  entities: UserType[];
};

const initialState: UserState = {
  entities: generateUsers(),
  // entities: [
  //   // MOCK USERS HERE
  //   { id: "1", realName: "Jared", tasks: [], alterEgo: "Ranger" },
  //   { id: "2", realName: "Solomon", tasks: [], alterEgo: "Fishcake" },
  //   { id: "3", realName: "Logan", tasks: [], alterEgo: "Chef" },
  // ],
};

type DraftUser = RequireOnly<UserType, "realName" | "alterEgo">;

const createUser = (draftUser: DraftUser): UserType => {
  return { id: nanoid(), tasks: [], ...draftUser };
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUser: (state, action: PayloadAction<UserType["id"]>) => {
      const index = state.entities.findIndex((_) => _.id === action.payload);
      state.entities.splice(index, 1);
      return state;
    },
    addUser: (state, action) => {
      const user = createUser(action.payload);
      state.entities.unshift(user);
      return state;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
