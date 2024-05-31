import { useGetItemsQuery } from "@/services";
import React from "react";

const ItemsList: React.FC = () => {
  const { data, isLoading } = useGetItemsQuery();
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Items List</h1>

      {/* LOADING */}
      {isLoading && (
        <section>
          {[...Array(3)].map((_, i) => {
            return (
              <div
                className="w-1/3 mb-2 bg-slate-300 p-4 animate-pulse min-h-[80px]"
                key={`items-loader-${i}`}
              />
            );
          })}
        </section>
      )}

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
    </div>
  );
};

export default ItemsList;
