import React from 'react';

function Features() {
  return (
    <section style={styles.featuresSection}>
      <h2 style={styles.heading}>Features</h2>
      <div style={styles.featureList}>
        <div style={styles.feature}>
          <h3 style={styles.featureTitle}>Track Your Portfolio</h3>
          <p style={styles.featureText}>
            View real-time updates and detailed insights into your investments.
          </p>
        </div>
        <div style={styles.feature}>
          <h3 style={styles.featureTitle}>Custom Watchlist</h3>
          <p style={styles.featureText}>
            Monitor your favorite stocks and get instant alerts on changes.
          </p>
        </div>
        <div style={styles.feature}>
          <h3 style={styles.featureTitle}>Secure Login</h3>
          <p style={styles.featureText}>
            Enjoy secure access to your account with industry-standard protection.
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  featuresSection: {
    padding: '4em 2em',
    backgroundColor: '#f0f4f8',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '1.5em',
  },
  featureList: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '2em',
  },
  feature: {
    backgroundColor: '#fff',
    padding: '2em',
    width: '250px',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  },
  featureTitle: {
    fontSize: '1.25rem',
    color: '#333',
    marginBottom: '0.5em',
    background: 'linear-gradient(45deg, #4facfe, #00f2fe)',
    WebkitBackgroundClip: 'text',
  },
  featureText: {
    color: '#666',
    fontSize: '1rem',
  },
};

export default Features;
