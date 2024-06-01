import { useGetItemsQuery } from "@/services";
import React from "react";
import FindItemComp from "./find-item";
import ItemsListLoader from "./items-list-loader";

const ItemsList: React.FC = () => {
  const { data, isLoading } = useGetItemsQuery();

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
              <p>ID: {item.id}</p>
              <p>{item.name}</p>
              <p>Packed: {item.packed ? "True" : "False"}</p>
            </div>
          );
        })}
      </section>

      <FindItemComp />
    </div>
  );
};

export default ItemsList;
