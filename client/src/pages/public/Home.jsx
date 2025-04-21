import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const token = localStorage.getItem("token");

  return (
    <div className="h-[90vh] flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-6">Welcome to Confessions App!</h1>
      <div className="flex gap-4">
        {!token ? (
          <>
            <Link
              className="bg-blue-400 text-white font-bold p-4 rounded-2xl"
              to="/register"
            >
              Register
            </Link>
            <Link
              className="bg-blue-400 text-white font-bold p-4 rounded-2xl"
              to="/login"
            >
              Login
            </Link>
          </>
        ) : (
          <Link
            className="bg-blue-400 text-white font-bold p-4 rounded-2xl"
            to="/create"
          >
            Start posting
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
