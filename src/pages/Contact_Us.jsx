import React from 'react';
import contactImage from '../assets/testimg/image2.png'; 

function Contact_Us() {
  return (
    <div>
      <h2>Contact Us Page</h2>
      <p>This is an empty page for the Contact Us button.</p>

      {/* Display the Image */}
      <img src={contactImage} alt="Contact Us" style={{ width: '300px', height: 'auto' }} />
    </div>
  );
}

export default Contact_Us;
