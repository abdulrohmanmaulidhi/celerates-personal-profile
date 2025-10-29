import { Send } from "lucide-react";

function Navbar({ onNavClick }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 bg-white shadow-sm backdrop-blur-sm">
      <h1 className="text-2xl font-bold text-gray-800">MyProfile</h1>
      <ul className="hidden md:flex space-x-8 text-gray-600">
        <li>
          <a href="#about" onClick={(e) => onNavClick(e, "about")} className="hover:text-indigo-500 transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => onNavClick(e, "skills")} className="hover:text-indigo-500 transition-colors">
            Skills
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={(e) => onNavClick(e, "portfolio")} className="hover:text-indigo-500 transition-colors">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => onNavClick(e, "contact")} className="hover:text-indigo-500 transition-colors">
            Contact
          </a>
        </li>
      </ul>
      <button
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:shadow-lg transition-all"
        onClick={() => (window.location.href = "https://wa.me/6285791469949")}
      >
        <Send size={16} /> Hire Me
      </button>
    </nav>
  );
}

export default Navbar;
