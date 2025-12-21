import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
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
    <>
      <SEO
        title="Products - Terracotta & Papier-Mâché Collections | Target Exports"
        description="Browse our handcrafted Terracotta and Papier-Mâché décor collections. Authentic artisan-made pottery, vases, and decorative items from Jaipur, India."
        keywords="terracotta products, papier-mâché products, handcrafted pottery collection, artisan décor products, Indian handicrafts online, Jaipur pottery, decorative terracotta items"
        image="https://target-exports.vercel.app/src/assets/Vas.jpg"
        url="https://target-exports.vercel.app/products"
      />
      <main className="relative w-full min-h-screen py-20 px-6 md:px-12 lg:px-20 overflow-hidden" role="main">
      {/* 🌾 Subtle Background Glows */}
      <motion.div
        animate={{ opacity: [0.12, 0.22, 0.12], scale: [1, 1.04, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-[#C46A4A]/15 blur-[150px] rounded-full"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.06, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 w-[480px] h-[480px] bg-[#8E857A]/12 blur-[150px] rounded-full"
      />

      {/* ✨ Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-serif font-medium text-center mb-16 text-[#1C1A18] dark:text-[#F4EFE8]"
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
            whileHover={{ scale: 1.03, y: -4 }}
            className="glass-card rounded-2xl overflow-hidden shadow-lg border border-[#C46A4A]/20 dark:border-[#C46A4A]/30 cursor-pointer group"
          >
            <div className="overflow-hidden relative">
              <motion.img
                src={item.img}
                alt={`${item.title} - Handcrafted décor from Target Exports, Jaipur`}
                className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                style={{ filter: 'contrast(1.05) brightness(0.98)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A18]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>

            <div className="p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4 text-[#C46A4A] dark:text-[#F4EFE8]">
                {item.title}
              </h3>
              <p className="text-[#1C1A18]/90 dark:text-[#F4EFE8]/90 mb-8 text-lg leading-relaxed" style={{ lineHeight: '1.8' }}>{item.desc}</p>

              <Link
                to={item.link}
                className="inline-block bg-[#C46A4A] text-[#F4EFE8] font-medium py-3 px-8 rounded-lg shadow-md hover:bg-[#3B2F2A] dark:hover:bg-[#1C1A18] transition-colors duration-500 tracking-wide"
                style={{ letterSpacing: '0.05em' }}
              >
                View collection
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      </main>
    </>
  );
};

export default Products;
