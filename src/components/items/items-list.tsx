import { useGetItemsQuery, useLazyGetItemByIdQuery } from "@/services";
import React, { useRef } from "react";
import ItemsListLoader from "./items-list-loader";

const ItemsList: React.FC = () => {
  const { data, isLoading } = useGetItemsQuery();

  const fetchByIdRef = useRef<HTMLInputElement>(null);

  const [trigger, { data: postByID, isFetching: isByIdLoading }] =
    useLazyGetItemByIdQuery();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Items List</h1>

      {/* LOADING */}
      {isLoading && <ItemsListLoader />}

      {/* LOADED */}
      <section>
        {data?.items.map((item) => {
          return (
            <div className="w-1/3 mb-2 bg-blue-200 p-4" key={item.id}>
              <p>{item.name}</p>
              <p>Packed: {item.packed ? "True" : "False"}</p>
            </div>
          );
        })}
      </section>

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
    </div>
  );
};

export default ItemsList;
