import { itemApi } from "@/services";
import { tasksReducer } from "@/slice";
import { userReducer } from "@/slice/users-slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    users: userReducer,
    [itemApi.reducerPath]: itemApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(itemApi.middleware);
  },
});

export type ApplicationDispatch = typeof store.dispatch;

export type ApplicationState = ReturnType<typeof store.getState>;
// ^ Can NOT put in global state because it relies on store

/* 
  Why are we adding application state type?

  whenever we use the useSelector hook, there's no intellisense of TS for example

  ```
  const tasks = useSelector(state => state.tasks.entities)

  ```


  Fix: We could manually fix this by doing

  ```
  const tasks = useSelector<{ tasks: { entities: Task[] } }>(state => state.tasks.entities)
  
  ```


  PROBLEM???
  Everytime a schema gets updated, we have to update this everywhere... Pain!


  There is one more problem, we would now have to import application state everywhere.
  FIX: We use the power of react hooks (use-app-selector.ts)

*/
