import React from 'react';
import './Auth.css';

function Login({ toggleAuthMode }) {
  return (
    <div className="auth-card">
      <h2 className="auth-title">Login</h2>
      <form className="auth-form">
        <div className="auth-field">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="auth-field">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="auth-button">
          Login
        </button>
      </form>
      <p className="auth-footer">
        Don’t have an account?{' '}
        <button className="auth-link" onClick={toggleAuthMode}>
          Register
        </button>
      </p>
    </div>
  );
}

export default Login;
