import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

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
    <>
      <SEO
        title="Target Exports - Handcrafted Terracotta & Papier-Mâché Décor | Jaipur, India"
        description="Premium handcrafted Terracotta and Papier-Mâché home décor products from Jaipur, India. Authentic artisan-made pottery, vases, and decorative items. Handmade with traditional techniques."
        keywords="terracotta décor, papier-mâché, handcrafted pottery, artisan décor, Jaipur handicrafts, Indian pottery, handmade vases, decorative terracotta, traditional crafts, home décor India"
        image="https://target-exports.vercel.app/src/assets/Vas.jpg"
        url="https://target-exports.vercel.app/"
      />
      <main className="relative overflow-hidden" role="main">

      {/* 🌾 Subtle Background Glows */}
      <motion.div
        animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-[#C46A4A]/20 blur-[160px] rounded-full"
      />
      <motion.div
        animate={{ opacity: [0.12, 0.22, 0.12], scale: [1, 1.06, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-[#8E857A]/15 blur-[160px] rounded-full"
      />

      {/* 🏡 HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-[95vh] px-6 md:px-12 text-center overflow-hidden">
        
        {/* Parallax Background */}
        <motion.img
          src={terracotta1}
          alt="Handcrafted terracotta pottery background showcasing traditional Indian artisan work"
          style={{ y: yParallax }}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          loading="lazy"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#F4EFE8]/85 dark:bg-[#3B2F2A]/85" />

        {/* Glassmorphic Hero Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 backdrop-blur-xl bg-[#F4EFE8]/80 dark:bg-[#3B2F2A]/80 border border-[#C46A4A]/20 rounded-2xl px-6 md:px-10 py-12 shadow-lg max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-8 text-[#1C1A18] dark:text-[#F4EFE8] leading-tight">
            Handcrafted Elegance,<br />Inspired by Nature.
          </h1>

          <p className="text-lg md:text-xl text-[#1C1A18]/90 dark:text-[#F4EFE8]/90 mb-10 leading-relaxed max-w-2xl mx-auto" style={{ lineHeight: '1.8' }}>
            Discover authentic <strong>Terracotta</strong> & <strong>Papier-Mâché</strong> décor handcrafted by skilled artisans. 
            Each piece carries the marks of its maker—the slight variations, the human touch, the time invested.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/products"
              className="px-8 py-3 bg-[#C46A4A] text-[#F4EFE8] rounded-lg font-medium shadow-md hover:bg-[#3B2F2A] dark:hover:bg-[#1C1A18] transition-colors duration-500 tracking-wide"
              style={{ letterSpacing: '0.05em' }}
            >
              Explore collection
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border-2 border-[#C46A4A] text-[#C46A4A] dark:text-[#F4EFE8] rounded-lg font-medium hover:bg-[#C46A4A] hover:text-[#F4EFE8] transition-all duration-500 tracking-wide"
              style={{ letterSpacing: '0.05em' }}
            >
              Our story
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 🏺 SEAMLESS INFINITE CAROUSEL */}
      <section className="py-24 flex flex-col items-center relative overflow-hidden bg-[#F4EFE8]/30 dark:bg-[#3B2F2A]/30">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-medium mb-16 text-[#1C1A18] dark:text-[#F4EFE8] text-center"
        >
          Our Art in Motion
        </motion.h2>

        {/* Improved Seamless Infinite Carousel */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-8 md:gap-10 flex-nowrap carousel-container">
            {/* Duplicate items for seamless infinite loop - need enough copies */}
            {[...Array(6)].map((_, setIndex) => (
              <div
                key={setIndex}
                className="flex gap-8 md:gap-10 flex-nowrap carousel-track"
              >
                {potteryImages.map((item, i) => (
                  <motion.div
                    key={`${setIndex}-${i}`}
                    whileHover={{ 
                      scale: 1.08,
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] flex-shrink-0 rounded-2xl overflow-hidden shadow-xl border border-[#C46A4A]/20 dark:border-[#C46A4A]/30 bg-[#F4EFE8] dark:bg-[#3B2F2A] group/item cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A18]/60 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 z-10" />
                    <img 
                      src={item.img} 
                      alt={`${item.title} - Handcrafted terracotta pottery from Target Exports, Jaipur`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110" 
                      style={{ filter: 'contrast(1.05) brightness(0.98)' }}
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1C1A18]/95 via-[#1C1A18]/80 to-transparent dark:from-[#3B2F2A]/95 dark:via-[#3B2F2A]/80 text-[#F4EFE8] text-center py-4 px-4 z-20">
                      <p className="text-sm md:text-base font-medium">{item.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for seamless fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F4EFE8] dark:from-[#3B2F2A] to-transparent z-30 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F4EFE8] dark:from-[#3B2F2A] to-transparent z-30 pointer-events-none" />
        </div>
      </section>

      {/* 🪄 CRAFTING JOURNEY */}
      <section className="relative py-24 px-6 md:px-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl md:text-5xl font-serif font-medium mb-8 text-[#1C1A18] dark:text-[#F4EFE8]"
        >
          The Crafting Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl mx-auto text-[#1C1A18]/90 dark:text-[#F4EFE8]/90 text-lg md:text-xl mb-12 leading-relaxed"
          style={{ lineHeight: '1.8' }}
        >
          Each piece is sculpted, shaped, and perfected by artisans using
          centuries-old techniques. The slight imperfections are not flaws—they are proof of human creation.
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
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 rounded-xl text-center text-[#C46A4A] dark:text-[#F4EFE8] font-medium text-lg border border-[#C46A4A]/20"
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
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl md:text-4xl font-serif font-medium mb-12 text-[#1C1A18] dark:text-[#F4EFE8]"
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
              transition={{ duration: 1, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="glass-card p-8 rounded-xl shadow-lg backdrop-blur-xl border border-[#C46A4A]/10"
            >
              <p className="text-[#1C1A18]/90 dark:text-[#F4EFE8]/90 italic mb-6 text-lg leading-relaxed" style={{ lineHeight: '1.8' }}>
                "{review.text}"
              </p>
              <h4 className="text-lg font-medium text-[#C46A4A] dark:text-[#F4EFE8] mb-1">
                {review.name}
              </h4>
              <p className="text-sm text-[#8E857A] dark:text-[#8E857A]/80">{review.location}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💫 FINAL CTA */}
      <section className="py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl md:text-4xl font-serif font-medium mb-6 text-[#1C1A18] dark:text-[#F4EFE8]"
        >
          Bring Handcrafted Art Into Your Space
        </motion.h2>
        <p className="text-[#1C1A18]/90 dark:text-[#F4EFE8]/90 mb-10 max-w-xl mx-auto text-lg leading-relaxed" style={{ lineHeight: '1.8' }}>
          Every piece reflects <strong>earth, soul, and creativity</strong>.
        </p>

        <Link
          to="/contact"
          className="px-10 py-4 bg-[#C46A4A] text-[#F4EFE8] rounded-lg shadow-md hover:bg-[#3B2F2A] dark:hover:bg-[#1C1A18] transition-colors duration-500 font-medium tracking-wide"
          style={{ letterSpacing: '0.05em' }}
        >
          Get in touch
        </Link>
      </section>
      </main>
    </>
  );
};

export default Home;
