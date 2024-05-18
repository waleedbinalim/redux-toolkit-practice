import { createAction } from "@reduxjs/toolkit";

// GOOD OL, OLD SCHOOL REDUX WITH THE ACTION AND PAYLOAD

type CounterState = { count: number };

const increment = createAction("INCREMENT", (amount: number) => {
  return { payload: amount };
});

const decrement = createAction("DECREMENT", (amount: number) => {
  return { payload: amount };
});
const reset = createAction("RESET");

// GIVES TS SUPPORT IN REDUCER BELOW
type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>;

export const counterReduer = (state: CounterState, action: CounterAction) => {
  if (action.type === "INCREMENT") return (state.count += action.payload);
  if (action.type === "DECREMENT") return (state.count -= action.payload);
  if (action.type === "RESET") return (state.count = 0);
  //   DEFAULT RETURN STATE
  return state;
};
