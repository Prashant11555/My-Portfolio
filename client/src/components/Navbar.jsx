import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "HOME", path: "/", section: "home" },
    { label: "ABOUT", path: "/#about", section: "about" },
    { label: "SKILLS", path: "/skills", section: "skills" },
    { label: "PROJECTS", path: "/#projects", section: "projects" },
    { label: "CONTACT", path: "/#contact", section: "contact" },
  ];

  const handleNavClick = (link, e) => {
    if (link.section === "skills") {
      // Navigate to skills page
      return;
    }

    e.preventDefault();

    if (location.pathname !== "/") {
      // If not on home page, navigate to home first
      window.location.href = link.path;
      return;
    }

    // Smooth scroll to section
    const element = document.getElementById(link.section);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-b from-[#0a0e1a] to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            PT.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={(e) => handleNavClick(link, e)}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-400 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={(e) => handleNavClick(link, e)}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
