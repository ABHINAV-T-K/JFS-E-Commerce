import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content scale-in">
          <h1>Welcome to ShopPro</h1>
          <p>Discover premium products with unbeatable quality and service</p>
          <Link to="/products" className="btn">Shop Now</Link>
          <Link to="/about" className="btn btn-secondary" style={{marginLeft: '1rem'}}>Learn More</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card scale-in">
              <div className="feature-icon">🚚</div>
              <h3>Fast Shipping</h3>
              <p>Free shipping on orders over $50. Get your products delivered quickly and safely.</p>
            </div>
            <div className="feature-card scale-in">
              <div className="feature-icon">🛡️</div>
              <h3>Secure Payment</h3>
              <p>Your transactions are protected with industry-leading security measures.</p>
            </div>
            <div className="feature-card scale-in">
              <div className="feature-icon">⭐</div>
              <h3>Quality Products</h3>
              <p>Carefully curated selection of high-quality products from trusted brands.</p>
            </div>
            <div className="feature-card scale-in">
              <div className="feature-icon">🎧</div>
              <h3>24/7 Support</h3>
              <p>Our customer service team is always ready to help you with any questions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="products-grid">
            <div className="product-card fade-in">
              <div className="product-image">📱</div>
              <div className="product-info">
                <h3>Smartphone Pro</h3>
                <p className="product-price">$699</p>
                <p>Latest technology with premium features</p>
                <button className="btn">Add to Cart</button>
              </div>
            </div>
            <div className="product-card fade-in">
              <div className="product-image">💻</div>
              <div className="product-info">
                <h3>Laptop Ultra</h3>
                <p className="product-price">$1299</p>
                <p>High-performance laptop for professionals</p>
                <button className="btn">Add to Cart</button>
              </div>
            </div>
            <div className="product-card fade-in">
              <div className="product-image">🎧</div>
              <div className="product-info">
                <h3>Wireless Headphones</h3>
                <p className="product-price">$199</p>
                <p>Premium sound quality with noise cancellation</p>
                <button className="btn">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
