import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import SEO from "../components/SEO";

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
    <>
      <SEO
        title="Contact Us - Target Exports | Handcrafted Terracotta & Papier-Mâché | Jaipur"
        description="Contact Target Exports for handcrafted Terracotta and Papier-Mâché décor. Located in Jaipur, India. Call +91 9928355318 or email us."
        keywords="contact target exports, terracotta exporters Jaipur, papier-mâché contact, Indian handicraft exporters, Jaipur pottery contact, artisan décor contact"
        image="https://target-exports.vercel.app/src/assets/logo.jpg"
        url="https://target-exports.vercel.app/contact"
      />
      <main className="relative flex flex-col lg:flex-row items-center justify-between w-full min-h-fit px-6 md:px-12 lg:px-20 py-20 overflow-hidden bg-[#F4EFE8] dark:bg-[#3B2F2A] transition-colors duration-300" role="main">

      {/* Subtle Background Glows */}
      <motion.div
        animate={{ opacity: [0.12, 0.22, 0.12], scale: [1, 1.04, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-[#C46A4A]/15 blur-[140px] rounded-full"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.06, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -right-40 w-[450px] h-[450px] bg-[#8E857A]/12 blur-[150px] rounded-full"
      />

      {/* CONTACT FORM */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          relative z-10 w-full lg:w-[50%] p-10 md:p-12 rounded-2xl
          backdrop-blur-xl shadow-lg
          border border-[#C46A4A]/20 dark:border-[#C46A4A]/30
          bg-[#F4EFE8]/80 dark:bg-[#3B2F2A]/80
          transition-colors duration-300
        "
      >
        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-[#1C1A18] dark:text-[#F4EFE8]">
          Contact <span className="text-[#C46A4A]">Us</span>
        </h2>

        <p className="text-[#1C1A18]/90 dark:text-[#F4EFE8]/90 mb-8 leading-relaxed text-lg" style={{ lineHeight: '1.8' }}>
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
                w-full md:w-1/2 px-4 py-3 rounded-lg
                bg-[#F4EFE8]/90 dark:bg-[#3B2F2A]/90
                border border-[#C46A4A]/30 dark:border-[#C46A4A]/20
                text-[#1C1A18] dark:text-[#F4EFE8]
                placeholder-[#8E857A] dark:placeholder-[#8E857A]/60
                focus:border-[#C46A4A] focus:ring-2 focus:ring-[#C46A4A]/30
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
                w-full md:w-1/2 px-4 py-3 rounded-lg
                bg-[#F4EFE8]/90 dark:bg-[#3B2F2A]/90
                border border-[#C46A4A]/30 dark:border-[#C46A4A]/20
                text-[#1C1A18] dark:text-[#F4EFE8]
                placeholder-[#8E857A] dark:placeholder-[#8E857A]/60
                focus:border-[#C46A4A] focus:ring-2 focus:ring-[#C46A4A]/30
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
              px-4 py-3 rounded-lg
              bg-[#F4EFE8]/90 dark:bg-[#3B2F2A]/90
              border border-[#C46A4A]/30 dark:border-[#C46A4A]/20
              text-[#1C1A18] dark:text-[#F4EFE8]
              placeholder-[#8E857A] dark:placeholder-[#8E857A]/60
              focus:border-[#C46A4A] focus:ring-2 focus:ring-[#C46A4A]/30
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
              px-4 py-3 rounded-lg
              bg-[#F4EFE8]/90 dark:bg-[#3B2F2A]/90
              border border-[#C46A4A]/30 dark:border-[#C46A4A]/20
              text-[#1C1A18] dark:text-[#F4EFE8]
              placeholder-[#8E857A] dark:placeholder-[#8E857A]/60
              focus:border-[#C46A4A] focus:ring-2 focus:ring-[#C46A4A]/30
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
              mt-4 bg-[#C46A4A] text-[#F4EFE8] font-medium py-3 rounded-lg shadow-md
              hover:bg-[#3B2F2A] dark:hover:bg-[#1C1A18]
              transition-colors duration-500 tracking-wide
            "
            style={{ letterSpacing: '0.05em' }}
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
          relative w-full lg:w-[45%] rounded-2xl overflow-hidden
          border border-[#C46A4A]/20 dark:border-[#C46A4A]/30
          bg-[#F4EFE8]/80 dark:bg-[#3B2F2A]/80
          shadow-lg
          backdrop-blur-xl transition-all
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
            absolute bottom-5 right-5 bg-[#C46A4A]
            hover:bg-[#3B2F2A] dark:hover:bg-[#1C1A18] text-[#F4EFE8] px-4 py-2 rounded-lg
            shadow-lg backdrop-blur-sm transition-colors duration-500 font-medium
          "
        >
          Open in Maps
        </a>
      </motion.div>
      </main>
    </>
  );
};

export default Contact;
