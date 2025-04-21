import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Confessions = () => {
  const [data, setData] = useState([]);
  let token = localStorage.getItem("token");
  const navigate = useNavigate()
  useEffect(() => {
    try {
      const getData = async () => {
        const response = await axios.get("/api/confessions/getall", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleLogOut = () => {
    localStorage.clear()
    navigate("/login")
  }
  return (
    <>
    <div className="flex justify-end p-5">
      <button className="bg-blue-400 text-white font-bold rounded p-2 cursor-pointer" onClick={handleLogOut}>
        Log out
      </button>
    </div>
      <h1 className="text-center my-5 font-semibold text-2xl">
        All confessions
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center px-5">
        {data.map((confession) => {
          return (
            <div key={confession._id} className="shadow p-3 rounded-lg">
              <div>{confession.text}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Confessions;
