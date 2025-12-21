import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
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
    <>
      <SEO
        title="Terracotta Collection - Handcrafted Pottery & Décor | Target Exports"
        description="Explore our handcrafted Terracotta collection - elegant pottery, vases, and decorative items from Jaipur, India. Traditional techniques, authentic artisan work."
        keywords="terracotta collection, handcrafted terracotta, terracotta pottery Jaipur, terracotta vases, earthenware décor, clay pottery India, rustic terracotta, traditional pottery"
        image="https://target-exports.vercel.app/src/assets/Vas.jpg"
        url="https://target-exports.vercel.app/terracotta"
      />
      <main className="relative overflow-hidden min-h-screen py-20 px-6 md:px-12" role="main">
      {/* 🌾 Subtle Background Glows */}
      <motion.div
        animate={{ opacity: [0.12, 0.22, 0.12], scale: [1, 1.04, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-32 w-[500px] h-[500px] bg-[#C46A4A]/15 blur-[160px] rounded-full"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.06, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -right-32 w-[500px] h-[500px] bg-[#8E857A]/12 blur-[160px] rounded-full"
      />

      {/* 🏺 Title Section */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-5xl md:text-6xl font-serif font-medium text-center mb-8 text-[#1C1A18] dark:text-[#F4EFE8]"
      >
        Terracotta Collection
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-[#1C1A18]/90 dark:text-[#F4EFE8]/90 max-w-3xl mx-auto text-center text-lg md:text-xl mb-16 leading-relaxed"
        style={{ lineHeight: '1.8' }}
      >
        Discover handcrafted Terracotta décor — each piece a story of heritage,
        artistry, and earthy charm.
      </motion.p>

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
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-6 overflow-hidden border border-[#C46A4A]/20 dark:border-[#C46A4A]/30 transition-all duration-500"
          >
            <motion.img
              src={item.img}
              alt={`${item.title} - Handcrafted terracotta from Target Exports, Jaipur`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl w-full h-[280px] object-cover mb-5"
              loading="lazy"
              style={{ filter: 'contrast(1.05) brightness(0.98)' }}
            />
            <h3 className="text-2xl font-serif font-medium text-[#C46A4A] dark:text-[#F4EFE8] mb-3">
              {item.title}
            </h3>
            <p className="text-[#1C1A18]/90 dark:text-[#F4EFE8]/90 mb-6 leading-relaxed" style={{ lineHeight: '1.8' }}>
              {item.desc}
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-6 py-2.5 bg-[#C46A4A] text-[#F4EFE8] rounded-lg shadow-md hover:bg-[#3B2F2A] dark:hover:bg-[#1C1A18] transition-colors duration-500 font-medium tracking-wide"
              style={{ letterSpacing: '0.05em' }}
            >
              Contact to order
            </motion.a>
          </motion.div>
        ))}
      </div>
    </main>
    </>
  );
};

export default Terracotta;
