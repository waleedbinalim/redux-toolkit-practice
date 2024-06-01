import { expect, test, describe } from "vitest";
import {
  addTask,
  createTask,
  tasksReducer,
  removeTask,
  assignTaskToUser,
} from "@/slice";
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

  test(`Should remove task when ${addTask}`, () => {
    const task = initialState.entities[0];
    const action = removeTask(task.id);
    const newState = tasksReducer(initialState, action);

    expect(newState).not.toContainEqual(task);
  });

  test(`Should assign task to user when ${assignTaskToUser}`, () => {
    const userId = "1";
    const task = initialState.entities[0];
    const action = assignTaskToUser({ taskId: task.id, userId });
    const newState = tasksReducer(initialState, action);

    const foundTask = newState.entities.find(
      (stateTask) => stateTask.id === task.id
    );

    expect(foundTask).toHaveProperty("user", userId);
  });
});
