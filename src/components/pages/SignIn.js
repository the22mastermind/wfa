import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const SignIn = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Fake Authentication
  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
  }

  if (isAuthenticated) {
    return (
      <Redirect to={{ pathname: '/dashboard' }} />
    );
  }
  return (
    <div className="container">
      <form className="form-wrapper" onSubmit={handleSignIn}>
        <div className="form-title">Sign In</div>
        <div className="input-wrapper">
          <input type="email" required placeholder="Email" className="input" />
        </div>
        <div className="input-wrapper">
          <input type="password" required placeholder="Password" className="input" />
        </div>
        <div className="submit-btn-wrapper">
          <input type="submit" className="submit-btn" value="Sign in" />
        </div>
      </form>
    </div>
  );
}

export default SignIn;
