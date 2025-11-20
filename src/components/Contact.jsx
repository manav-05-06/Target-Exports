import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
  });

  return (
    <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-24 text-center overflow-hidden">
      {/* 🌾 Ambient Floating Glows */}
      <motion.div
        animate={{ opacity: [0.3, 0.45, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#b07443]/25 blur-[150px] rounded-full"
      />
      <motion.div
        animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#f3d1b0]/30 blur-[150px] rounded-full"
      />

      {/* 🧊 Glassmorphic Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative bg-white/20 backdrop-blur-2xl border border-white/30 rounded-[2rem] p-10 md:p-16 shadow-[0_10px_60px_rgba(176,116,67,0.25)] z-10"
      >
        <motion.h2
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#b07443] to-[#e6c29a] bg-clip-text text-transparent mb-6"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-12 text-lg leading-relaxed"
        >
          Have a question, idea, or collaboration in mind? We’d love to hear
          from you! Fill out the form below, and our team will get back to you
          shortly.
        </motion.p>

        {/* 💌 Contact Form */}
        <motion.form
          variants={fadeUp(0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-6 max-w-md mx-auto text-left"
        >
          <motion.input
            whileFocus={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl border border-white/40 bg-white/50 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#b07443]/70 shadow-inner"
          />
          <motion.input
            whileFocus={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-xl border border-white/40 bg-white/50 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#b07443]/70 shadow-inner"
          />
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250 }}
            rows="5"
            placeholder="Your Message"
            className="p-4 rounded-xl border border-white/40 bg-white/50 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#b07443]/70 shadow-inner resize-none"
          ></motion.textarea>

          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 25px rgba(176,116,67,0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mt-2 bg-gradient-to-r from-[#b07443] to-[#d8a777] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-[0_0_25px_rgba(176,116,67,0.5)] transition-all duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>

      {/* 🗺️ Optional: Animated Map Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 overflow-hidden rounded-3xl shadow-[0_8px_32px_rgba(176,116,67,0.3)] border border-white/30 backdrop-blur-xl"
      >
        <iframe
          title="Target Exports Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.435907105193!2d75.74675457540892!3d26.856987776670814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db64f26d0b9f7%3A0x7f93c42db34b74df!2sURBANA%20JEWELS%20JAIPUR!5e0!3m2!1sen!2sin!4v1709576400000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default Contact;
