import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Button.css';

function Button() {
  return (
    <div className="buttons-container">
      {/* External link button */}
      <button
        className="button"
        onClick={() => window.location.assign('https://gdg.community.dev/gdg-on-campus-maseno-university-kisumu-kenya/')}
      >
        Join GDG
      </button>

      {/* Internal navigation buttons */}
      <Link to="/support">
        <button className="button">Support</button>
      </Link>

      <Link to="/about">
        <button className="button">About</button>
      </Link>

      <Link to="/contact-us">
        <button className="button">Contact Us</button>
      </Link>
    </div>
  );
}

export default Button;