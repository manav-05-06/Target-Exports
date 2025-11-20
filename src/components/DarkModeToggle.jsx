import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react"; // ⛅ simple icon set

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // 🌙 Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  // 🌓 Handle toggle
  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = isDark ? "light" : "dark";

    if (isDark) {
      html.classList.remove("dark");
    } else {
      html.classList.add("dark");
    }

    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      className="relative w-12 h-12 flex items-center justify-center rounded-full 
                 bg-white/30 dark:bg-[#2e2e2e]/50 backdrop-blur-md border border-white/20 
                 shadow-md transition-all duration-300 hover:scale-105"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sun className="w-6 h-6 text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Moon className="w-6 h-6 text-[#b07443]" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default DarkModeToggle;
