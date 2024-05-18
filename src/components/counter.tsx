import React, { useReducer } from "react";
import { counterReducer2, increment } from "../reducers";

const CounterComp: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer2, { count: 0 });

  return (
    <>
      <button onClick={() => dispatch(increment(1))}>
        count is {state.count}
      </button>
    </>
  );
};

export default CounterComp;
