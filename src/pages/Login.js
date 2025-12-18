import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const { login } = useAuth();
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
    
    if (login(formData.email, formData.password)) {
      navigate('/');
    } else {
      setError('Please enter valid email and password');
    }
  };

  return (
    <div className="fade-in">
      <section className="section">
        <div className="container">
          <div className="form-container scale-in">
            <h1 style={{textAlign: 'center', marginBottom: '2rem'}}>Login</h1>
            
            {error && (
              <div style={{color: 'red', textAlign: 'center', marginBottom: '1rem'}}>
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
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
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem'}}>
                <label style={{display: 'flex', alignItems: 'center', fontSize: '0.9rem'}}>
                  <input type="checkbox" style={{marginRight: '0.5rem'}} />
                  Remember me
                </label>
                <a href="#forgot" style={{color: '#3498db', textDecoration: 'none', fontSize: '0.9rem'}}>
                  Forgot password?
                </a>
              </div>
              
              <button type="submit" className="btn" style={{width: '100%', marginBottom: '1rem'}}>
                Login
              </button>
            </form>
            
            <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
              <p>Don't have an account? <Link to="/signup" style={{color: '#3498db', textDecoration: 'none'}}>Sign up here</Link></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
