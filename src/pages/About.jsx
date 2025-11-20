import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import vasLandscape from "../assets/Vas.jpg";
import vasPortrait from "../assets/vas2.jpg";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="backdrop-blur-0 relative max-w mx-auto px-6 py-8 overflow-hidden">
      {/* 🌾 Animated Background Glows */}
      <motion.div
        animate={{ opacity: [0.25, 0.4, 0.25], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-24 w-[400px] h-[400px] bg-[#b07443]/30 blur-[140px] rounded-full"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-24 -right-24 w-[420px] h-[420px] bg-[#f3d1b0]/35 blur-[150px] rounded-full"
      />

      {/* ✨ Glassmorphic Container */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12
        bg-white/20 backdrop-blur-2xl border border-white/30 
        rounded-[2rem] p-8 md:p-12 shadow-[0_10px_60px_rgba(176,116,67,0.2)] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
      >
        {/* 🏺 Left Image Section */}
        <div className="relative flex flex-col w-full lg:w-[48%] justify-center items-center gap-8 group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#b07443]/20 to-transparent blur-[120px] rounded-3xl"></div>

          {/* 💫 Desktop Layout */}
          <div className="hidden md:flex w-full justify-center items-end gap-6 relative">
            <motion.img
              src={vasPortrait}
              alt="Terracotta Vase"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.2)] w-[42%] h-[420px] md:h-[480px] object-cover z-10 transition-all duration-700 ease-in-out"
            />

            <div className="flex flex-col items-center w-[55%] z-10 relative">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 text-center leading-tight"
              >
                <span className="bg-gradient-to-r from-[#b07443] via-[#e6c29a] to-[#b07443] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(176,116,67,0.3)]">
                  About <span className="text-[#754b24]">Target Exports</span>
                </span>
              </motion.h2>

              <motion.img
                src={vasLandscape}
                alt="Decor Vase"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.25)] border border-white/50 w-full h-[300px] md:h-[350px] object-cover transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
              />
            </div>
          </div>

          {/* 📱 Mobile Layout */}
          <div className="flex flex-col md:hidden items-center w-full relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-3xl font-extrabold text-[#3a2614] mb-4 text-center leading-tight"
            >
              <span className="bg-gradient-to-r from-[#b07443] to-[#e6c29a] bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(176,116,67,0.3)]">
                About Target Exports
              </span>
            </motion.h2>

            <motion.img
              src={vasLandscape}
              alt="Decor Vase"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="rounded-3xl shadow-[0_8px_25px_rgba(0,0,0,0.2)] w-full h-[260px] sm:h-[300px] object-cover border border-white/40"
            />
          </div>
        </div>

        {/* 📝 Right Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-[48%] text-center lg:text-left"
        >
          <p className="text-gray-700 leading-relaxed text-[15px] md:text-[16px] mb-5">
            Target Exports offers a captivating collection of home and garden décor products,
            thoughtfully crafted to elevate the aesthetic charm of any space. Our pieces bring a
            rustic and vintage touch, infusing warmth and timeless elegance into your surroundings.
          </p>
          <p className="text-gray-700 leading-relaxed text-[15px] md:text-[16px] mb-5">
            Our specialty lies in <strong>Terracotta décor</strong> and <strong>Papier-mâché décor</strong>,
            each piece skillfully handcrafted by artisans using traditional techniques that highlight
            natural textures, elegance, and authenticity.
          </p>

          {/* Buttons Section */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
            <motion.button
              onClick={() => navigate("/terracotta")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#b07443] to-[#d8a777] text-white px-8 py-3 rounded-xl shadow-md hover:from-[#a5622f] hover:to-[#c78c57]"
            >
              Explore Terracotta
            </motion.button>

            <motion.button
              onClick={() => navigate("/papier-mache")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#754b24] to-[#b07443] text-white px-8 py-3 rounded-xl shadow-md hover:from-[#5a3818] hover:to-[#9b6133]"
            >
              Explore Papier-Mâché
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      
    </div>
  );
};

export default About;
