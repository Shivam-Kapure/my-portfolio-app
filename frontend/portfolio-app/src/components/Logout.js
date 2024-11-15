import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // to redirect after logout

function Logout({ logout }) {
  const navigate = useNavigate();

  useEffect(() => {
    logout(); // Call logout function to clear the token and state
    navigate('/auth'); // Redirect user to the Login page
  }, [logout, navigate]);

  return <div>Logging you out...</div>;
}

export default Logout;