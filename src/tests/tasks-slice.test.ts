import { expect, test, describe } from "vitest";
import { addTask, createTask, tasksReducer } from "@/slice";
import { generateTasks } from "@/mock-server/mock-data-generator";

describe("tasksSlice", () => {
  const initialState = {
    entities: [...generateTasks()],
    loading: false,
  };

  test(`Should add task when ${addTask}`, () => {
    const task = createTask({ title: "Test Task 3" });
    const action = addTask(task);
    const newState = tasksReducer(initialState, action);

    expect(newState.entities).toEqual([task, ...initialState.entities]);
  });
});
