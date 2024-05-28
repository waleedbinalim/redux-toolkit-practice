import { useAppDispatch, useAppSelector } from "@/hooks";
import { removeTask } from "@/slice";
import React from "react";

const TasksList: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.entities);
  const dispatch = useAppDispatch();

  return (
    <div className="p-4">
      <h1 className="text-center text-lg mb-2 font-bold">Your Tasks</h1>

      {tasks.map((task) => {
        return (
          <div key={task.id} className="p-2 bg-green-100 mb-2 rounded-md">
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
  );
};

export default TasksList;
