import { useAppDispatch, useAppSelector } from "@/hooks";
import { removeTask } from "@/slice";
import React from "react";
import CreateTask from "./create-task";

const TasksList: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.entities);
  const dispatch = useAppDispatch();

  return (
    <div className="p-4">
      <div className="flex justify-center">
        <CreateTask />
      </div>

      <h1 className="text-center text-lg mb-2 font-bold">Your Tasks</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {tasks.map((task) => {
          return (
            <div
              key={task.id}
              className=" p-4 bg-yellow-200/50 mb-2 rounded-md shadow-lg"
            >
              <p className="mb-2">ID: {task.id}</p>
              <p className="mb-2">{task.title}</p>
              <button
                onClick={() => dispatch(removeTask(task.id))}
                className="bg-red-200 rounded-lg px-4 py-2"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TasksList;
