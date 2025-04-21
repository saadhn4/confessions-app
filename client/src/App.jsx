import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/public/Home";
import Register from "./pages/public/Register";
import Login from "./pages/public/Login";
import Confessions from "./pages/private/Confessions";
import Create from "./pages/private/Create";
import PrivateOutlet from "./PrivateOutlet";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateOutlet />}>
            <Route path="/create" element={<Create />} />
            <Route path="/confessions" element={<Confessions />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
