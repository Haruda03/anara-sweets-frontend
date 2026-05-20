import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilterSidebar from '../components/PriceFilter';
import WhatsAppButton from '../components/WhatsAppButton';

import '../styles/allhealthmix.css';
import '../styles/filter.css';

import { useNavigate } from 'react-router-dom';
import heroImg from '../assets/images/img2.jpg';
const placeholderImage = 'https://via.placeholder.com/400x400?text=Product+Image';

const initialProducts = [
  {
    id: 1,
    name: 'Kaju Bulbul',
    price: 255,
    rating: 5,
    reviews: 49,
    badge: 'New Launch',
    image: require('../assets/images/PAYATHAM URUNDAI.jpg') || placeholderImage,
  },
  {
    id: 2,
    name: 'Mini jamun jars',
    price: 135,
    rating: 5,
    reviews: 49,
    badge: 'Best Seller',
    image: require('../assets/images/PAYATHAM URUNDAI.jpg') || placeholderImage,
  },
  {
    id: 3,
    name: 'Holes Mysore Pak',
    price: 100,
    rating: 5,
    reviews: 58,
    badge: null,
    image: require('../assets/images/PAYATHAM URUNDAI.jpg') || placeholderImage,
  },
];

const AllHealthMix = () => {
  const navigate = useNavigate();
  const MAX = 3000;

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(MAX);
  const [showOutOfStock, setShowOutOfStock] = useState(true);
  const [sortOption, setSortOption] = useState('Featured');
  const [isSortOpen, setIsSortOpen] = useState(false);

  const filteredProducts = initialProducts.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'Price, low to high') return a.price - b.price;
    if (sortOption === 'Price, high to low') return b.price - a.price;
    if (sortOption === 'Alphabetically, A-Z') return a.name.localeCompare(b.name);
    if (sortOption === 'Alphabetically, Z-A') return b.name.localeCompare(a.name);
    return 0;
  });

  const clearAllFilters = () => {
    setMinPrice(0);
    setMaxPrice(MAX);
    setShowOutOfStock(true);
  };

  const sortingOptions = [
    'Alphabetically, A-Z',
    'Alphabetically, Z-A',
    'Price, low to high',
    'Price, high to low',
    'Date, old to new',
    'Date, new to old',
  ];

  return (
    <div className="product-page-wrapper">
      <Navbar />

      {/* HERO SECTION */}
      <section className="healthmix-hero">
        <img src={heroImg} alt="Hero" />
        <div className="hero-text">
          <h1>All Health Mix</h1>
          <p>Healthy & nutritious traditional blends</p>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="product-container">

        {/* FILTER SIDEBAR COMPONENT */}
        <FilterSidebar
          minPrice={minPrice}
          maxPrice={maxPrice}
          onMinChange={setMinPrice}
          onMaxChange={setMaxPrice}
          showOutOfStock={showOutOfStock}
          onOutOfStockChange={setShowOutOfStock}
          onClearAll={clearAllFilters}
          max={MAX}
          step={100}
        />

        {/* PRODUCTS CONTENT GRID */}
        <main className="product-content">
          <div className="product-top-bar">
            <span className="product-count">{sortedProducts.length} products</span>

            <div className="sort-dropdown-container">
              <button
                className="sort-dropdown-btn"
                onClick={() => setIsSortOpen(!isSortOpen)}
              >
                <span>{sortOption}</span>
                <span className={`arrow-icon ${isSortOpen ? 'up' : 'down'}`}>▼</span>
              </button>

              {isSortOpen && (
                <ul className="sort-dropdown-menu">
                  {sortingOptions.map((option) => (
                    <li
                      key={option}
                      className={sortOption === option ? 'selected' : ''}
                      onClick={() => {
                        setSortOption(option);
                        setIsSortOpen(false);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="product-grid">
            {sortedProducts.map((product) => (
              <div 
                className="product-card" 
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`, { state: { category: 'All Health Mix' } })}
                style={{ cursor: 'pointer' }}
              >
                <div className="image-container">
                  {product.badge === 'New Launch' && (
                    <div className="badge new-launch-badge">New Launch</div>
                  )}
                  {product.badge === 'Best Seller' && (
                    <div className="badge best-seller-badge">Best Seller</div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-img"
                    onError={(e) => {
                      e.target.src = placeholderImage;
                      e.target.onerror = null;
                    }}
                  />
                </div>

                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>

                  <div className="rating-section">
                    <div className="stars">
                      {'★'.repeat(product.rating)}
                      {'☆'.repeat(5 - product.rating)}
                    </div>
                    <span className="review-count">({product.reviews} reviews)</span>
                  </div>

                  <div className="product-price">
                    {product.name === 'Holes Mysore Pak' ? 'From ' : ''}Rs. {product.price}.00
                  </div>

                  <button className="add-to-cart-btn">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AllHealthMix;