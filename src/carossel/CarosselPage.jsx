import React from "react";
import Carossel from "./Carossel.jsx"; 

// Import local images
import img1 from "../images/c1.jpg";
import img2 from "../images/c2.jpg";
import img3 from "../images/c3.jpg";
import img4 from "../images/c4.jpg";

function Carosalepage() {
  const images = [img1, img2, img3, img4];

  return (
    <div>
      <h1>Image Slider</h1>
      <Carossel images={images} speed={50} />
    </div>
  );
}

export default Carosalepage;
