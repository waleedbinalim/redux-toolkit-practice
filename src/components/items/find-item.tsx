import { useLazyGetItemByIdQuery } from "@/services";
import React, { useRef } from "react";

const FindItemComp: React.FC = () => {
  const fetchByIdRef = useRef<HTMLInputElement>(null);

  const [trigger, { data: postByID, isFetching: isByIdLoading }] =
    useLazyGetItemByIdQuery();
  return (
    <>
      <section>
        <p>fetch by id</p>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            trigger(fetchByIdRef.current?.value ?? undefined);
          }}
        >
          <input type="text" ref={fetchByIdRef} />
          <button type="submit">Get By Id</button>
        </form>
      </section>

      <section>
        <div>Fetching: {isByIdLoading ? "True" : "False"}</div>
        {!!postByID?.item && (
          <div>
            <h1>Found</h1>
            <div>
              <div className="flex flex-col bg-blue-200">
                <span>{postByID.item.id}</span>
                <span>{postByID.item.name}</span>
                <span>{postByID.item.packed}</span>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default FindItemComp;
