import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Sending...",
      text: "Please wait while we send your message.",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    emailjs
      .sendForm(
        "service_lhbj6hk", // ✅ Your EmailJS Service ID
         "contact_form", // ✅ Your Template ID
        form.current,
        "n1P_zKfUPEx3uhXOe" // ✅ Your Public Key
      )
      .then(
        () => {
          Swal.fire({
            title: "Message Sent ✅",
            text: "Thank you for reaching out! We'll get back to you soon.",
            icon: "success",
            background: "rgba(255,255,255,0.95)",
            color: "#3a2614",
            confirmButtonColor: "#b07443",
          });
          e.target.reset();
        },
        () => {
          Swal.fire({
            title: "Oops ❌",
            text: "Something went wrong. Please try again later.",
            icon: "error",
            background: "rgba(255,255,255,0.95)",
            color: "#3a2614",
            confirmButtonColor: "#b07443",
          });
        }
      );
  };

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between w-full min-h-screen px-6 md:px-12 lg:px-20 py-20 overflow-hidden">
      {/* 🌾 Animated Terracotta Glows */}
      <motion.div
        animate={{ opacity: [0.25, 0.4, 0.25], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#b07443]/30 blur-[140px] rounded-full"
      />
      <motion.div
        animate={{ opacity: [0.25, 0.4, 0.25], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-[#f3d1b0]/35 blur-[140px] rounded-full"
      />

      {/* 💬 Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 w-full lg:w-[50%] p-10 md:p-12 bg-white/20 border border-white/30 
        rounded-[2rem] backdrop-blur-2xl shadow-[0_10px_50px_rgba(176,116,67,0.25)]"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#3a2614]">
          Contact <span className="text-[#b07443]">Us</span>
        </h2>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Interested in our services or need more information? Contact us and
          let’s discuss how we can help your business.
        </p>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row gap-4">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              name="from_name"
              placeholder="Your Name"
              className="w-full md:w-1/2 px-4 py-3 rounded-xl bg-white/50 border border-[#b07443]/30 
              focus:border-[#b07443] focus:ring-2 focus:ring-[#b07443]/30 outline-none transition-all"
              required
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="w-full md:w-1/2 px-4 py-3 rounded-xl bg-white/50 border border-[#b07443]/30 
              focus:border-[#b07443] focus:ring-2 focus:ring-[#b07443]/30 outline-none transition-all"
              required
            />
          </div>

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="subject"
            placeholder="Subject"
            className="px-4 py-3 rounded-xl bg-white/50 border border-[#b07443]/30 
            focus:border-[#b07443] focus:ring-2 focus:ring-[#b07443]/30 outline-none transition-all"
            required
          />

          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            name="message"
            rows="5"
            placeholder="Message"
            className="px-4 py-3 rounded-xl bg-white/50 border border-[#b07443]/30 
            focus:border-[#b07443] focus:ring-2 focus:ring-[#b07443]/30 outline-none transition-all resize-none"
            required
          ></motion.textarea>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(176,116,67,0.45)",
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-4 bg-gradient-to-r from-[#b07443] to-[#d8a777] text-white 
            font-semibold py-3 rounded-xl shadow-lg transition-all"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
      <br></br>

      {/* 🗺️ Map Section with Zoom-in Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full lg:w-[45%] rounded-[2rem] overflow-hidden border border-white/40 
        shadow-[0_10px_50px_rgba(176,116,67,0.25)]"
      >
        {/* 🌟 Pulsing Glow Border Animation */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 20px rgba(176,116,67,0.3)",
              "0 0 35px rgba(176,116,67,0.5)",
              "0 0 20px rgba(176,116,67,0.3)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-[2rem] pointer-events-none"
        ></motion.div>

        <iframe
          title="Target Exports Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.435907105193!2d75.74675457540892!3d26.856987776670814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db64f26d0b9f7%3A0x7f93c42db34b74df!2sURBANA%20JEWELS%20JAIPUR!5e0!3m2!1sen!2sin!4v1709576400000!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* 📍 Floating Button */}
        <a
          href="https://maps.app.goo.gl/B7CHvH293CHQUJsv5"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-5 right-5 bg-[#b07443] text-white px-4 py-2 rounded-lg 
          shadow-lg hover:bg-[#9a6038] transition-all backdrop-blur-sm"
        >
          Open in Maps
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
