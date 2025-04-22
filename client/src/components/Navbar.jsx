import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    // Desktop navbar
    <>
      <nav className="hidden md:flex md:justify-between md:items-center md:p-6 md:shadow">
      <h1 className="text-2xl font-bold">Whisp 💬</h1>
      <ul className="flex gap-x-5 font-semibold">
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

      {/* Mobile navbar */}
      <nav className="md:hidden flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold">Whisp 💬</h1>
        <div className="relative">
          <i
            class="bi bi-list text-xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          ></i>
          {menuOpen && (
            <ul className="flex flex-col gap-y-2 font-semibold absolute right-3 shadow p-5 rounded">
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
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
