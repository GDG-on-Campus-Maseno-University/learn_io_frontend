import React from 'react';
import supportImage from '../assets/testimg/image3.png'; 

function Support() {
  return (
    <div>
      <h2>Support Page</h2>
      <p>This is an empty page for the Support button.</p>

      {/* Display the Image */}
      <img src={supportImage} alt="Support" style={{ width: '300px', height: 'auto' }} />
    </div>
  );
}

export default Support;
