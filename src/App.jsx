import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Product";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/scrollToTop";
import Terracotta from "./pages/Terracotta";
import PapierMache from "./pages/PaperMache";

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen relative overflow-x-hidden transition-colors duration-500">
      {/* 🌐 Navbar */}
      <Navbar />

      {/* ✨ Page Transitions */}
      <div className="pt-28 px-5 md:px-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div {...pageTransition}>
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div {...pageTransition}>
                  <About />
                </motion.div>
              }
            />
            <Route
              path="/products"
              element={
                <motion.div {...pageTransition}>
                  <Products />
                </motion.div>
              }
            />
            <Route
              path="/terracotta"
              element={
                <motion.div {...pageTransition}>
                  <Terracotta />
                </motion.div>
              }
            />
            <Route
              path="/papier-mache"
              element={
                <motion.div {...pageTransition}>
                  <PapierMache />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div {...pageTransition}>
                  <Contact />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>

      {/* 🌍 Footer & Scroll */}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
