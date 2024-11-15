import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import '../components/Auth.css'; // Include CSS styling for Login and Register components

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={isLogin ? 'auth-container login-bg' : 'auth-container register-bg'}>
      {isLogin ? (
        <Login toggleAuthMode={toggleAuthMode} />
      ) : (
        <Register toggleAuthMode={toggleAuthMode} />
      )}
    </div>
  );
}

export default Auth;