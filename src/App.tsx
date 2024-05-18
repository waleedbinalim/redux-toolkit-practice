import { CounterComp, CreateTask } from "@/components";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <CounterComp />

        <div style={{ margin: "8px 0px" }} />

        <CreateTask />
      </Provider>
    </>
  );
}

export default App;
