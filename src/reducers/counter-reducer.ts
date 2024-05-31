import { createAction, createReducer } from "@reduxjs/toolkit";

// GOOD OL, OLD SCHOOL REDUX WITH THE ACTION AND PAYLOAD

type CounterState = { count: number };

export const incrementCounter = createAction("INCREMENT", (amount: number) => {
  return { payload: amount };
});

export const decrementCounter = createAction("DECREMENT", (amount: number) => {
  return { payload: amount };
});

export const addCounterByAmount = createAction(
  "ADD_COUNTER_BY_AMOUNT",
  (amount: number) => {
    return { payload: amount };
  }
);

export const resetCounter = createAction("RESET");

// GIVES TS SUPPORT IN REDUCER BELOW
type CounterAction =
  | ReturnType<typeof incrementCounter>
  | ReturnType<typeof decrementCounter>
  | ReturnType<typeof resetCounter>
  | ReturnType<typeof addCounterByAmount>;

export const counterReduerOld = (
  state: CounterState,
  action: CounterAction
) => {
  if (action.type === "INCREMENT") return (state.count += action.payload);
  if (action.type === "DECREMENT") return (state.count -= action.payload);
  if (action.type === "RESET") return (state.count = 0);
  if (action.type === "ADD_COUNTER_BY_AMOUNT")
    return (state.count += action.payload);
  //   DEFAULT RETURN STATE
  return state;
};

// NOW THE REDUX TOOLKIT WAY
//  CREAETE REDUCER TAKES INITAL STATE
// IMMER IS OUT OF THE BOX SO NO NEED FOR SPREAD OPERATOR ON DEEPLY NESTED OBJECTS
export const counterReducer2 = createReducer({ count: 0 }, (builder) => {
  builder.addCase(incrementCounter, (state, action) => {
    state.count += action.payload;
  });

  builder.addCase(decrementCounter, (state, action) => {
    state.count -= action.payload;
  });

  builder.addCase(resetCounter, (state) => {
    state.count = 0;
  });

  builder.addCase(addCounterByAmount, (state, action) => {
    state.count += action.payload;
  });
});

// NOTE: BUILDER ALSO HAS A METHOD CALLED ADD MATCHER THAT HELPS IN ASYNC
// WITH counterReducer2 now added the old counterReduerOld can be safely removed
