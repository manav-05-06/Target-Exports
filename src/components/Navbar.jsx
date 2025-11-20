import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/30 dark:bg-[#1c1c1c]/40 border-b border-white/20 shadow-[0_4px_20px_rgba(176,116,67,0.15)]">
      <div className="max-w mx-auto flex justify-between items-center px-6 md:px-10 py-4">
        {/* 🏺 Logo / Brand Name */}
        <Link to="/" className="text-2xl font-bold text-[#b07443] dark:text-[#f3d1b0] tracking-wide">
          <img src={logo} alt="Logo" className="inline-block w-15 h-12 rounded-md hover:w-15 h-15" />
          Target Exports
        </Link>

        {/* 🌐 Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-[16px] font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-[#b07443] dark:text-[#f3d1b0]"
                      : "text-gray-700 dark:text-gray-300 hover:text-[#b07443]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}

          {/* 🌙 Dark Mode Button */}
          <DarkModeToggle />
        </div>

        {/* 📱 Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/20 dark:bg-[#2e2e2e]/50 backdrop-blur-lg border border-white/20"
        >
          {menuOpen ? <X className="w-6 h-6 text-[#b07443]" /> : <Menu className="w-6 h-6 text-[#b07443]" />}
        </button>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/60 dark:bg-[#1c1c1c]/70 backdrop-blur-2xl border-t border-white/20 shadow-lg"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-[17px] font-medium transition-all ${
                      isActive
                        ? "text-[#b07443] dark:text-[#f3d1b0]"
                        : "text-gray-700 dark:text-gray-300 hover:text-[#b07443]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <DarkModeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
