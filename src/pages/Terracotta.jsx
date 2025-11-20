import React from "react";
import { motion } from "framer-motion";
import vase1 from "../assets/Vas.jpg";
import vase2 from "../assets/vas2.jpg";
import vase3 from "../assets/Vas.jpg";

const terracottaItems = [
  {
    title: "Flower Pot",
    desc: "An elegant hand-thrown terracotta vase that brings warmth and authenticity to your interiors.",
    img: vase1,
  },
  {
    title: "Rustic Terracotta Lamp",
    desc: "A handcrafted lamp with a natural clay finish, designed to emit a soft, earthy glow.",
    img: vase2,
  },
  {
    title: "Decorative Earthen Pot",
    desc: "A beautifully shaped pot with organic textures, perfect for both indoor and outdoor settings.",
    img: vase3,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Terracotta = () => {
  return (
    <section className="relative overflow-hidden min-h-screen py-20 px-6 md:px-12">
      {/* 🌾 Ambient Glows */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-40 -left-32 w-[500px] h-[500px] bg-[#b07443]/30 blur-[160px] rounded-full"
      />
      <motion.div
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -bottom-40 -right-32 w-[500px] h-[500px] bg-[#f3d1b0]/25 blur-[160px] rounded-full"
      />

      {/* 🏺 Title Section */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-10 bg-gradient-to-r from-[#b07443] via-[#e6c29a] to-[#b07443] bg-clip-text text-transparent"
      >
        Terracotta Collection
      </motion.h1>

      <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center text-lg mb-16">
        Discover handcrafted Terracotta décor — each piece a story of heritage,
        artistry, and earthy charm.
      </p>

      {/* 🧱 Product Grid with Scroll Reveal */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {terracottaItems.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
            whileHover={{ scale: 1.05 }}
            className="glass-card rounded-3xl p-6 overflow-hidden border border-white/30 shadow-[0_8px_32px_rgba(176,116,67,0.25)] transition-all duration-500"
          >
            <motion.img
              src={item.img}
              alt={item.title}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl w-full h-[280px] object-cover mb-5"
            />
            <h3 className="text-2xl font-bold text-[#b07443] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-5">
              {item.desc}
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2 bg-gradient-to-r from-[#b07443] to-[#d8a777] text-white rounded-xl shadow-md font-medium"
            >
              Contact to Order
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Terracotta;
