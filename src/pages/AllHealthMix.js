import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import WhatsAppButton from "../components/WhatsAppButton";
import sweetsImages from "../assets/images/sweets";

// Layout styling imports
import '../styles/product.css';
import '../styles/filter.css';
<<<<<<< HEAD


=======
import '../styles/allhealthmix.css';
>>>>>>> 51818a1bd1fca93ab678285aab77498ac2c2f7fc

import heroImg from '../assets/images/img2.jpg';
const placeholderImage = 'https://via.placeholder.com/400x400?text=Product+Image';

// EVERY SINGLE SPECIFIC PRODUCT COMBINED BY CATEGORY
const initialProducts = [
    // --- SWEETS (8 EXACT ITEMS) ---
    {
        id: 'sweet-1',
        name: "Mysore Pak (Ghee)",
        desc: "Traditional South Indian sweet made with ghee",
        price: 150,
        rating: 5,
        reviews: 120,
        badge: 'Best Seller',
        category: 'sweets',
        imagesList: [
            sweetsImages.mysorePak,
            sweetsImages.mysorePak,
            sweetsImages.mysorePak,
            sweetsImages.mysorePak
        ]
    },
    {
        id: 'sweet-2',
        name: "Rava Laddu",
        desc: "Soft and sweet coconut rava laddu",
        price: 140,
        rating: 4,
        reviews: 98,
        badge: null,
        category: 'sweets',
        imagesList: [
            sweetsImages.ravaladdu,
            sweetsImages.ravaladdu,
            sweetsImages.ravaladdu,
            sweetsImages.ravaladdu
        ]
    },
    {
        id: 'sweet-3',
        name: "Rava Kesari",
        desc: "Kesari made with semolina and saffron",
        price: 120,
        rating: 4,
        reviews: 80,
        badge: null,
        category: 'sweets',
        imagesList: [
            sweetsImages.ravakesari,
            sweetsImages.ravakesari,
            sweetsImages.ravakesari,
            sweetsImages.ravakesari
        ]
    },
    {
        id: 'sweet-4',
        name: "Payatham Urundai",
        desc: "Protein rich traditional sweet balls",
        price: 180,
        rating: 5,
        reviews: 150,
        badge: 'Best Seller',
        category: 'sweets',
        imagesList: [
            sweetsImages.payiththamurundai,
            sweetsImages.payiththamurundai,
            sweetsImages.payiththamurundai,
            sweetsImages.payiththamurundai
        ]
    },
    {
        id: 'sweet-5',
        name: "Rich Laddu",
        desc: "Premium dry fruit laddu",
        price: 220,
        rating: 5,
        reviews: 200,
        badge: 'Best Seller',
        category: 'sweets',
        imagesList: [
            sweetsImages.richladdu,
            sweetsImages.richladdu,
            sweetsImages.richladdu,
            sweetsImages.richladdu
        ]
    },
    {
        id: 'sweet-6',
        name: "Turkish Delight",
        desc: "Soft chewy middle eastern sweet",
        price: 350,
        rating: 5,
        reviews: 300,
        badge: 'Best Seller',
        category: 'sweets',
        imagesList: [
            sweetsImages.TURKISHDELIGHT,
            sweetsImages.TURKISHDELIGHT,
            sweetsImages.TURKISHDELIGHT,
            sweetsImages.TURKISHDELIGHT
        ]
    },
    {
        id: 'sweet-7',
        name: "Boondi Laddu",
        desc: "Classic crunchy boondi laddu",
        price: 160,
        rating: 4,
        reviews: 140,
        badge: null,
        category: 'sweets',
        imagesList: [
            sweetsImages.BOONDILADDU,
            sweetsImages.BOONDILADDU,
            sweetsImages.BOONDILADDU,
            sweetsImages.BOONDILADDU
        ]
    },
    {
        id: 'sweet-8',
        name: "Coconut Burfi (Milk)",
        desc: "Soft coconut milk sweet squares",
        price: 180,
        rating: 4,
        reviews: 110,
        badge: null,
        category: 'sweets',
        imagesList: [
            sweetsImages.COCONUTBURFI,
            sweetsImages.COCONUTBURFI,
            sweetsImages.COCONUTBURFI,
            sweetsImages.COCONUTBURFI
        ]
    },

    // --- TRADITIONAL ---
    {
        id: 'trad-1',
        name: 'Mysore Pak',
        desc: 'Authentic homemade traditional sweet',
        price: 350,
        rating: 5,
        reviews: 62,
        badge: 'Best Seller',
        category: 'traditional',
        imagesList: [
            require('../assets/images/PAYATHAM URUNDAI.jpg'),
            require('../assets/images/PAYATHAM URUNDAI.jpg')
        ]
    },
    {
        id: 'trad-2',
        name: 'Laddu',
        desc: 'Classic sweet festive treat',
        price: 250,
        rating: 5,
        reviews: 48,
        badge: 'New Launch',
        category: 'traditional',
        imagesList: [
            require('../assets/images/PAYATHAM URUNDAI.jpg')
        ]
    },
    {
        id: 'trad-3',
        name: 'Jangiri',
        desc: 'Traditional juicy syrup treat',
        price: 180,
        rating: 4,
        reviews: 39,
        badge: null,
        category: 'traditional',
        imagesList: [
            require('../assets/images/PAYATHAM URUNDAI.jpg')
        ]
    },
    {
        id: 'trad-4',
        name: 'Kaju Katli',
        desc: 'Rich premium cashew squares',
        price: 420,
        rating: 5,
        reviews: 55,
        badge: null,
        category: 'traditional',
        imagesList: [
            require('../assets/images/PAYATHAM URUNDAI.jpg')
        ]
    },
    {
        id: 'trad-5',
        name: 'Milk Halwa',
        desc: 'Slow-cooked reduction milk sweet',
        price: 300,
        rating: 5,
        reviews: 44,
        badge: 'Best Seller',
        category: 'traditional',
        imagesList: [
            require('../assets/images/PAYATHAM URUNDAI.jpg')
        ]
    },
    {
        id: 'trad-6',
        name: 'Coconut Burfi',
        desc: 'Traditional shredded coconut delight',
        price: 220,
        rating: 4,
        reviews: 30,
        badge: null,
        category: 'traditional',
        imagesList: [
            require('../assets/images/PAYATHAM URUNDAI.jpg')
        ]
    },

    // --- HEALTH MIX ---
    {
        id: 'health-1',
        name: 'Kaju Bulbul',
        desc: 'Nutritious ingredient variant treat blend',
        price: 255,
        rating: 5,
        reviews: 49,
        badge: 'New Launch',
        category: 'healthmix',
        imagesList: [
            require('../assets/images/PAYATHAM URUNDAI.jpg')
        ]
    },
    {
        id: 'health-2',
        name: 'Mini jamun jars',
        desc: 'Nutritious rich healthy portion presentation',
        price: 135,
        rating: 5,
        reviews: 49,
        badge: 'Best Seller',
        category: 'healthmix',
        imagesList: [
            require('../assets/images/PAYATHAM URUNDAI.jpg')
        ]
    },
    {
        id: 'health-3',
        name: 'Holes Mysore Pak',
        desc: 'Traditional porous sweet structural mix texture',
        price: 100,
        rating: 5,
        reviews: 58,
        badge: null,
        category: 'healthmix',
        imagesList: [
            require('../assets/images/PAYATHAM URUNDAI.jpg')
        ]
    }
];

// REUSABLE CARD SLIDER SUB-COMPONENT
const ProductCardImageSlider = ({ imagesList, productName }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cleanImages = (imagesList && imagesList.length > 0) ? imagesList : [placeholderImage];

    const handlePrev = (e) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cleanImages.length - 1 : prevIndex - 1
        );
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) =>
            prevIndex === cleanImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="card-slider-wrapper">
            {cleanImages.length > 1 && (
                <button className="slider-arrow left-arrow" onClick={handlePrev}>&lt;</button>
            )}

            <div className="slider-content-window">
                <div
                    className="slider-image-track"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {cleanImages.map((imgSrc, idx) => (
                        <img
                            key={idx}
                            src={imgSrc}
                            alt={`${productName} view ${idx + 1}`}
                            className="product-img"
                            onError={(e) => { e.target.src = placeholderImage; }}
                        />
                    ))}
                </div>
            </div>

            {cleanImages.length > 1 && (
                <button className="slider-arrow right-arrow" onClick={handleNext}>&gt;</button>
            )}

            {cleanImages.length > 1 && (
                <div className="slider-dots">
                    {cleanImages.map((_, idx) => (
                        <span
                            key={idx}
                            className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const Product = () => {
    const navigate = useNavigate();
    const MAX = 3000;

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(MAX);
    const [, setShowOutOfStock] = useState(true); // Left for filter-section reference toggle fallback
    const [priceOpen, setPriceOpen] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const sortOption = 'Featured';

    // FILTER LOGIC
    const filteredProducts = initialProducts.filter((product) => {
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        return matchesPrice && matchesCategory;
    });

    // SORT LOGIC
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOption === 'Price, low to high') return a.price - b.price;
        if (sortOption === 'Price, high to low') return b.price - a.price;
        if (sortOption === 'Alphabetically, A-Z') return a.name.localeCompare(b.name);
        if (sortOption === 'Alphabetically, Z-A') return b.name.localeCompare(a.name);
        return 0;
    });

    const handleMinSlider = (e) => {
        const val = Math.min(Number(e.target.value), maxPrice - 100);
        setMinPrice(val);
    };

    const handleMaxSlider = (e) => {
        const val = Math.max(Number(e.target.value), minPrice + 100);
        setMaxPrice(val);
    };

    const handleMinInput = (e) => {
        const val = Math.max(0, Math.min(Number(e.target.value), maxPrice - 100));
        setMinPrice(val);
    };

    const handleMaxInput = (e) => {
        const val = Math.min(MAX, Math.max(Number(e.target.value), minPrice + 100));
        setMaxPrice(val);
    };

    const clearAllFilters = () => {
        setMinPrice(0);
        setMaxPrice(MAX);
        setShowOutOfStock(true);
        setSelectedCategory('all');
    };

    const fillLeft = `${(minPrice / MAX) * 100}%`;
    const fillRight = `${100 - (maxPrice / MAX) * 100}%`;

    return (
        <div className="healthmix-page-wrapper">
            <Navbar />

            {/* HERO SECTION */}
            <section className="healthmix-hero">
                <img src={heroImg} alt="Health Mix" />
                <div className="hero-text">
                    <h1>All Health Mix</h1>
                    <p>Authentic homemade health mix</p>
                </div>
            </section>

            <div className="product-container">
                {/* SIDEBAR FILTER */}
                <aside className="filter-sidebar">
                    <div className="filter-header">
                        <div className="filter-title-section">
                            <svg className="filter-icon-svg" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="4" y1="11" x2="28" y2="11" />
                                <circle cx="10" cy="11" r="2.5" fill="black" />
                                <line x1="4" y1="21" x2="28" y2="21" />
                                <circle cx="22" cy="21" r="2.5" fill="black" />
                            </svg>
                            <span className="filter-title">Filter</span>
                        </div>
                    </div>

                    <div className="applied-filters">
                        <div className="applied-title">Applied filters</div>
                        <div className="price-tag">
                            Rs. {minPrice}.00 - Rs. {maxPrice}.00
                            <button className="remove-filter" onClick={() => { setMinPrice(0); setMaxPrice(MAX); }}>✕</button>
                        </div>
                        {selectedCategory !== 'all' && (
                            <div className="price-tag" style={{ textTransform: 'capitalize' }}>
                                Category: {selectedCategory === 'healthmix' ? 'Health Mix' : selectedCategory}
                                <button className="remove-filter" onClick={() => setSelectedCategory('all')}>✕</button>
                            </div>
                        )}
                        <button className="clear-all" onClick={clearAllFilters}>Clear all</button>
                    </div>

                    <div className="filter-section">
                        <div className="section-header">
                            <h4>Out of stock</h4>
                            <div className="toggle-buttons">
                                <button className="active">Show</button>
                                <button className="">Hide</button>
                            </div>
                        </div>
                    </div>

                    <div className="filter-section price-section-wrapper">
                        <div className="section-header price-header-toggle" onClick={() => setPriceOpen(!priceOpen)}>
                            <h4 className="price-heading">Price Range</h4>
                            <span className="accordion-indicator" style={{ transform: priceOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }}>
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>

                        {priceOpen && (
                            <>
                                <div className="range-track-wrapper">
                                    <div className="range-track-bg" />
                                    <div className="range-track-fill" style={{ left: fillLeft, right: fillRight }} />
                                    <input type="range" className="dual-range" min={0} max={MAX} step={100} value={minPrice} onChange={handleMinSlider} />
                                    <input type="range" className="dual-range" min={0} max={MAX} step={100} value={maxPrice} onChange={handleMaxSlider} />
                                </div>

                                <div className="price-inputs-container">
                                    <div className="input-box-field">
                                        <span className="currency-symbol">Rs.</span>
                                        <input type="number" value={minPrice} onChange={handleMinInput} min={0} max={MAX} step={100} />
                                    </div>
                                    <div className="input-box-field">
                                        <span className="currency-symbol">Rs.</span>
                                        <input type="number" value={maxPrice} onChange={handleMaxInput} min={0} max={MAX} step={100} />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </aside>

                {/* PRODUCTS AREA */}
                <main className="product-content">
                    {/* GRID RENDERER */}
                    <div className="product-grid">
                        {sortedProducts.map((product) => (
                            <div
                                className="product-card"
                                key={product.id}
                                onClick={() => navigate(`/product/${product.id}`)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="image-container">
                                    {product.badge && (
                                        <div className="badge universal-badge">{product.badge}</div>
                                    )}
                                    <ProductCardImageSlider imagesList={product.imagesList} productName={product.name} />
                                </div>

                                <div className="product-info">
                                    <h3 className="product-name">{product.name}</h3>
                                    <p className="product-desc">{product.desc}</p>

                                    <div className="rating-section">
                                        <div className="stars">
                                            {'★'.repeat(product.rating)}
                                            {'☆'.repeat(5 - product.rating)}
                                        </div>
                                        <span className="review-count">({product.reviews} reviews)</span>
                                    </div>

                                    <div className="product-price">
                                        Rs. {product.price}.00
                                    </div>

                                    <button className="add-to-cart-btn">View Details</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {sortedProducts.length === 0 && (
                        <div className="empty-results-fallback">
                            <p>No products found matching this category and price selection range.</p>
                            <button onClick={clearAllFilters} className="clear-all">Reset Filters</button>
                        </div>
                    )}
                </main>
            </div>

            {/* WhatsApp Button */}
            <a href="https://wa.me/#" className="whatsapp-floating-btn" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 32 32" className="whatsapp-icon">
                    <path d="M16 2a13 13 0 0 0-11.27 19.51L3 29l7.73-2A13 13 0 1 0 16 2zm6.75 18.39c-.3.84-1.48 1.54-2.42 1.63-.64.06-1.47.09-3.79-.88a10.93 10.93 0 0 1-4.82-4.25 5.09 5.09 0 0 1-1.07-2.71 3.2 3.2 0 0 1 1-2.4c.18-.18.4-.26.6-.26h.43c.13 0 .3.05.44.38l.94 2.27c.09.21.14.45.01.71l-.42.53c-.13.16-.27.35-.12.61a7.8 7.8 0 0 0 2.45 3.06 6.47 6.47 0 0 0 3.26 1.48c.31.05.49 0 .68-.21l.62-.83c.18-.24.37-.2.61-.11l2.31 1.09c.24.12.37.18.43.29.07.13.07.72-.23 1.56z" fill="#fff" />
                </svg>
            </a>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Product;