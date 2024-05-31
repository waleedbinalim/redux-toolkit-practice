import {
  CounterComp,
  CreateTask,
  ItemsList,
  TasksList,
  UsersList,
} from "@/components";
import { Provider } from "react-redux";
import { store } from "./store";
import { makeServer } from "./mock-server";
import {
  CounterPage,
  HomePage,
  ItemsPage,
  TasksPage,
  UsersPage,
} from "./pages";
import { Link, Route, Routes } from "react-router-dom";
import { appNav, appRoutes } from "./constants";

makeServer();

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-[40px] bg-slate-50 drop-shadow-lg px-12">
        <ul className="flex px-4 py-6 justify-between">
          {appNav.map((navItem) => {
            return (
              <Link
                to={navItem.path}
                className="font-bold text-blue-500 cursor-pointer"
                key={navItem.path}
              >
                {navItem.name}
              </Link>
            );
          })}
        </ul>
      </div>

      <Routes>
        <Route path={appRoutes.home} element={<HomePage />} />
        <Route path={appRoutes.counter} element={<CounterPage />} />
        <Route path={appRoutes.users} element={<UsersPage />} />
        <Route path={appRoutes.tasks} element={<TasksPage />} />
        <Route path={appRoutes.items} element={<ItemsPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
