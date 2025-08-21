import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // يقفل المينيو في الموبايل بعد الكليك
    }
  };

  return (
    <nav className="fixed w-full bg-gray-900 text-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">Ziad Mohamed</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li
              key={link.to}
              onClick={() => scrollToSection(link.to)}
              className="cursor-pointer hover:text-indigo-400 transition"
            >
              {link.name}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 px-6 pb-4 space-y-3">
          {navLinks.map((link) => (
            <li
              key={link.to}
              onClick={() => scrollToSection(link.to)}
              className="cursor-pointer hover:text-indigo-400 transition"
            >
              {link.name}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
