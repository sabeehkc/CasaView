import React, { useState, useEffect } from "react";
import { navLinks } from "../assets/data";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);
  const hasNumberInPath = pathname.includes("/property/");
  console.log(hasNumberInPath);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        scrolled ? "bg-gray-200 shadow-md opacity-90" : ""
      }
       py-6 px-4 md:px-16 flex items-center justify-between border-0`}
      style={
        scrolled
          ? {}
          : {
              background:
                "linear-gradient(0deg,rgba(247, 247, 247, 0) 0%, rgba(255, 255, 255, 1) 100%)",
            }
      }
    >
      {/* Logo/Title */}
      <div className="font-semibold font-serif text-2xl md:text-3xl text-black hover:text-pink-400"
      onClick={() => navigate("/")}
      >
        CasaView
      </div>
      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-10 items-center mr-20">
        {navLinks?.map((link) => (
          <li key={link.id}>
            <a
              onClick={() => navigate(link.url)}
              className={`text-lg font-normal  transition-colors duration-200 ${
                link.title === "Home" && pathname === "/"
                  ? "text-pink-400"
                  : pathname === link.url || (hasNumberInPath && link.title === "Properties")
                  ? "text-pink-400"
                  : "text-black hover:text-pink-400"
              } cursor-pointer`}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      {/* Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center z-20"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-7 h-1 bg-black rounded transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-1 bg-black rounded my-1 transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-1 bg-black rounded transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-8 transition-transform duration-300 z-10 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            className={`text-2xl font-semibold ${
              link.title === "Home" && pathname === "/"
                ? "text-pink-400"
                : pathname === link.url 
                ? "text-pink-400"
                : "text-black hover:text-pink-400"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {link.title}
          </a>
        ))}
      </div>
      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-0 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default NavBar;
