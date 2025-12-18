import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    
    if (signup(formData.email, formData.password, formData.confirmPassword)) {
      navigate('/');
    } else {
      setError('Please fill all fields correctly');
    }
  };

  return (
    <div className="fade-in">
      <section className="section">
        <div className="container">
          <div className="form-container scale-in">
            <h1 style={{textAlign: 'center', marginBottom: '2rem'}}>Create Account</h1>
            
            {error && (
              <div style={{color: 'red', textAlign: 'center', marginBottom: '1rem'}}>
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>
              
              <div style={{marginBottom: '1.5rem'}}>
                <label style={{display: 'flex', alignItems: 'flex-start', fontSize: '0.9rem', gap: '0.5rem'}}>
                  <input type="checkbox" required style={{marginTop: '0.2rem'}} />
                  <span>I agree to the <a href="#terms" style={{color: '#3498db'}}>Terms of Service</a> and <a href="#privacy" style={{color: '#3498db'}}>Privacy Policy</a></span>
                </label>
              </div>
              
              <button type="submit" className="btn" style={{width: '100%', marginBottom: '1rem'}}>
                Create Account
              </button>
            </form>
            
            <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
              <p>Already have an account? <Link to="/login" style={{color: '#3498db', textDecoration: 'none'}}>Login here</Link></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
