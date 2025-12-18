import React from 'react';

const About = () => {
  return (
    <div className="fade-in">
      <section className="section">
        <div className="container">
          <h1 className="section-title">About ShopPro</h1>
          
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: '#666'}}>
              Founded in 2020, ShopPro has been dedicated to providing customers with 
              the highest quality products and exceptional shopping experience.
            </p>
          </div>

          <div className="features-grid" style={{marginTop: '3rem'}}>
            <div className="feature-card scale-in">
              <div className="feature-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To make quality products accessible to everyone while providing outstanding customer service and building lasting relationships.</p>
            </div>
            <div className="feature-card scale-in">
              <div className="feature-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>To become the most trusted e-commerce platform, known for reliability, innovation, and customer satisfaction.</p>
            </div>
            <div className="feature-card scale-in">
              <div className="feature-icon">💎</div>
              <h3>Our Values</h3>
              <p>Integrity, quality, innovation, and customer-centricity guide everything we do in our business operations.</p>
            </div>
          </div>

          <div style={{marginTop: '4rem', textAlign: 'center'}}>
            <h2 style={{marginBottom: '2rem'}}>Our Story</h2>
            <div style={{maxWidth: '700px', margin: '0 auto', textAlign: 'left'}}>
              <p style={{marginBottom: '1rem'}}>
                ShopPro started as a small family business with a simple goal: to provide 
                customers with products they can trust at prices they can afford. Over the years, 
                we've grown into a leading e-commerce platform while maintaining our core values.
              </p>
              <p style={{marginBottom: '1rem'}}>
                Today, we serve thousands of customers worldwide, offering a carefully curated 
                selection of products across multiple categories. Our team works tirelessly to 
                ensure every customer has an exceptional shopping experience.
              </p>
              <p>
                We believe in building relationships, not just transactions. That's why we focus 
                on quality, service, and continuous improvement in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
