import React from 'react';

const SignUp = () => {
  return (
    <div className="container">
      <form className="form-wrapper">
        <div className="form-title">Sign Up</div>
        <div className="names">
          <input type="text" required placeholder="First name" className="input"/>
          <input type="text" required placeholder="Last name" className="input"/>
        </div>
        <div className="input-wrapper">
          <input type="email" required placeholder="Email" className="input"/>
        </div>
        <div className="input-wrapper">
          <input type="telephone" required placeholder="Phone" className="input"/>
        </div>
        <div className="input-wrapper">
          <input type="password" required placeholder="Password" className="input"/>
        </div>
        <div className="input-wrapper">
          <input type="password" required placeholder="Confirm password" className="input"/>
        </div>
        <div className="submit-btn-wrapper">
          <input type="submit" className="submit-btn" value="Sign up"/>
        </div>
        <p className="alt-wrapper">
          <span className="alt-text">Already registered?</span>
          <a href="/signin" className="link">Sign in</a>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
