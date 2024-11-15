import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <section style={styles.heroSection}>
      <div style={styles.overlay}></div>
      <h1 style={styles.title}>Your Personal Stock Portfolio Manager</h1>
      <p style={styles.subtitle}>
        Manage your stocks, track performance, and reach your financial goals with ease.
      </p>
      <button onClick={() => navigate('/auth')} style={styles.button}>
        Get Started
      </button>
    </section>
  );
}

const styles = {
  heroSection: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    color: '#fff',
    textAlign: 'center',
    backgroundImage: 'linear-gradient(to right, #4facfe, #00f2fe)',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.2)',  // Optional dark overlay for better contrast
    zIndex: 0,
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    zIndex: 1,
    margin: '0.5em 0',
  },
  subtitle: {
    fontSize: '1.5rem',
    fontWeight: '300',
    zIndex: 1,
    marginBottom: '1.5em',
    maxWidth: '600px',
  },
  button: {
    zIndex: 1,
    padding: '0.8em 2.5em',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#ff7e5f',
    backgroundImage: 'linear-gradient(45deg, #ff7e5f, #feb47b)',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    transition: 'background 0.3s ease',
  },
};

export default Hero;
