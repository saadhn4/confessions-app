import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
      const user = { email, password };
      const response = await axios.post("/api/public/login", user);
      console.log(response.data);
      let token = response.data.token;
      localStorage.setItem("token", token);
      alert("Login successful");
      setTimeout(() => {
        navigate("/confessions");
      }, 2000);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100 px-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-4 justify-center items-center md:w-1/4 w-full shadow-lg rounded-lg p-5"
      >
        <h2 className="text-2xl font-bold text-blue-500 mb-3">Login</h2>
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
          className="bg-blue-500 text-white font-semibold p-3 w-1/4 rounded-lg cursor-pointer"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
