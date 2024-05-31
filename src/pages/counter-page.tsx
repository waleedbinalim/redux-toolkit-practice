import { CounterComp } from "@/components";
import React from "react";

const CounterPage: React.FC = () => {
  return (
    <div className="bg-blue-100 min-h-screen">
      <CounterComp />
    </div>
  );
};

export default CounterPage;
