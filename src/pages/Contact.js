import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="fade-in">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Contact Us</h1>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', marginTop: '2rem'}}>
            
            {/* Contact Form */}
            <div className="scale-in">
              <h2 style={{marginBottom: '1.5rem'}}>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="form-container" style={{margin: 0, boxShadow: 'none', padding: 0}}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '1rem',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn" style={{width: '100%'}}>
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="scale-in">
              <h2 style={{marginBottom: '1.5rem'}}>Get in Touch</h2>
              <div style={{background: '#f8f9fa', padding: '2rem', borderRadius: '10px'}}>
                <div style={{marginBottom: '2rem'}}>
                  <h3 style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                    📍 Address
                  </h3>
                  <p>123 Commerce Street<br />Business District<br />New York, NY 10001</p>
                </div>
                
                <div style={{marginBottom: '2rem'}}>
                  <h3 style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                    📞 Phone
                  </h3>
                  <p>+1 (555) 123-4567</p>
                </div>
                
                <div style={{marginBottom: '2rem'}}>
                  <h3 style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                    ✉️ Email
                  </h3>
                  <p>info@shoppro.com<br />support@shoppro.com</p>
                </div>
                
                <div>
                  <h3 style={{marginBottom: '1rem'}}>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                     Saturday: 10:00 AM - 4:00 PM<br />
                     Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div style={{marginTop: '4rem'}}>
            <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>Frequently Asked Questions</h2>
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
              <div style={{marginBottom: '1.5rem', padding: '1.5rem', background: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
                <h3 style={{marginBottom: '0.5rem'}}>How can I track my order?</h3>
                <p>You can track your order using the tracking number sent to your email after purchase.</p>
              </div>
              <div style={{marginBottom: '1.5rem', padding: '1.5rem', background: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
                <h3 style={{marginBottom: '0.5rem'}}>What is your return policy?</h3>
                <p>We offer a 30-day return policy for all unused items in original packaging.</p>
              </div>
              <div style={{padding: '1.5rem', background: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
                <h3 style={{marginBottom: '0.5rem'}}>Do you offer international shipping?</h3>
                <p>Yes, we ship worldwide. Shipping costs and delivery times vary by location.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
