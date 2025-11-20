import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    },
  });

  return (
    <footer className="relative bg-[#111]/90 dark:bg-[#0e0e0e]/95 text-gray-300 pt-20 pb-10 px-6 md:px-12 lg:px-20 backdrop-blur-2xl border-t border-white/10 overflow-hidden">
      {/* 🌾 Ambient Background Glow */}
      <motion.div
        animate={{ opacity: [0.25, 0.4, 0.25], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#b07443]/25 blur-[150px] rounded-full"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#f3d1b0]/30 blur-[150px] rounded-full"
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-14">
        {/* 🏠 Address */}
        <motion.div variants={fadeIn(0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h3 className="text-xl font-semibold text-white mb-5 tracking-wide">
            Address
          </h3>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#b07443] mt-1" />
              <span>
                FLAT NO-GB-107, GARNET-B, URBANA JEWELS, MUHANA MANDI ROAD,
                SANGANER, JAIPUR 302029, RAJASTHAN, INDIA
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#b07443]" /> +91 9928355318
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#b07443]" />
              <a
                href="mailto:Target02101967@gmail.com"
                className="hover:text-[#b07443] transition-all"
              >
                Target02101967@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#b07443]" />
              <a
                href="mailto:manish.dhar.1967@gmail.com"
                className="hover:text-[#b07443] transition-all"
              >
                manish.dhar.1967@gmail.com
              </a>
            </li>
          </ul>

          {/* 🌐 Social Links */}
          <div className="flex gap-4 mt-6">
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.link}
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-9 h-9 flex items-center justify-center border border-gray-500 hover:border-[#b07443] hover:text-[#b07443] rounded-md transition-all"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* 🧱 Services */}
        <motion.div variants={fadeIn(0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h3 className="text-xl font-semibold text-white mb-5 tracking-wide">
            Services
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/products#papermache" className="hover:text-[#b07443] transition-all">
                Papier-Mâché
              </a>
            </li>
            <li>
              <a href="/products#terracotta" className="hover:text-[#b07443] transition-all">
                Terracotta
              </a>
            </li>
          </ul>
        </motion.div>

        {/* 🔗 Quick Links */}
        <motion.div variants={fadeIn(0.3)} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h3 className="text-xl font-semibold text-white mb-5 tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/about" className="hover:text-[#b07443]">About Us</a></li>
            <li><a href="/contact" className="hover:text-[#b07443]">Contact Us</a></li>
            <li><a href="/products" className="hover:text-[#b07443]">Our Products</a></li>
            <li><a href="#" className="hover:text-[#b07443]">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-[#b07443]">Support</a></li>
          </ul>
        </motion.div>

        {/* 📰 Newsletter */}
        <motion.div variants={fadeIn(0.4)} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h3 className="text-xl font-semibold text-white mb-5 tracking-wide">
            Newsletter
          </h3>
          <p className="text-sm mb-5 text-gray-400">
            Stay updated with our latest handcrafted décor collections and offers.
          </p>
          <form className="flex items-center bg-white/10 rounded-xl overflow-hidden border border-white/20 backdrop-blur-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-full bg-transparent text-gray-200 placeholder-gray-400 outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-[#b07443] hover:bg-[#9a6038] text-white px-5 py-3 rounded-r-xl transition-all font-medium"
            >
              Sign Up
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* 📜 Bottom Footer */}
      <motion.section
  variants={fadeIn(0.5)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="relative z-50 mt-14 pt-6 border-t border-gray-600/30 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4 pointer-events-auto"
>
  <p>
    © {new Date().getFullYear()}{" "}
    <span className="text-[#b07443] font-medium">Target Exports</span>. All Rights Reserved.
  </p>
  <p>
    Designed by{" "}
    <a
      href="https://github.com/manav-05-06"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#b07443] hover:underline cursor-pointer relative z-50"
      onClick={(e) => {
        e.stopPropagation();
        window.open("https://github.com/manav-05-06", "_blank");
      }}
    >
      Manav Khandelwal
    </a>
  </p>
</motion.section>

    </footer>
  );
};

export default Footer;
