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
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    },
  });

  return (
    <footer className="relative bg-[#0d0d0d] dark:bg-[#0b0b0b] text-gray-300 pt-20 pb-10 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-[#b07443]/20">

      {/* Glows */}
      <motion.div
        animate={{ opacity: [0.12, 0.22, 0.12], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute -top-28 -left-32 w-[480px] h-[480px] bg-[#b07443]/18 blur-[160px] rounded-full"
      />
      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -bottom-32 -right-32 w-[520px] h-[520px] bg-[#e8c9a8]/18 blur-[170px] rounded-full"
      />

      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">

        {/* ADDRESS */}
        <motion.div variants={fadeIn(0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h3 className="text-xl font-semibold text-white mb-6 tracking-wide">Address</h3>

          <ul className="space-y-4 text-[15px]">
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

          {/* Social icons (external so <a> is OK) */}
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
                whileHover={{ scale: 1.15, y: -3, color: "#b07443", borderColor: "#b07443" }}
                className="w-10 h-10 flex items-center justify-center border border-gray-600/40 rounded-lg transition-all"
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
          <p className="text-sm mb-6 text-gray-400">Stay updated with our latest décor collections.</p>

          <form className="flex items-center bg-white/5 rounded-xl overflow-hidden border border-white/15 backdrop-blur-md shadow-inner">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-full bg-transparent text-gray-200 placeholder-gray-500 outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
              type="submit"
              className="bg-gradient-to-r from-[#b07443] to-[#d8a777] text-white px-6 py-3 font-medium"
            >
              Sign Up
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <motion.section
        variants={fadeIn(0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-20 mt-16 pt-6 border-t border-[#b07443]/25 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
      >
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-[#b07443]">Target Exports</span>. All Rights Reserved.
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
