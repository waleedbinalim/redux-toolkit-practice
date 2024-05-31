import { ItemType } from "@/services";
import { TaskType } from "@/slice";
import { UserType } from "@/slice/users-slice";
import {
  incrementalNumber,
  randBoolean,
  randFullName,
  randText,
  randUserName,
} from "@ngneat/falso";

const factory = incrementalNumber();

export const generateItem = (): ItemType => ({
  id: factory().toString(),
  name: randText({ charCount: 20 }),
  packed: randBoolean(),
});

export const generateTasks = (): TaskType[] => {
  const initialTasks = [];

  for (let i = 0; i < 4; i++) {
    const newTask: TaskType = {
      id: factory().toString(),
      title: randText({ charCount: 20 }),
    };
    initialTasks.push(newTask);
  }
  return initialTasks;
};

export const generateUsers = (): UserType[] => {
  const initialUsers = [];

  for (let i = 0; i < 4; i++) {
    const newUser: UserType = {
      id: factory().toString(),
      alterEgo: randUserName({ withAccents: false }),
      realName: randFullName({ withAccents: false }),
      tasks: [],
    };
    initialUsers.push(newUser);
  }
  return initialUsers;
};
