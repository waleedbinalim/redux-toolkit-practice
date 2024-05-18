import { useReducer } from "react";
import { counterReducer2, increment } from "./reducers";

function App() {
  const [state, dispatch] = useReducer(counterReducer2, { count: 0 });

  return (
    <>
      <button onClick={() => dispatch(increment(1))}>
        count is {state.count}
      </button>
    </>
  );
}

export default App;
