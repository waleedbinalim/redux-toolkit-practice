import { appNav, appRoutes } from "@/constants";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-8 min-h-screen bg-blue-100">
      <h1 className="font-bold text-4xl text-center">
        This is the Hoooome Page
      </h1>

      <div className="px-12">
        <p className="text-center my-4">Your examples to choose from:</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {appNav.map((item, i) => {
            const { name, path } = item;
            if (path === appRoutes.home) return;

            return (
              <div
                key={path}
                onClick={() => navigate(path)}
                className="grid place-content-center h-48 bg-violet-300 rounded-lg cursor-pointer hover:scale-105"
              >
                <p className="text-2xl font-bold text-slate-700">{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
