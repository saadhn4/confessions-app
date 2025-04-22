import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  const token = localStorage.getItem("token");
  return (
    // Desktop navbar
    <>
      <nav className="hidden md:flex md:justify-between md:items-center md:p-6 md:shadow">
        <h1 className="text-2xl font-bold">Whisp 💬</h1>
        <ul
          style={{ transition: "transform 0.3s ease" }}
          className="flex gap-x-5 font-semibold"
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/confessions">All Confessions</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          {token ? (
            <li>
              <a
                className="bg-blue-400 text-white font-bold rounded-lg p-2 cursor-pointer"
                onClick={handleLogOut}
              >
                Log out
              </a>
            </li>
          ) : (
            <li>
              <a
                className="bg-blue-400 text-white font-bold rounded-lg p-2 cursor-pointer"
                onClick={handleLogOut}
              >
                Sign up
              </a>
            </li>
          )}
        </ul>
      </nav>

      {/* Mobile navbar */}
      <nav className="md:hidden flex justify-between items-center shadow rounded p-5">
        <h1 className="text-2xl font-bold">Whisp 💬</h1>
        <div className="relative">
          <i
            class="bi bi-list text-xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          ></i>
          {menuOpen && (
            <ul className="flex flex-col justify-center items-center gap-y-2 font-semibold absolute right-3 shadow-lg p-8 p rounded-lg z-50 bg-white">
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/confessions" onClick={() => setMenuOpen(false)}>
                  Confessions
                </Link>
              </li>
              <li>
                <Link to="/create" onClick={() => setMenuOpen(false)}>
                  Create
                </Link>
              </li>
              <li>
                <button
                  className="bg-blue-400 text-white font-bold rounded-lg p-2 cursor-pointer"
                  onClick={handleLogOut}
                >
                  Log out
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
