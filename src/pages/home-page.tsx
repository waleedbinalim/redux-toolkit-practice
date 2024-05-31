import {
  CounterComp,
  CreateTask,
  ItemsList,
  TasksList,
  UsersList,
} from "@/components";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
      <ItemsList />

      <CounterComp />

      <div style={{ margin: "8px 0px" }} />

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <CreateTask />
        </div>
        <div className="md:w-1/2">
          <TasksList />
        </div>
      </div>

      <UsersList />
    </>
  );
};

export default HomePage;
