import { useState } from "react";
import {
  FiSearch,
  FiUser,
  FiStar,
  FiShoppingBag,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ["Home", "Shop", "Product", "Pages", "Blog"];

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LEFT SECTION */}
          <ul className="hidden md:flex items-center space-x-8 font-medium text-sm text-gray-800">
            {navItems.map((item) => {
              const path = `/${item === "Home" ? "" : item.toLowerCase()}`;
              const isActive = location.pathname === path;

              return (
                <li key={item} className="relative group">
                  <NavLink
                    to={path}
                    className={`relative flex items-center text-black text-xl gap-3 transition-colors duration-300 `}
                  >
                    {item}
                    {/* Animated underline */}

                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] w-3/4 bg-black transform transition-transform duration-300 origin-left 
                  ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                    ></span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
          {/* LOGO */}
          <div className="text-3xl font-extrabold tracking-wide">
            <Link to="/">GLOWING</Link>
          </div>

          {/* RIGHT ICONS + HAMBURGER */}
          <div className="flex items-center space-x-5">
            <button className="text-gray-800 hover:text-blue-600 transition">
              <FiSearch size={23} />
            </button>
            <button className="text-gray-800 hover:text-blue-600 transition">
              <FiUser size={23} />
            </button>
            <button className="text-gray-800 hover:text-blue-600 transition">
              <FiStar size={23} />
            </button>
            <button className="relative text-gray-800 hover:text-blue-600 transition">
              <FiShoppingBag size={23} />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Hamburger Button (Mobile) */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-800 hover:text-blue-600 transition"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`md:hidden bg-white shadow-inner overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4 font-medium text-gray-800">
          {navItems.map((item) => (
            <li key={item}>
              <NavLink
                onClick={() => setIsOpen(false)}
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="flex items-center gap-1 hover:text-blue-600 transition"
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
