import {
  generateTasks,
  generateUsers,
} from "@/mock-server/mock-data-generator";
import { assignTaskToUser } from "@/slice";
import { addUser, removeUser, userReducer } from "@/slice/users-slice";
import { describe, expect, test } from "vitest";

describe("usersSlice", () => {
  const userInitialState = { entities: [...generateUsers(3)] };
  const taskInitialState = { entities: [...generateTasks(1)], loading: false };

  test(`Should add user when ${addUser}`, () => {
    const newUser = { alterEgo: "Oak", realName: "Tyler" };
    const action = addUser(newUser);

    const result = userReducer(userInitialState, action);

    const foundUser = result.entities.find((item) => item.realName === "Tyler");

    expect(foundUser).toBeTruthy();
  });

  test(`Should remove user when ${removeUser}`, () => {
    const newUser = { alterEgo: "Oak", realName: "Tyler" };
    const action = addUser(newUser);
    const result = userReducer(userInitialState, action);
    const foundUser = result.entities.find((item) => item.realName === "Tyler");

    const removeUserAction = removeUser(foundUser?.id!);
    const finalState = userReducer(result, removeUserAction);

    expect(finalState).not.toContain(foundUser);
  });

  test(`Should assign task to user when ${assignTaskToUser}`, () => {
    // WE ADD TYLER ================================================
    const user = { id: "420", alterEgo: "Oak", realName: "Tyler" };
    const userAction = addUser(user);
    const newUserState = userReducer(userInitialState, userAction);
    // =============================================================

    const { id: taskId } = taskInitialState.entities[0];
    const action = assignTaskToUser({ taskId, userId: user.id });
    const finalUserState = userReducer(newUserState, action);

    const userOfInterest = finalUserState.entities.find(
      ({ id }) => id === "420"
    );

    expect(userOfInterest?.tasks).toContain(taskId);
  });
});
