import React, { useReducer, useRef } from "react";
import {
  counterReducer2,
  incrementCounter,
  decrementCounter,
  resetCounter,
  addCounterByAmount,
} from "../reducers";

const CounterComp: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer2, { count: 0 });

  const inputRef = useRef<HTMLInputElement>(null);

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
              className="py-2 px-4 bg-green-600 text-white rounded-lg"
              onClick={() => dispatch(incrementCounter(1))}
            >
              Increment
            </button>
            <button
              className="py-2 px-4 bg-red-600 text-white rounded-lg"
              onClick={() => dispatch(decrementCounter(1))}
            >
              Decrement
            </button>
            <button
              className="py-2 px-4 bg-blue-500 text-white rounded-lg"
              onClick={() => dispatch(resetCounter())}
            >
              Reset
            </button>
          </div>

          <div className="mt-2">
            <p className="mb-2">Add by a specific amount</p>
            <div className="flex gap-2">
              <input
                type="number"
                className="rounded-lg px-4 py-2"
                defaultValue={0}
                ref={inputRef}
              />
              <button
                onClick={() =>
                  dispatch(addCounterByAmount(+inputRef.current?.value!))
                }
                className="py-2 px-4 bg-blue-500 text-white rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterComp;
