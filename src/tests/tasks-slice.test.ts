import { expect, test, describe } from "vitest";
import { addTask, createTask, tasksReducer } from "@/slice";

describe("tasksSlice", () => {
  const initialState = {
    entities: [
      createTask({ title: "Test Task 1" }),
      createTask({ title: "Test Task 2" }),
    ],
    loading: false,
  };

  test(`Should add task when ${addTask}`, () => {
    const task = createTask({ title: "Test Task 3" });
    const action = addTask(task);
    const newState = tasksReducer(initialState, action);

    expect(newState.entities).toEqual([task, ...initialState.entities]);
  });
});
