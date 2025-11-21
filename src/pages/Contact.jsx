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
        "service_lhbj6hk",
        "contact_form",
        form.current,
        "n1P_zKfUPEx3uhXOe"
      )
      .then(
        () => {
          Swal.fire({
            title: "Message Sent ✅",
            text: "Thank you for reaching out! We'll get back to you soon.",
            icon: "success",
            background: "#fff",
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
            background: "#fff",
            color: "#3a2614",
            confirmButtonColor: "#b07443",
          });
        }
      );
  };

  return (
    <div className=" backdrop-blur-0 relative flex flex-col lg:flex-row items-center justify-between w-full min-h-fit px-6 md:px-12 lg:px-20 py-20 overflow-hidden bg-[#faf7f3] dark:bg-[#0d0d0d] transition-colors duration-300 border-none rounded-lg ">

      {/* Decorative Glows */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-[#b07443]/20 dark:bg-[#b07443]/10 blur-[140px] rounded-full"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -bottom-40 -right-40 w-[450px] h-[450px] bg-[#f3d1b0]/25 dark:bg-[#f3d1b0]/10 blur-[150px] rounded-full"
      />

      {/* CONTACT FORM */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          relative z-10 w-full lg:w-[50%] p-10 md:p-12 rounded-[2rem]
          backdrop-blur-2xl shadow-[0_10px_50px_rgba(176,116,67,0.25)]
          border border-white/40 dark:border-[#ffffff15]
          bg-white/60 dark:bg-[#1a1a1a]/60
          transition-colors duration-300
        "
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#3a2614] dark:text-[#f1e2d6]">
          Contact <span className="text-[#b07443]">Us</span>
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          Interested in our services or need information? Send us a message and we'll get back to you shortly.
        </p>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">

          {/* Row Inputs */}
          <div className="flex flex-col md:flex-row gap-4">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              name="from_name"
              placeholder="Your Name"
              className="
                w-full md:w-1/2 px-4 py-3 rounded-xl
                bg-white/70 dark:bg-[#2a2a2a]/60
                border border-[#b07443]/30 
                text-gray-800 dark:text-gray-200
                placeholder-gray-500 dark:placeholder-gray-400
                focus:border-[#b07443] focus:ring-2 focus:ring-[#b07443]/30
                outline-none transition-all
              "
              required
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="
                w-full md:w-1/2 px-4 py-3 rounded-xl
                bg-white/70 dark:bg-[#2a2a2a]/60
                border border-[#b07443]/30 
                text-gray-800 dark:text-gray-200
                placeholder-gray-500 dark:placeholder-gray-400
                focus:border-[#b07443] focus:ring-2 focus:ring-[#b07443]/30
                outline-none transition-all
              "
              required
            />
          </div>

          {/* Subject */}
          <motion.input
            whileFocus={{ scale: 1.02 }}
            name="subject"
            placeholder="Subject"
            className="
              px-4 py-3 rounded-xl
              bg-white/70 dark:bg-[#2a2a2a]/60
              border border-[#b07443]/30 
              text-gray-800 dark:text-gray-200
              placeholder-gray-500 dark:placeholder-gray-400
              focus:border-[#b07443] focus:ring-2 focus:ring-[#b07443]/30
              outline-none transition-all
            "
            required
          />

          {/* Message */}
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            name="message"
            rows="6"
            placeholder="Message"
            className="
              px-4 py-3 rounded-xl
              bg-white/70 dark:bg-[#2a2a2a]/60
              border border-[#b07443]/30 
              text-gray-800 dark:text-gray-200
              placeholder-gray-500 dark:placeholder-gray-400
              focus:border-[#b07443] focus:ring-2 focus:ring-[#b07443]/30
              outline-none resize-none transition-all
            "
            required
          ></motion.textarea>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(176,116,67,0.45)" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="
              mt-4 bg-gradient-to-r from-[#b07443] to-[#d8a777]
              dark:from-[#b07443] dark:to-[#9a6038]
              text-white font-semibold py-3 rounded-xl shadow-lg
              transition-all
            "
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
      <br></br>

      {/* MAP SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          relative w-full lg:w-[45%] rounded-[2rem] overflow-hidden
          border border-white/40 dark:border-[#ffffff15]
          bg-white/60 dark:bg-[#1a1a1a]/60
          shadow-[0_10px_50px_rgba(176,116,67,0.25)]
          backdrop-blur-2xl transition-all
        "
      >
        <motion.div
          animate={{
            boxShadow: [
              "0 0 25px rgba(176,116,67,0.35)",
              "0 0 45px rgba(176,116,67,0.5)",
              "0 0 25px rgba(176,116,67,0.35)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-[2rem] pointer-events-none"
        ></motion.div>

        <iframe
          className="rounded-[2rem]"
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.435907105193!2d75.74675457540892!3d26.856987776670814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db64f26d0b9f7%3A0x7f93c42db34b74df!2sURBANA%20JEWELS%20JAIPUR!5e0!3m2!1sen!2sin!4v1709576400000!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        <a
          href="https://maps.app.goo.gl/B7CHvH293CHQUJsv5"
          target="_blank"
          rel="noopener noreferrer"
          className="
            absolute bottom-5 right-5 bg-[#b07443]
            hover:bg-[#9a6038] text-white px-4 py-2 rounded-lg
            shadow-lg backdrop-blur-sm transition-all
          "
        >
          Open in Maps
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
