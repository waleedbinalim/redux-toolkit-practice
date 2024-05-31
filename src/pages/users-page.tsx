import { UsersList } from "@/components";
import React from "react";

const UsersPage: React.FC = () => {
  return (
    <div className="pt-12 px-12 min-h-screen bg-slate-100">
      <h1 className="text-center font-bold text-2xl mb-8">Users List</h1>
      <UsersList />
    </div>
  );
};

export default UsersPage;
