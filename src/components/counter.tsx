import React, { useReducer } from "react";
import { counterReducer2, increment } from "../reducers";

const CounterComp: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer2, { count: 0 });

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <h1 style={{ marginBottom: "8px" }}>Counter component</h1>
        <button
          onClick={() => dispatch(increment(1))}
          style={{
            borderRadius: "20px",
            width: "20%",
            padding: "8px",
            cursor: "pointer",
          }}
        >
          Count = {state.count}
        </button>
      </div>
    </>
  );
};

export default CounterComp;
