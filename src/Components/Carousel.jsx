/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "../styles/Carousel.css";

const Carousel = ({ images, speed = 50 }) => {
  const sliderRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider || !isScrolling) return;

    const scrollSlider = () => {
      slider.scrollLeft += 1;

      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0; // Reset to prevent jump
      }
    };

    const interval = setInterval(scrollSlider, speed);
    return () => clearInterval(interval);
  }, [speed, isScrolling]);

  const handleManualScroll = (direction) => {
    clearTimeout(scrollTimeoutRef.current);
    setIsScrolling(false);

    if (direction === "left") {
      sliderRef.current.scrollLeft -= 300;
    } else if (direction === "right") {
      sliderRef.current.scrollLeft += 300;
    }

    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(true);
    }, 5000);
  };

  return (
    <div className="carousel-wrapper">
      <button className="left-arrow" onClick={() => handleManualScroll("left")}>
        &#8249;
      </button>
      <div ref={sliderRef} className="slider-container">
        {[...images, ...images].map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} className="slider-image" />
        ))}
      </div>
      <button className="right-arrow" onClick={() => handleManualScroll("right")}>
        &#8250;
      </button>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  speed: PropTypes.number,
};

export default Carousel;
