import { createAction, createReducer } from "@reduxjs/toolkit";

// GOOD OL, OLD SCHOOL REDUX WITH THE ACTION AND PAYLOAD

type CounterState = { count: number };

export const increment = createAction("INCREMENT", (amount: number) => {
  return { payload: amount };
});

export const decrement = createAction("DECREMENT", (amount: number) => {
  return { payload: amount };
});

export const reset = createAction("RESET");

// GIVES TS SUPPORT IN REDUCER BELOW
type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>;

export const counterReduerOld = (
  state: CounterState,
  action: CounterAction
) => {
  if (action.type === "INCREMENT") return (state.count += action.payload);
  if (action.type === "DECREMENT") return (state.count -= action.payload);
  if (action.type === "RESET") return (state.count = 0);
  //   DEFAULT RETURN STATE
  return state;
};

// NOW THE REDUX TOOLKIT WAY
//  CREAETE REDUCER TAKES INITAL STATE
// IMMER IS OUT OF THE BOX SO NO NEED FOR SPREAD OPERATOR ON DEEPLY NESTED OBJECTS
export const counterReducer2 = createReducer({ count: 0 }, (builder) => {
  builder.addCase(increment, (state, action) => {
    state.count += action.payload;
  });

  builder.addCase(decrement, (state, action) => {
    state.count -= action.payload;
  });

  builder.addCase(reset, (state) => {
    state.count = 0;
  });
});

// NOTE: BUILDER ALSO HAS A METHOD CALLED ADD MATCHER THAT HELPS IN ASYNC
// WITH counterReducer2 now added the old counterReduerOld can be safely removed
