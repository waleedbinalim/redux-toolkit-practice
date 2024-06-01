import { useAppDispatch, useAppSelector } from "@/hooks";
import { removeUser } from "@/slice/users-slice";
import React from "react";

const UsersList: React.FC = () => {
  const usersList = useAppSelector((state) => state.users.entities);
  const dispatch = useAppDispatch();

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-2 flex-wrap  justify-center">
      {usersList.map((user) => {
        return (
          <div
            className="  p-4 rounded-md mb-2 bg-slate-50 shadow-lg"
            key={user.id}
          >
            <div className="">
              <div>
                <span className="font-bold">ID: </span> {user.id}
              </div>
              <div>
                <span className="font-bold">Name: </span>
                {user.realName}
              </div>
              <div>
                <span className="font-bold">Username: </span>
                {user.alterEgo}
              </div>
            </div>

            <div className="flex mt-2">
              <button
                className="bg-red-300 rounded-md px-4 py-2 font-bold"
                onClick={() => {
                  dispatch(removeUser(user.id));
                }}
              >
                Remove user
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default UsersList;
