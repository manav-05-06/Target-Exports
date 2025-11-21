import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHideNav(currentY > scrollY && currentY > 120);
      setScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hideNav ? -140 : 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="
        fixed top-0 left-0 w-full z-[100]
        bg-[#f3ece5] dark:bg-[#101010]    /* Solid background */
        bg-opacity-95
        backdrop-blur-1xl
        border-b border-[#d7bfa6]/50 dark:border-[#ffffff20]
        shadow-[0_8px_35px_rgba(0,0,0,0.15)]
        before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px]
        before:bg-gradient-to-r before:from-[#b07443]/0 before:via-[#b07443]/70 before:to-[#b07443]/0
      "
    >
      <div className="max-w-8xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <div
            className="
              w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden 
              shadow-lg ring-2 ring-[#b07443]/15 group-hover:ring-[#b07443]/40
              transition-all duration-300
            "
          >
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-all duration-300"
            />
          </div>

          <span className="
            text-xl md:text-3xl font-serif tracking-wide
            text-[#9a6233] dark:text-[#e8c8a4]
            hidden sm:block
          ">
            Target Exports
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `
                  relative text-[17px] font-medium tracking-wide transition
                  ${
                    isActive
                      ? "text-[#b07443]"
                      : "text-gray-700 dark:text-gray-300 hover:text-[#b07443]"
                  }
                `
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {/* Animated underline */}
                  <span
                    className={`
                      absolute left-0 bottom-[-4px] h-[2px] rounded-full
                      transition-all duration-300
                      ${
                        isActive
                          ? "w-full bg-[#b07443]"
                          : "w-0 bg-[#b07443] group-hover:w-full"
                      }
                    `}
                  />
                </>
              )}
            </NavLink>
          ))}

          <DarkModeToggle />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(true)}
          className="
            md:hidden p-3 rounded-xl 
            bg-[#f0e7dd] dark:bg-[#232323]
            border border-[#b0744350] shadow-md
            active:scale-95 transition
          "
        >
          <Menu className="w-7 h-7 text-[#b07443]" />
        </button>
      </div>

      {/* MOBILE OVERLAY + SIDEBAR */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* BACKDROP with animated glass */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[140] md:hidden"
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="
                fixed top-0 right-0 h-full w-[85%] sm:w-[55%]
                bg-[#f5ede5] dark:bg-[#161616]
                backdrop-blur-2xl
                border-l border-[#b0744330]
                shadow-[0_0_40px_rgba(0,0,0,0.25)]
                rounded-l-3xl z-[150]
              "
            >
              <div className="flex justify-between items-center px-7 py-6 border-b border-[#b0744330]">
                <h2 className="text-[22px] font-semibold text-[#b07443]">
                  Menu
                </h2>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="
                    p-2.5 rounded-xl bg-[#f0e7dd] dark:bg-[#222]
                    border border-[#b0744330] shadow
                  "
                >
                  <X className="w-6 h-6 text-[#b07443]" />
                </button>
              </div>

              <div className="flex flex-col gap-8 mt-10 px-10">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `
                          text-[21px] font-medium tracking-wide
                          ${
                            isActive
                              ? "text-[#b07443]"
                              : "text-gray-700 dark:text-gray-300 hover:text-[#b07443]"
                          }
                        `
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}

                <div className="pt-10">
                  <DarkModeToggle />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
