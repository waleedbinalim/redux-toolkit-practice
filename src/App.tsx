import { CounterComp, CreateTask, TasksList, UsersList } from "@/components";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <CounterComp />

        <div style={{ margin: "8px 0px" }} />

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <CreateTask />
          </div>
          <div className="md:w-1/2">
            <TasksList />
          </div>
        </div>

        <UsersList />
      </Provider>
    </>
  );
}

export default App;
