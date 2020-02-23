import React from 'react';

const SignIn = () => {
  return (
    <div className="container">
      <form className="form-wrapper">
        <div className="form-title">Sign In</div>
        <div className="input-wrapper">
          <input type="email" required placeholder="Email" className="input"/>
        </div>
        <div className="input-wrapper">
          <input type="password" required placeholder="Password" className="input"/>
        </div>
        <div className="submit-btn-wrapper">
          <input type="submit" className="submit-btn" value="Sign in"/>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
