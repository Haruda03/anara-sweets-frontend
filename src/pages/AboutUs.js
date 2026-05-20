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

      {/* HERO */}
      <main className="about-hero">
        <div className="about-hero-inner">
          <div className="about-hero-image">
            <img src={heroImg} alt="About Hero" />
          </div>

          <div className="about-hero-content">
            <h1 className="about-title">
              The Taste Of Royal India, Perfected Over Generations.
            </h1>

            <p className="about-subtitle">
              Anand sweets, sweetening celebrations since 1988
            </p>
          </div>
        </div>
      </main>

      {/* ABOUT TEXT */}
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
            We’ve proven ourselves to be a harbinger of pride and have withstood
            the test of time, securing a sweet spot in people's hearts with our
            Indian snacks and savouries.
          </p>

          <h3>Why Choose Us?</h3>

          <p>
            We are committed to crafting the finest healthy Indian snacks using
            pure, locally sourced ingredients and authentic age-old recipes.
          </p>

          <h3>What makes us special?</h3>

          <ul>
            <li>We use only organic refined groundnut oil, never reused.</li>
            <li>All sweets are made in our own factory.</li>
            <li>We use pounded flour from our own mill.</li>
            <li>We are a team of 1500 people, mostly women.</li>
          </ul>

          <p>
            Every sweet you enjoy is made with love and meant to reach your heart.
          </p>
        </div>
      </motion.section>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default AboutUs;