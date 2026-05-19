import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/aboutus.css';

import heroImg from '../assets/images/img2.jpg';
import bannerImg from '../assets/images/sweets-banner.jpg';
import qualityImg from '../assets/images/img3.jpg';
import gridImg from '../assets/images/img4.jpg';
import smallOne from '../assets/images/img1.jpg';
import smallTwo from '../assets/images/img4.jpeg';
import logo from '../assets/images/logo.png';

const AboutUs = () => {
	return (
		<>
			<Navbar />

			<main className="about-hero">
				<div className="about-hero-inner">
					<div className="about-hero-image">
						<img src={heroImg} alt="Anara sweets hero section" />
					</div>

					<div className="about-hero-content">
						<h1 className="about-title">
							The Taste Of Royal India, Perfected Over Generations.
						</h1>
						<p className="about-subtitle">
							Anand sweets, sweetening celebrations since 1988
						</p>
						<a href="/" className="about-shop-btn">SHOP NOW</a>
					</div>
				</div>
			</main>

			<section className="excellence-section">
				<div className="container center">
					<h2>Excellence In Every Morsel</h2>
					<p className="muted">
						For over 3 decades, Anand has grown to be synonymous with premium quality Indian Sweets.
					</p>
				</div>

				<div className="banner-image">
					<img src={bannerImg} alt="assorted Indian sweets banner" />
				</div>
			</section>

			<section className="quality-section">
				<div className="container two-col">
					<div className="col text">
						<h3>Quality That Delights, In Every Bite.</h3>
						<p>
							Over decades, Anand has grown to be synonymous with premium quality Indian sweets.
						</p>
					</div>
					<div className="col image">
						<img src={qualityImg} alt="premium sweets quality display" />
					</div>
				</div>
			</section>

			<section className="about-grid">
				<div className="container two-col reverse-on-mobile">
					<div className="col image">
						<img src={gridImg} alt="assorted sweets arrangement" />
					</div>
					<div className="col text">
						<h4>About Us</h4>
						<h3>Taste Of Royal India</h3>
						<p>
							Anand owes its success to tradition, innovation and uncompromising quality.
						</p>
					</div>
				</div>
			</section>

			<section className="philosophy-section">
				<div className="container two-col">
					<div className="col image">
						<img src={smallOne} alt="sweets preparation" />
					</div>
					<div className="col text">
						<h5>Our Philosophy</h5>
						<h3>Luxurious Mithais, Accessible To Everyone</h3>
						<p>
							We are obsessed with authenticity and curate flavours for every celebration.
						</p>
					</div>
				</div>

				<div className="container two-col alt">
					<div className="col text">
						<h5>Our Craft</h5>
						<p>
							Our artisans follow traditional techniques with modern quality standards.
						</p>
					</div>
					<div className="col image">
						<img src={smallTwo} alt="artisan sweet crafting process" />
					</div>
				</div>
			</section>

			<section className="certifications-section">
				<div className="container center">
					<h3>Awards And Accreditations</h3>
					<p className="muted">
						Anand has won numerous food safety and quality certifications.
					</p>

					<div className="cert-icons">
						<img src={logo} alt="company logo" />
						<img src={logo} alt="ISO certification icon" />
						<img src={logo} alt="FDA certification icon" />
						<img src={logo} alt="FSSAI certification icon" />
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default AboutUs;