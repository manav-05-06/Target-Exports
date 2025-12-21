import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import art1 from "../assets/vas2.jpg";
import art2 from "../assets/Vas.jpg";
import art3 from "../assets/vas2.jpg";

const papierItems = [
  {
    title: "Papier-Mâché Mask",
    desc: "Hand-painted mask celebrating sustainable artistry and culture.",
    img: art1,
  },
  {
    title: "Floral Sculpture",
    desc: "Eco-friendly papier-mâché sculpture inspired by natural harmony and crafted elegance.",
    img: art2,
  },
  {
    title: "Decorative Wall Plate",
    desc: "A hand-painted paper wall plate — sustainable, artistic, and timeless.",
    img: art3,
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

const PapierMache = () => {
  return (
    <>
      <SEO
        title="Papier-Mâché Collection - Handcrafted Paper Art & Décor | Target Exports"
        description="Discover our sustainable Papier-Mâché collection - eco-friendly handcrafted paper art, masks, and decorative items from Jaipur, India."
        keywords="papier-mâché collection, handcrafted paper art, papier-mâché masks, sustainable décor, eco-friendly crafts, Indian paper art, Jaipur papier-mâché, traditional paper crafts"
        image="https://target-exports.vercel.app/src/assets/vas2.jpg"
        url="https://target-exports.vercel.app/papier-mache"
      />
      <main className="relative overflow-hidden min-h-screen py-20 px-6 md:px-12" role="main">
      {/* 🌸 Subtle Background Glows */}
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

      {/* 🎨 Title Section */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-5xl md:text-6xl font-serif font-medium text-center mb-8 text-[#1C1A18] dark:text-[#F4EFE8]"
      >
        Papier-Mâché Collection
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-[#1C1A18]/90 dark:text-[#F4EFE8]/90 max-w-3xl mx-auto text-center text-lg md:text-xl mb-16 leading-relaxed"
        style={{ lineHeight: '1.8' }}
      >
        Discover sustainable papier-mâché décor that merges traditional
        craftsmanship with modern elegance — giving paper a new life.
      </motion.p>

      {/* 🧱 Scroll-Reveal Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {papierItems.map((item, i) => (
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
              alt={`${item.title} - Handcrafted papier-mâché from Target Exports, Jaipur`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl w-full h-[280px] object-cover mb-5"
              loading="lazy"
              style={{ filter: 'contrast(1.05) brightness(0.98)' }}
            />
            <h3 className="text-2xl font-serif font-medium text-[#C46A4A] dark:text-[#F4EFE8] mb-3">
              {item.title}
            </h3>
            <p className="text-[#1C1A18]/90 dark:text-[#F4EFE8]/90 mb-6 leading-relaxed" style={{ lineHeight: '1.8' }}>{item.desc}</p>
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

export default PapierMache;
