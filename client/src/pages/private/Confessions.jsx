import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Confessions = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  let token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/confessions/getall", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <div className="flex justify-end p-5">
        <button
          className="bg-blue-400 text-white font-bold rounded-lg p-2 cursor-pointer"
          onClick={handleLogOut}
        >
          Log out
        </button>
      </div>
      <h1 className="text-center my-3 font-semibold text-2xl">
        All confessions
      </h1>
      {loading && (
        <div className="flex justify-center items-center my-10">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-400 border-t-transparent"></div>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center px-5">
        {data.map((confession) => {
          return (
            <div key={confession._id} className="shadow p-4 rounded-lg">
              <div>{confession.text}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Confessions;
