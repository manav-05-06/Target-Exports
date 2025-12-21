import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import vasLandscape from "../assets/Vas.jpg";
import vasPortrait from "../assets/vas2.jpg";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="About Target Exports - Handcrafted Terracotta & Papier-Mâché Artisans | Jaipur"
        description="Learn about Target Exports, premium handcrafted Terracotta and Papier-Mâché décor from Jaipur, India. Discover our artisan story, traditional techniques, and commitment to preserving slow craft."
        keywords="about target exports, terracotta artisans Jaipur, papier-mâché craftsmen, Indian handicraft makers, traditional pottery techniques, Jaipur artisans, handcrafted décor makers"
        image="https://target-exports.vercel.app/src/assets/Vas.jpg"
        url="https://target-exports.vercel.app/about"
      />
      <main className="relative max-w-7xl mx-auto px-6 py-12 md:py-16 lg:py-20 overflow-hidden min-h-screen" role="main">
      {/* 🌾 Animated Background Glows */}
      <motion.div
        animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-24 w-[400px] h-[400px] bg-[#C46A4A]/20 blur-[140px] rounded-full dark:bg-[#C46A4A]/15"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-24 -right-24 w-[420px] h-[420px] bg-[#B07443]/15 blur-[150px] rounded-full dark:bg-[#B07443]/10"
      />

      {/* ✨ Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12
        bg-[#F4EFE8]/80 dark:bg-[#3B2F2A]/80 border border-[#C46A4A]/20 dark:border-[#C46A4A]/15
        rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-[0_8px_40px_rgba(28,26,24,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.3)] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
      >
        {/* 🏺 Left Image Section */}
        <div className="relative flex flex-col w-full lg:w-[48%] justify-center items-center gap-8 group">
          {/* 💫 Desktop Layout */}
          <div className="hidden md:flex w-full justify-center items-end gap-6 relative">
            <motion.img
              src={vasPortrait}
              alt="Handcrafted terracotta vase from Target Exports, Jaipur - Traditional Indian pottery"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-3xl shadow-[0_8px_30px_rgba(28,26,24,0.15)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] w-[42%] h-[420px] md:h-[480px] object-cover z-10 transition-all duration-500 ease-in-out"
              loading="lazy"
            />

            <div className="flex flex-col items-center w-[55%] z-10 relative">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-5 text-center leading-tight text-[#1C1A18] dark:text-[#F4EFE8]"
              >
                About <span className="text-[#C46A4A] dark:text-[#D89A7A]">Target Exports</span>
              </motion.h2>

              <motion.img
                src={vasLandscape}
                alt="Decorative handcrafted terracotta vase collection from Target Exports, Jaipur"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="rounded-3xl shadow-[0_8px_30px_rgba(28,26,24,0.15)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-[#C46A4A]/20 dark:border-[#C46A4A]/15 w-full h-[300px] md:h-[350px] object-cover transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                loading="lazy"
              />
            </div>
          </div>

          {/* 📱 Mobile Layout */}
          <div className="flex flex-col md:hidden items-center w-full relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-3xl font-serif font-medium text-[#1C1A18] dark:text-[#F4EFE8] mb-4 text-center leading-tight"
            >
              About <span className="text-[#C46A4A] dark:text-[#D89A7A]">Target Exports</span>
            </motion.h2>

            <motion.img
              src={vasLandscape}
              alt="Handcrafted decorative terracotta vase from Target Exports, Jaipur"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl shadow-[0_8px_30px_rgba(28,26,24,0.15)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] w-full h-[260px] sm:h-[300px] object-cover border border-[#C46A4A]/20 dark:border-[#C46A4A]/15"
              loading="lazy"
            />
          </div>
        </div>

        {/* 📝 Right Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="w-full lg:w-[48%] text-center lg:text-left"
        >
          <p className="text-[#1C1A18]/90 dark:text-[#F4EFE8]/90 leading-relaxed text-base md:text-lg mb-6" style={{ lineHeight: '1.8' }}>
            Target Exports offers a captivating collection of home and garden décor products,
            thoughtfully crafted to elevate the aesthetic charm of any space. Our pieces bring a
            rustic and vintage touch, infusing warmth and timeless elegance into your surroundings.
          </p>
          <p className="text-[#1C1A18]/90 dark:text-[#F4EFE8]/90 leading-relaxed text-base md:text-lg mb-8" style={{ lineHeight: '1.8' }}>
            Our specialty lies in <strong className="text-[#C46A4A] dark:text-[#D89A7A] font-semibold">Terracotta décor</strong> and <strong className="text-[#C46A4A] dark:text-[#D89A7A] font-semibold">Papier-mâché décor</strong>,
            each piece skillfully handcrafted by artisans using traditional techniques that highlight
            natural textures, elegance, and authenticity.
          </p>

          {/* Brand Philosophy Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="border-l-4 border-[#C46A4A] dark:border-[#D89A7A] pl-6 py-4 mb-8 italic text-[#1C1A18]/80 dark:text-[#F4EFE8]/80 text-base md:text-lg"
            style={{ lineHeight: '1.8' }}
          >
            "Every piece tells a story of slow craft, human touch, and timeless beauty—rooted in tradition, made for today."
          </motion.blockquote>

          {/* Buttons Section */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
            <motion.button
              onClick={() => navigate("/terracotta")}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="bg-[#C46A4A] dark:bg-[#C46A4A] text-[#F4EFE8] px-8 py-3.5 rounded-xl shadow-[0_4px_12px_rgba(196,106,74,0.3)] dark:shadow-[0_4px_12px_rgba(196,106,74,0.4)] border-2 border-[#C46A4A] hover:bg-[#B85A3A] dark:hover:bg-[#B85A3A] transition-all duration-300 font-medium"
            >
              Explore Terracotta
            </motion.button>

            <motion.button
              onClick={() => navigate("/papier-mache")}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="bg-transparent text-[#C46A4A] dark:text-[#D89A7A] px-8 py-3.5 rounded-xl border-2 border-[#C46A4A] dark:border-[#D89A7A] hover:bg-[#C46A4A]/10 dark:hover:bg-[#C46A4A]/20 transition-all duration-300 font-medium"
            >
              Explore Papier-Mâché
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      </main>
    </>
  );
};

export default About;
