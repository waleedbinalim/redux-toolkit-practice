import { addTask, tasksReducer } from "@/slice";
import React, { useReducer, useRef } from "react";

const CreateTask: React.FC = () => {
  const taskValRef = useRef<HTMLInputElement>(null);

  const [_state, dispatch] = useReducer(tasksReducer, { entities: [] });

  return (
    <>
      <div>Create Task</div>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!taskValRef.current) return;
          dispatch(addTask({ title: taskValRef.current.value }));
        }}
      >
        <label htmlFor="task">Task</label>
        <input type="text" ref={taskValRef} />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreateTask;
