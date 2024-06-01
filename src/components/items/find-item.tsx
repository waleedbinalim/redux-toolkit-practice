import { useLazyGetItemByIdQuery } from "@/services";
import React, { useRef } from "react";

const FindItemComp: React.FC = () => {
  const fetchByIdRef = useRef<HTMLInputElement>(null);

  const [trigger, { currentData: currentData, isFetching, error }] =
    useLazyGetItemByIdQuery();

  return (
    <>
      <section>
        <p className="text-lg font bold">Fetch item by Id:</p>
        <form
          className="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            trigger(fetchByIdRef.current?.value);
          }}
        >
          <input
            type="text"
            ref={fetchByIdRef}
            className="border-2 py-2 px-4 rounded-lg"
          />
          <button type="submit" className="bg-blue-400 py-2 px-4 rounded-lg">
            Get By Id
          </button>
        </form>
      </section>

      <section>
        <div>{isFetching && !currentData && "Loading..."}</div>

        {!!error && (
          <div>
            {/* @ts-ignore */}
            <div>{error?.data!.message}</div>
          </div>
        )}

        <div className="my-4" />

        {!!currentData?.item && (
          <div className="flex flex-col bg-blue-200 rounded-lg p-4">
            <p>ID: {currentData.item.id}</p>
            <p>{currentData.item.name}</p>
            <p>{currentData.item.packed}</p>
          </div>
        )}
      </section>
    </>
  );
};

export default FindItemComp;
