import { addTask, tasksReducer } from "@/slice";
import React, { useReducer, useRef } from "react";

const CreateTask: React.FC = () => {
  const taskValRef = useRef<HTMLTextAreaElement>(null);

  const [_state, dispatch] = useReducer(tasksReducer, { entities: [] });

  return (
    <div className="p-4 md:w-1/2">
      <h1 className="text-center text-lg mb-2 font-bold">
        Create Task Component
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!taskValRef.current) return;
          dispatch(addTask({ title: taskValRef.current.value }));
        }}
        className="flex flex-col"
      >
        <textarea
          className="border-2 border-slate-400 rounded-md p-2 mb-2"
          ref={taskValRef}
        />

        <button className="px-4 py-2 bg-blue-300 rounded-md" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
