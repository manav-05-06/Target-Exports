import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-8 right-8 z-50"
    >
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          whileHover={{
            scale: 1.15,
            boxShadow: "0 0 20px rgba(176,116,67,0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#b07443] text-white p-3 rounded-full shadow-lg 
                     hover:bg-[#9a6038] transition-all duration-300"
        >
          <FaArrowUp size={18} />
        </motion.button>
      )}
    </motion.div>
  );
};

export default ScrollToTop;
