import React from 'react';
import aboutImage from '../assets/testimg/image1.png'; // Correct path

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is an empty page for the About button.</p>

      {/* Display the Image */}
      <img src={aboutImage} alt="About Us" style={{ width: '300px', height: 'auto' }} />
    </div>
  );
}

export default About;
