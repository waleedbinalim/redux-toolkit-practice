import { useAppDispatch } from "@/hooks";
import { addTask } from "@/slice";
import React, { useRef } from "react";

const CreateTask: React.FC = () => {
  const taskValRef = useRef<HTMLTextAreaElement>(null);

  // const [state, dispatch] = useReducer(tasksReducer, { entities: [] }); //OLD METHOD

  const dispatch = useAppDispatch(); // This is the recommended way for RTK

  return (
    <div className="p-4 w-1/3">
      <h1 className="text-center text-lg mb-2 font-bold">Create a Task</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          const emptyTask =
            taskValRef.current!.value.replace(/^\s+|\s+$|\s+(?=\s)/g, "")
              .length === 0;

          if (!taskValRef.current || emptyTask) return;
          dispatch(addTask({ title: taskValRef.current.value }));
        }}
        className="flex flex-col"
      >
        <textarea
          className="border-2 border-slate-400 rounded-md p-2 mb-2"
          ref={taskValRef}
          onKeyUp={(e) => {
            const emptyTask =
              taskValRef.current!.value.replace(/^\s+|\s+$|\s+(?=\s)/g, "")
                .length === 0;

            if (e.key === "Enter" && !e.shiftKey) {
              if (!taskValRef.current || emptyTask) return;
              dispatch(addTask({ title: taskValRef.current!.value }));
              taskValRef.current!.value = "";
            }
          }}
        />

        <button className="px-4 py-2 bg-blue-400 rounded-md" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
