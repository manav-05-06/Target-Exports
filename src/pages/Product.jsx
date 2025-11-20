import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import terracottaImg from "../assets/Vas.jpg";
import papierMacheImg from "../assets/vas2.jpg";

const products = [
  {
    title: "Terracotta Décor",
    desc: "Handcrafted earthen designs that bring rustic warmth and natural beauty into every space.",
    img: terracottaImg,
    link: "/terracotta",
  },
  {
    title: "Papier-Mâché Art",
    desc: "Eco-friendly artistry that combines sustainability with intricate handmade design.",
    img: papierMacheImg,
    link: "/papier-mache",
  },
];

const Products = () => {
  return (
    <section className="relative w-full min-h-screen py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* 🌾 Glowing Background */}
      <motion.div
        animate={{ opacity: [0.25, 0.4, 0.25], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-[#b07443]/25 blur-[150px] rounded-full"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 w-[480px] h-[480px] bg-[#f3d1b0]/30 blur-[150px] rounded-full"
      />

      {/* ✨ Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-[#b07443] via-[#e6c29a] to-[#b07443] bg-clip-text text-transparent"
      >
        Our Collections
      </motion.h2>

      {/* 📦 Product Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">
        {products.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-white/25 dark:bg-[#1b1b1b]/40 border border-white/40 dark:border-[#b07443]/40 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(176,116,67,0.25)] transition-all duration-700 cursor-pointer group"
          >
            <div className="overflow-hidden relative">
              <motion.img
                src={item.img}
                alt={item.title}
                className="w-full h-[320px] object-cover rounded-t-3xl transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>

            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-3 text-[#b07443] dark:text-[#f3d1b0]">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{item.desc}</p>

              <Link
                to={item.link}
                className="inline-block bg-gradient-to-r from-[#b07443] to-[#d8a777] text-white font-semibold py-2.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                View Collection
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
