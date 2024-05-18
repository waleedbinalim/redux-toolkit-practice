import { CounterComp } from "@/components";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <CounterComp />
      </Provider>
    </>
  );
}

export default App;
