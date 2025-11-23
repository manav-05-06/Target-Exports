import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    },
  });

  return (
    <footer className="relative bg-[#0c0c0c] dark:bg-[#080808] text-gray-300 pt-20 pb-12 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-[#b07443]/20">

      {/* Premium Soft Glows */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-28 -left-36 w-[550px] h-[550px] bg-[#b07443]/18 blur-[180px] rounded-full"
      />
      <motion.div
        animate={{ opacity: [0.12, 0.25, 0.12], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -bottom-32 -right-36 w-[580px] h-[580px] bg-[#e8c9a8]/18 blur-[180px] rounded-full"
      />

      {/* CONTENT GRID */}
      <div className="relative z-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 md:gap-16">

        {/* ADDRESS */}
        <motion.div variants={fadeIn(0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h3 className="text-xl font-semibold text-white mb-6 tracking-wide">
            Address
          </h3>

          <ul className="space-y-4 text-[15px] leading-relaxed">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#b07443] mt-1" />
              <span>
                FLAT NO-GB-107, GARNET-B, URBANA JEWELS, MUHANA MANDI ROAD,
                SANGANER, JAIPUR – 302029, RAJASTHAN, INDIA
              </span>
            </li>

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#b07443]" /> +91 9928355318
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#b07443]" />
              <a href="mailto:Target02101967@gmail.com" className="hover:text-[#b07443]">
                Target02101967@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#b07443]" />
              <a href="mailto:manish.dhar.1967@gmail.com" className="hover:text-[#b07443]">
                manish.dhar.1967@gmail.com
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.link}
                whileHover={{
                  scale: 1.17,
                  y: -3,
                  color: "#b07443",
                  borderColor: "#b07443",
                  boxShadow: "0 0 12px rgba(176,116,67,0.35)"
                }}
                className="w-10 h-10 flex items-center justify-center border border-gray-600/40 
                rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* SERVICES */}
        <motion.div variants={fadeIn(0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h3 className="text-xl font-semibold text-white mb-6 tracking-wide">Services</h3>
          <ul className="space-y-4 text-[15px]">
            <li><Link to="/products#papermache" className="hover:text-[#b07443]">Papier-Mâché</Link></li>
            <li><Link to="/products#terracotta" className="hover:text-[#b07443]">Terracotta</Link></li>
          </ul>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div variants={fadeIn(0.3)} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h3 className="text-xl font-semibold text-white mb-6 tracking-wide">Quick Links</h3>
          <ul className="space-y-4 text-[15px]">
            <li><Link to="/about" className="hover:text-[#b07443]">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[#b07443]">Contact Us</Link></li>
            <li><Link to="/products" className="hover:text-[#b07443]">Our Products</Link></li>
            <li><Link to="/terms" className="hover:text-[#b07443]">Terms & Conditions</Link></li>
            <li><Link to="/support" className="hover:text-[#b07443]">Support</Link></li>
          </ul>
        </motion.div>

        {/* NEWSLETTER */}
        <motion.div variants={fadeIn(0.4)} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h3 className="text-xl font-semibold text-white mb-6 tracking-wide">Newsletter</h3>

          <p className="text-sm mb-6 text-gray-400">
            Stay updated with our latest décor and artisan collections.
          </p>

          <form className="flex items-center bg-white/5 rounded-xl overflow-hidden border border-white/15 
          backdrop-blur-md shadow-inner focus-within:border-[#b07443]/40 transition-all duration-300">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-full bg-transparent text-gray-200 placeholder-gray-500 outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.93 }}
              className="bg-gradient-to-r from-[#b07443] to-[#d8a777] 
              hover:shadow-[0_0_14px_rgba(176,116,67,0.5)]
              text-white px-6 py-3 font-medium transition-all"
            >
              Sign Up
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* BOTTOM STRIP */}
      <motion.section
        variants={fadeIn(0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-30 mt-16 pt-6 border-t border-[#b07443]/25 
        flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
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
            className="text-[#b07443] hover:underline"
          >
            Manav Khandelwal
          </a>
        </p>
      </motion.section>

    </footer>
  );
};

export default Footer;
