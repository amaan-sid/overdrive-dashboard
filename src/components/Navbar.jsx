import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center p-4 lg:h-16">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU8_M7m9TFx-lH6k6ZHA_q1MZDa_t5zCXhKw&s"
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="text-2xl font-bold text-white">Overdrive</span>
        </Link>

        <ul className="hidden lg:flex space-x-6 text-lg">
          <li>
            <Link to="/codeforces" className="hover:text-gray-400">
              CodeForces
            </Link>
          </li>
          <li>
            <Link to="/weather" className="hover:text-gray-400">
              Weather
            </Link>
          </li>
          <li>
            <Link to="/github" className="hover:text-gray-400">
              GitHub
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
        </ul>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <div className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-gray-800`}>
        <ul className="flex flex-col items-center py-4 space-y-4 text-lg">
          <li>
            <Link to="#" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-gray-400">
              Services
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
