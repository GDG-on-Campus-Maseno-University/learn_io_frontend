// eslint-disable-next-line no-unused-vars
import React from "react";
import Carossel from "./Components/Carossel.jsx"; // Correct import

// Import local images
import img1 from "./assets/image1.jpg";
import img2 from "./assets/image2.jpg";
import img3 from "./assets/image3.jpg";
import img4 from "./assets/image4.jpg";

function App() {
  const images = [img1, img2, img3, img4];

  return (
    <div>
      <h1>Image Slider</h1>
      <Carossel images={images} speed={50} />
    </div>
  );
}

export default App;
