import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 shadow">
      <h1 className="text-2xl">Logo</h1>
      <ul className="flex gap-x-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/confessions">All Confessions</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
