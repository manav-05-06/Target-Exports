import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

import terracotta1 from "../assets/Vas.jpg";
import terracotta2 from "../assets/vas2.jpg";
import pottery3 from "../assets/Vas.jpg";

const Home = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 400], [0, -80]);

  const potteryImages = [
    { img: terracotta1, title: "Handcrafted Earthen Vase" },
    { img: terracotta2, title: "Rustic Clay Pot" },
    { img: pottery3, title: "Classic Pottery Craft" },
    { img: terracotta2, title: "Decorative Artisan Bowl" },
  ];

  return (
    <div className="relative overflow-hidden">

      {/* 🌾 Animated Terracotta Background Glows */}
      <motion.div
        animate={{ opacity: [0.25, 0.4, 0.25], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-[#b07443]/35 blur-[160px] rounded-full"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-[#f3d1b0]/35 blur-[160px] rounded-full"
      />

      {/* 🏡 HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-[95vh] px-6 md:px-12 text-center overflow-hidden">
        
        {/* Parallax Background */}
        <motion.img
          src={terracotta1}
          alt="Background Pottery"
          style={{ y: yParallax }}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-transparent dark:from-black/70 dark:via-black/40" />

        {/* Glassmorphic Hero Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 backdrop-blur-xl bg-white/20 dark:bg-black/30 border border-white/40 rounded-3xl px-6 md:px-10 py-12 shadow-[0_8px_40px_rgba(176,116,67,0.25)] max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#b07443] via-[#e6c29a] to-[#b07443] bg-clip-text text-transparent">
            Handcrafted Elegance,<br />Inspired by Nature.
          </h1>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
            Discover authentic <strong>Terracotta</strong> & <strong>Papier-Mâché</strong> décor handcrafted by skilled artisans.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/products"
              className="px-8 py-3 bg-gradient-to-r from-[#b07443] to-[#d8a777] text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition-all"
            >
              Explore Products
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border-2 border-[#b07443] text-[#b07443] dark:text-[#f3d1b0] rounded-xl font-semibold hover:bg-[#b07443] hover:text-white transition-all"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 🏺 SEAMLESS INFINITE CAROUSEL */}
      <section className="py-24 flex flex-col items-center relative overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold mb-10 bg-gradient-to-r from-[#b07443] via-[#e6c29a] to-[#b07443] bg-clip-text text-transparent"
        >
          Our Art in Motion
        </motion.h2>

        <motion.div
          className="flex gap-10 flex-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...potteryImages, ...potteryImages].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-3xl overflow-hidden shadow-xl border border-white/30 backdrop-blur-xl"
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#000000cc] to-transparent text-white text-center py-3">
                {item.title}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 🪄 CRAFTING JOURNEY */}
      <section className="relative py-24 px-6 md:px-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#b07443] to-[#d8a777] bg-clip-text text-transparent"
        >
          The Crafting Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-lg mb-10"
        >
          Each piece is sculpted, shaped, and perfected by artisans using
          centuries-old techniques.
        </motion.p>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Molded by Hand",
            "Sun-Dried & Kiln Fired",
            "Painted with Precision",
            "Finished to Perfection",
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="glass-card p-6 rounded-2xl text-center text-[#b07443] font-semibold text-lg"
            >
              {step}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⭐ CUSTOMER REVIEWS */}
      <section className="py-24 px-6 md:px-12 text-center relative overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold mb-10 bg-gradient-to-r from-[#b07443] via-[#e6c29a] to-[#b07443] bg-clip-text text-transparent"
        >
          What Our Customers Say
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              name: "Sophia Mitchell",
              location: "London, UK",
              text: "The vase craftsmanship is stunning! Adds warmth to my home.",
            },
            {
              name: "Arjun Mehta",
              location: "Mumbai, India",
              text: "Beautiful papier-mâché piece. Sustainable and elegant!",
            },
            {
              name: "Emma Collins",
              location: "New York, USA",
              text: "You can feel the handmade charm in every detail.",
            },
          ].map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="glass-card p-8 rounded-2xl shadow-xl backdrop-blur-xl"
            >
              <p className="text-gray-700 dark:text-gray-300 italic mb-6">
                “{review.text}”
              </p>
              <h4 className="text-lg font-semibold text-[#b07443]">
                {review.name}
              </h4>
              <p className="text-sm text-gray-500">{review.location}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💫 FINAL CTA */}
      <section className="py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold mb-6 text-[#b07443]"
        >
          Bring Handcrafted Art Into Your Space
        </motion.h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto">
          Every piece reflects <strong>earth, soul, and creativity</strong>.
        </p>

        <Link
          to="/contact"
          className="px-10 py-4 bg-gradient-to-r from-[#b07443] to-[#d8a777] text-white rounded-xl shadow-lg hover:scale-105 transition-all"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default Home;
