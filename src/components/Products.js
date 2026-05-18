import React from 'react';
import '../styles/products.css';

const Products = () => {
  const products = [
    { id: 1, name: 'Mysore Pak', category: 'Sweets', price: '₹450/kg', image: 'https://images.unsplash.com/photo-1589301760014-6e9d4c8e8f9a?w=300&h=300&fit=crop' },
    { id: 2, name: 'Gulab Jamun', category: 'Sweets', price: '₹350/kg', image: 'https://images.unsplash.com/photo-1589301760014-6e9d4c8e8f9a?w=300&h=300&fit=crop' },
    { id: 3, name: 'Jalebi', category: 'Sweets', price: '₹280/kg', image: 'https://images.unsplash.com/photo-1589301760014-6e9d4c8e8f9a?w=300&h=300&fit=crop' },
    { id: 4, name: 'Murukku', category: 'Savouries', price: '₹320/kg', image: 'https://images.unsplash.com/photo-1589301760014-6e9d4c8e8f9a?w=300&h=300&fit=crop' },
    { id: 5, name: 'Mixture', category: 'Savouries', price: '₹300/kg', image: 'https://images.unsplash.com/photo-1589301760014-6e9d4c8e8f9a?w=300&h=300&fit=crop' },
    { id: 6, name: 'Ribbon Pakoda', category: 'Savouries', price: '₹280/kg', image: 'https://images.unsplash.com/photo-1589301760014-6e9d4c8e8f9a?w=300&h=300&fit=crop' },
  ];

  return (
    <section className="products">
      <div className="products-container">
        <h2 className="products-title">Our <span>Bestselling</span> Sweets and Savouries</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">{product.price}</p>
                <button className="product-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;