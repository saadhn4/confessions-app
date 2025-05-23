import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const [text, setText] = useState("");
  const note = { text };

  let token = localStorage.getItem("token");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      await axios.post("/api/confessions/create", note, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Confession posted");
      navigate("/confessions");
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
        <h2 className="text-2xl font-bold text-blue-500 mb-3">Create</h2>
        <input
          className="p-3 border border-gray-300 rounded"
          type="text"
          value={text}
          placeholder="Enter confession"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white font-semibold p-4 rounded-full w-1/4 cursor-pointer"
          type="submit"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Create;
