import { useAppDispatch, useAppSelector } from "@/hooks";
import { removeUser } from "@/slice/users-slice";
import React from "react";

const UsersList: React.FC = () => {
  const usersList = useAppSelector((state) => state.users.entities);
  const dispatch = useAppDispatch();

  return (
    <section className="p-4">
      <h1 className="font-bold text-2xl mb-2">Users List</h1>

      {usersList.map((user) => {
        return (
          <div className="bg-slate-100 p-4 rounded-md mb-2" key={user.id}>
            <div>{user.id}</div>
            <div>{user.realName}</div>
            <div>{user.alterEgo}</div>

            <button
              className="bg-red-100 rounded-md px-4 py-2"
              onClick={() => {
                dispatch(removeUser(user.id));
              }}
            >
              Remove user
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default UsersList;
