import React from 'react';

const Header = () => {
  return (
    <nav>
      <a href="/" className="brand">Weather Forecast App</a>
      <ul className="nav-links">
        <li><a href="/signup" className="link">Sign Up</a></li>
        <li><a href="/signin" className="small-btn">Sign In</a></li>
      </ul>
    </nav>
  );
}

export default Header;
