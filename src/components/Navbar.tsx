import { useState } from "react";
import Frame from "../assets/Frame.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="max-w-[1720px] px-6 md:px-12 py-4">
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src={Frame} alt="Logo" className="w-[150px] md:w-[236px]" />

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>

          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto transition-all duration-500 ease-in-out`}
          >
            <ul className="font-medium flex flex-col p-4 md:flex-row md:space-x-8 mt-4 md:mt-0 border border-gray-100 rounded-lg bg-gray-50 md:border-0 md:bg-white">
              {["CATALOGUE", "FASHION", "FAVORITE", "LISTSTYLE"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block py-2 pl-3 pr-4 text-gray-700 md:hover:text-yellow-500 transition-colors duration-200 ease-in-out hover:bg-gray-100 md:hover:bg-transparent rounded md:rounded-none"
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li className="mt-4 md:mt-0">
                <button
                  type="button"
                  className="bg-black text-white w-full md:w-auto px-8 py-3 md:px-10 h-[50px] md:h-[62px] text-lg md:text-2xl rounded-md transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105"
                >
                  SIGN UP
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
