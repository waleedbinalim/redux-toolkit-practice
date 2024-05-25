import React, { useReducer } from "react";
import { counterReducer2, increment, decrement, reset } from "../reducers";

const CounterComp: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer2, { count: 0 });

  return (
    <>
      <div className="p-4 bg-blue-100">
        <h1 className="text-center uppercase py-4 font-semibold">
          This is a counter component
        </h1>

        <p className="text-center font-bold mb-2">Count: {state.count}</p>

        <div className="grid place-content-center">
          <div className="flex gap-2">
            <button
              className="py-2 px-4 bg-blue-500 text-white rounded-lg"
              onClick={() => dispatch(increment(1))}
            >
              Increment
            </button>
            <button
              className="py-2 px-4 bg-blue-500 text-white rounded-lg"
              onClick={() => dispatch(decrement(1))}
            >
              Decrement
            </button>
            <button
              className="py-2 px-4 bg-blue-500 text-white rounded-lg"
              onClick={() => dispatch(reset())}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterComp;
