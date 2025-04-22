import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      navigate("/confessions");
    }
  }, [navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const user = { username, email, password };
      const response = await axios.post("/api/public/register", user);
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="h-[90vh] flex justify-center items-center bg-gray-100 px-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-4 justify-center items-center md:w-1/4 w-full shadow-lg rounded-lg p-5 bg-white"
      >
        <h2 className="text-2xl font-bold text-blue-500 mb-3">Sign up</h2>
        <input
          className="p-3 border border-gray-300 rounded"
          type="text"
          value={username}
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="p-3 border border-gray-300 rounded"
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="p-3 border border-gray-300 rounded"
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white font-semibold p-4 rounded-2xl cursor-pointer"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
