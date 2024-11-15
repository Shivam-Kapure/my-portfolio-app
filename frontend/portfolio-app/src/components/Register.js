import React from 'react';
import './Auth.css';

function Register({ toggleAuthMode }) {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Register</h2>
        <form className="auth-form">
          <div className="auth-field">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="auth-field">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="auth-field">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" />
          </div>
          <button type="submit" className="auth-button">
            Register
          </button>
        </form>
        <p className="auth-footer">
          Already have an account?{' '}
          <button className="auth-link" onClick={toggleAuthMode}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;