import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { name: "Hotel", path: "/hotels" },
    { name: "Villas", path: "/villas" },
    { name: "Bungalows", path: "/bungalows" },
    { name: "Hostels", path: "/hostels" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-white/30 backdrop-blur-md text-gray-800 shadow-sm py-2 sm:py-3"
          : "bg-[#0056B3] py-3 sm:py-4"
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <h1
          className={`text-xl sm:text-2xl font-extrabold tracking-wide ${
            isScrolled ? "text-[#0056B3]" : "text-white"
          }`}
        >
          EaseWithStay.com
        </h1>
      </Link>

      {/* Desktop Nav (only from lg and above) */}
      <div className="hidden lg:flex items-center gap-8 font-medium text-base">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className={`transition-colors duration-300 ${
              isScrolled
                ? "text-gray-700 hover:text-[#0056B3]"
                : "text-white hover:text-gray-200"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right Button (only from lg and above) */}
      <div className="hidden lg:flex items-center">
        <button
          className={`px-4 py-2 rounded-md font-semibold text-sm transition-all hover:cursor-pointer ${
            isScrolled
              ? "bg-[#0056B3] text-white hover:bg-[#004494]"
              : "bg-gray-800 text-white hover:bg-black"
          }`}
          onClick={() => navigate("/login")}
        >
          Login / Signup
        </button>
      </div>

      {/* Mobile + Tablet Menu Button (up to md/lg) */}
      <div className="flex items-center lg:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-7 w-7 cursor-pointer ${
            isScrolled ? "text-gray-700" : "text-white"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile/Tablet Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-lg flex flex-col lg:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Links */}
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className="hover:text-[#0056B3] text-base sm:text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        {/* Mobile/Tablet Login Button */}
        <button
          className="bg-[#0056B3] text-white rounded-md mt-4 px-4 py-2 text-sm sm:text-base "
          onClick={() => {
            setIsMenuOpen(false);
            navigate("/login");
          }}
        >
          Login / Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
