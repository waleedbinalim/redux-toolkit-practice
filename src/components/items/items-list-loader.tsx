import React from "react";

const ItemsListLoader: React.FC = () => {
  return (
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
  );
};

export default ItemsListLoader;
