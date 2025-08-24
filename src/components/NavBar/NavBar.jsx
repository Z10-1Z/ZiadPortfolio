import { useState, useEffect } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [darkMode, setDarkMode] = useState(false);
  const [navLinks] = useState([
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // ✅ Apply dark mode class to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link.to);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(link.to);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks, activeSection]);

  return (
    <nav
      className="fixed w-full top-0 z-50 
    bg-white/10 dark:bg-gray-900/50 
    backdrop-blur-lg border-b border-white/20 dark:border-gray-700/50 shadow-lg"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div
          className="text-2xl font-extrabold tracking-wide 
                     bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-500 
                     bg-clip-text text-transparent 
                     transform transition duration-500 hover:scale-110 hover:rotate-2 cursor-pointer"
        >
          Ziad Mohamed
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-900 dark:text-white drop-shadow-lg">
          {navLinks.map((link) => (
            <li
              key={link.to}
              onClick={() => scrollToSection(link.to)}
              className={`relative cursor-pointer transition duration-300 group ${
                activeSection === link.to
                  ? "text-indigo-400 font-semibold"
                  : "hover:text-indigo-300"
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-400 transition-all duration-300 ease-out ${
                  activeSection === link.to
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Right Side: Theme Toggle + Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 
                       text-gray-900 dark:text-yellow-400 
                       hover:scale-110 transition"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none text-2xl text-gray-900 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white/10 dark:bg-gray-900/70 backdrop-blur-md px-6 pb-4 space-y-3 text-gray-900 dark:text-white">
          {navLinks.map((link) => (
            <li
              key={link.to}
              onClick={() => scrollToSection(link.to)}
              className={`relative cursor-pointer transition duration-300 ${
                activeSection === link.to
                  ? "text-indigo-400 font-semibold"
                  : "hover:text-indigo-300"
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-400 transition-all duration-300 ease-out ${
                  activeSection === link.to
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
