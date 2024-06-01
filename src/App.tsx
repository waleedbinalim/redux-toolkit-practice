import { NavbarComp } from "@/components";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./constants";
import { makeServer } from "./mock-server";
import {
  CounterPage,
  HomePage,
  ItemsPage,
  TasksPage,
  UsersPage,
} from "./pages";
import { store } from "./store";

makeServer();

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path={appRoutes.home} element={<HomePage />} />

        {/* SHARED LAYOUT YO  */}
        <Route element={<NavbarComp />}>
          <Route path={appRoutes.counter} element={<CounterPage />} />
          <Route path={appRoutes.users} element={<UsersPage />} />
          <Route path={appRoutes.tasks} element={<TasksPage />} />
          <Route path={appRoutes.items} element={<ItemsPage />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
