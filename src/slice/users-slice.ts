import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

type UserType = {
  id: string;
  realName: string;
  tasks: string[];
  alterEgo: string;
};

type UserState = {
  entities: UserType[];
};

const initialState: UserState = {
  entities: [],
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
