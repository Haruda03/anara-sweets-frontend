import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import "../styles/aboutus.css";

import heroImg from "../assets/images/img2.jpg";

const AboutUs = () => {
  const scrollRevealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <Navbar />

      {/* ================= ABOUT CONTENT ================= */}
      <motion.section
        className="about-content-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scrollRevealVariants}
      >
        <div className="container">
          <h2>About Us</h2>

          <p>
            Every bite is a celebration of our ethnic Indian flavours and rich
            heritage at Aswins Sweets. Made with traditionally followed and
            loved recipes that recite the epic stories of Indian flavours, at
            Aswins Sweets, we make our delicious delights with love.
          </p>

          <p>We bring home a reason to celebrate!</p>

          <p>
            A story that began in 2004 is now a beloved and trusted name in
            homes across Tamil Nadu, with 25 outlets and counting.
          </p>

          <p>
            We’ve proven ourselves to be a harbinger of pride and have
            withstood the test of time amidst the other brands, and we've
            secured a sweet spot in people's hearts with our Indian snacks and
            savouries.
          </p>

          <h3>Why Choose Us?</h3>

          <p>
            As a testament to our rich and varied culinary heritage, we at
            Aswins Sweets are committed to crafting the finest and most
            treasured healthy Indian snacks.
          </p>

          <h3>What makes us special?</h3>

          <p>
            We use only organic, refined groundnut oil, and our oil is never
            reused.
          </p>

          <ul>
            <li>
              We use only organic, refined groundnut oil; oil is never reused.
            </li>
            <li>
              All sweets are produced in our own factory under strict hygiene.
            </li>
            <li>
              We source locally and use age-old, authentic recipes.
            </li>
            <li>
              Our team includes skilled artisans and 1500+ staff, mostly women.
            </li>
          </ul>

          <p>
            Every sweet you enjoy is made with love and meant to reach your
            heart.
          </p>
        </div>
      </motion.section>

      {/* ================= IMAGE CONTAINER ================= */}
      <main className="about-hero">
        <div className="about-hero-inner">
          <motion.div
            className="about-hero-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={heroImg} alt="About Hero" />
          </motion.div>

          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="about-title">
              The Taste Of Royal India, Perfected Over Generations.
            </h1>

            <p className="about-subtitle">
              Anand sweets, sweetening celebrations since 1988
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default AboutUs;