import React, { useState } from 'react';
import Login from '../components/Login';
import '../components/Auth.css'; // Include CSS styling for Login and Register components

function Auth() {

  return (
    <div className= 'auth-container login-bg' >
      <Login />
    </div>
  );
}

export default Auth;