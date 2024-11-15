import { useState, useEffect } from 'react';

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated by looking for the token in localStorage
    const token = localStorage.getItem('auth_token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('auth_token', token); // Store the token in localStorage
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('auth_token'); // Remove the token from localStorage
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
}

export default useAuth;
