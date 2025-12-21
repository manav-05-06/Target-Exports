import React, { useState } from "react";
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
  const [email, setEmail] = useState("");

  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    },
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const linkVariants = {
    rest: { x: 0, opacity: 0.8 },
    hover: {
      x: 5,
      opacity: 1,
      color: "#C46A4A",
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  const socialIcons = [
    { icon: <FaFacebookF />, link: "#", color: "#1877F2" },
    { icon: <FaTwitter />, link: "#", color: "#1DA1F2" },
    { icon: <FaInstagram />, link: "#", color: "#E4405F" },
    { icon: <FaLinkedinIn />, link: "#", color: "#0077B5" },
  ];

  const services = [
    { name: "Papier-Mâché", link: "/products#papermache" },
    { name: "Terracotta", link: "/products#terracotta" },
  ];

  const quickLinks = [
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
    { name: "Our Products", link: "/products" },
    { name: "Terms & Conditions", link: "/terms" },
    { name: "Support", link: "/support" },
  ];

  return (
    <footer className="relative bg-[#1C1A18] dark:bg-[#3B2F2A] text-[#F4EFE8] pt-20 pb-12 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-[#C46A4A]/20">

      {/* Animated Background Glows */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.08, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-28 -left-36 w-[550px] h-[550px] bg-[#C46A4A]/18 blur-[180px] rounded-full"
      />
      <motion.div
        animate={{
          opacity: [0.12, 0.25, 0.12],
          scale: [1, 1.1, 1],
          x: [0, -25, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-36 w-[580px] h-[580px] bg-[#8E857A]/10 blur-[180px] rounded-full"
      />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#C46A4A]/30 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* CONTENT GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 md:gap-16"
      >
        {/* ADDRESS */}
        <motion.div variants={fadeIn(0.1)}>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold text-[#F4EFE8] mb-6 tracking-wide relative inline-block"
          >
            Address
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C46A4A]"
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.h3>

          <motion.ul
            variants={containerVariants}
            className="space-y-4 text-[15px] leading-relaxed"
          >
            <motion.li
              variants={itemVariants}
              className="flex items-start gap-3 group"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.4 }}
              >
                <FaMapMarkerAlt className="text-[#C46A4A] mt-1" />
              </motion.div>
              <span className="group-hover:text-[#F4EFE8] transition-colors duration-300">
                FLAT NO-GB-107, GARNET-B, URBANA JEWELS, MUHANA MANDI ROAD,
                SANGANER, JAIPUR – 302029, RAJASTHAN, INDIA
              </span>
            </motion.li>

            <motion.li
              variants={itemVariants}
              className="flex items-center gap-3 group"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: [0, -15, 15, 0] }}
                transition={{ duration: 0.3 }}
              >
                <FaPhoneAlt className="text-[#C46A4A]" />
              </motion.div>
              <motion.a
                href="tel:+919928355318"
                variants={linkVariants}
                initial="rest"
                whileHover="hover"
                className="group-hover:text-[#F4EFE8] transition-colors duration-300"
              >
                +91 9928355318
              </motion.a>
            </motion.li>

            <motion.li
              variants={itemVariants}
              className="flex items-center gap-3 group"
            >
              <motion.div
                whileHover={{ scale: 1.2, y: [0, -3, 0] }}
                transition={{ duration: 0.3 }}
              >
                <FaEnvelope className="text-[#C46A4A]" />
              </motion.div>
              <motion.a
                href="mailto:Target02101967@gmail.com"
                variants={linkVariants}
                initial="rest"
                whileHover="hover"
                className="group-hover:text-[#F4EFE8] transition-colors duration-300"
              >
                Target02101967@gmail.com
              </motion.a>
            </motion.li>

            <motion.li
              variants={itemVariants}
              className="flex items-center gap-3 group"
            >
              <motion.div
                whileHover={{ scale: 1.2, y: [0, -3, 0] }}
                transition={{ duration: 0.3 }}
              >
                <FaEnvelope className="text-[#C46A4A]" />
              </motion.div>
              <motion.a
                href="mailto:manish.dhar.1967@gmail.com"
                variants={linkVariants}
                initial="rest"
                whileHover="hover"
                className="group-hover:text-[#F4EFE8] transition-colors duration-300"
              >
                manish.dhar.1967@gmail.com
              </motion.a>
            </motion.li>
          </motion.ul>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex gap-4 mt-8"
          >
            {socialIcons.map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  rotate: [0, -10, 10, 0],
                  boxShadow: `0 0 20px ${social.color}40`,
                }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 flex items-center justify-center border border-[#8E857A]/30 
                rounded-lg transition-all duration-300 shadow-sm hover:border-[#C46A4A] 
                bg-gradient-to-br from-[#1C1A18]/50 to-[#3B2F2A]/50 backdrop-blur-sm
                hover:from-[#C46A4A]/20 hover:to-[#C46A4A]/10"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-[#8E857A] hover:text-[#C46A4A] transition-colors"
                >
                  {social.icon}
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* SERVICES */}
        <motion.div variants={fadeIn(0.2)}>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold text-[#F4EFE8] mb-6 tracking-wide relative inline-block"
          >
            Services
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C46A4A]"
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.h3>
          <motion.ul
            variants={containerVariants}
            className="space-y-4 text-[15px]"
          >
            {services.map((service, i) => (
              <motion.li key={i} variants={itemVariants}>
                <motion.div
                  variants={linkVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <Link
                    to={service.link}
                    className="relative inline-block group"
                  >
                    {service.name}
                    <motion.span
                      className="absolute bottom-0 left-0 h-[1px] bg-[#C46A4A]"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div variants={fadeIn(0.3)}>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold text-[#F4EFE8] mb-6 tracking-wide relative inline-block"
          >
            Quick Links
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C46A4A]"
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.h3>
          <motion.ul
            variants={containerVariants}
            className="space-y-4 text-[15px]"
          >
            {quickLinks.map((link, i) => (
              <motion.li key={i} variants={itemVariants}>
                <motion.div
                  variants={linkVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <Link
                    to={link.link}
                    className="relative inline-block group"
                  >
                    {link.name}
                    <motion.span
                      className="absolute bottom-0 left-0 h-[1px] bg-[#C46A4A]"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* NEWSLETTER */}
        <motion.div variants={fadeIn(0.4)}>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold text-[#F4EFE8] mb-6 tracking-wide relative inline-block"
          >
            Newsletter
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C46A4A]"
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm mb-6 text-[#8E857A]"
          >
            Stay updated with our latest décor and artisan collections.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission
            }}
            className="relative"
          >
            <motion.div
              whileFocus={{ scale: 1.02 }}
              className="flex items-center bg-[#F4EFE8]/10 dark:bg-[#3B2F2A]/30 rounded-lg overflow-hidden border border-[#C46A4A]/20 dark:border-[#C46A4A]/30 
              backdrop-blur-md shadow-inner focus-within:border-[#C46A4A]/60 focus-within:shadow-[0_0_20px_rgba(196,106,74,0.3)]
              transition-all duration-300"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-3 w-full bg-transparent text-[#F4EFE8] placeholder-[#8E857A] outline-none"
              />

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(196,106,74,0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-[#C46A4A] text-[#F4EFE8] px-6 py-3 font-medium 
                hover:bg-[#3B2F2A] transition-colors duration-500 tracking-wide"
                style={{ letterSpacing: '0.05em' }}
              >
                Sign Up
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.div>

      {/* BOTTOM STRIP */}
      <motion.section
        variants={fadeIn(0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-30 mt-16 pt-6 border-t border-[#C46A4A]/25 
        flex flex-col md:flex-row justify-between items-center text-sm text-[#8E857A] gap-4"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          © {new Date().getFullYear()}{" "}
          <motion.span
            className="text-[#C46A4A] font-medium inline-block"
            whileHover={{ scale: 1.1, textShadow: "0 0 10px rgba(196,106,74,0.5)" }}
          >
            Target Exports
          </motion.span>
          . All Rights Reserved.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Designed by{" "}
          <motion.a
            href="https://github.com/manav-05-06"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C46A4A] relative inline-block"
            whileHover={{ scale: 1.1 }}
          >
            <span className="relative z-10">Manav Khandelwal</span>
            <motion.span
              className="absolute bottom-0 left-0 h-[1px] bg-[#C46A4A]"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.p>
      </motion.section>

    </footer>
  );
};

export default Footer;
