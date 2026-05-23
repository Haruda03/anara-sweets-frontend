import React from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";

// Correct image import
import hero1 from "../assets/images/cover-image.jpeg";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${hero1})`,
      }}
    >
      <div className="overlay"></div>

      {/* Content */}
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="hero-subtitle">Anara Sweets</h2>

          <h1 className="hero-title">
            A Taste of Tradition, A Promise of Quality
          </h1>

          <p className="hero-tagline">
            At Anara Sweets we offer a wide range of farsan, tempting sweets
            and other delicacies. We also use only the best quality ingredients
            in the preparation of our products, and each ingredient is sourced
            and imported from the finest in the world.
          </p>

          <Link to="/product" className="hero-btn">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;