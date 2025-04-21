import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateOutlet = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [token, navigate]);

  return token ? <Outlet /> : <h1>No Token </h1>; // or a loading indicator
};

export default PrivateOutlet;