import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Carossel.module.css";

const Carossel = ({ images, speed = 100, transitionDuration = 5000 }) => {
  const sliderRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true); // Track whether automatic scrolling is active
  const scrollTimeoutRef = useRef(null); // Ref to store timeout for resuming scroll500
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const scrollSlider = () => {
      if (isScrolling && slider) {
        scrollAmount += 1;
        slider.scrollLeft = scrollAmount;

        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(scrollSlider, speed);
    return () => clearInterval(interval);
  }, [speed, isScrolling]);

  // Function to stop scrolling for 5 seconds after user interaction
  const handleManualScroll = (direction) => {
    clearTimeout(scrollTimeoutRef.current);
    setIsScrolling(false);

    // Scroll based on direction
    if (direction === "left") {
      sliderRef.current.scrollLeft -= 300;
    } else if (direction === "right") {
      sliderRef.current.scrollLeft += 300;
    }

    // Resume scrolling after 5 seconds
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(true);
    }, 1000);
  };

  return (
    <div className={styles.carouselwrapper}>
      <button className={styles.leftarrow} onClick={() => handleManualScroll("left")}>
        &#8249;
      </button>
      <div ref={sliderRef} className={styles.slidercontainer}>
        {(images || []).concat(images || []).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={styles.sliderimage}
            style={{
              transition: `transform ${transitionDuration}ms ease-in-out`,
            }} // Add smooth transition
          />
        ))}
      </div>
      <button
        className={styles.rightarrow}
        onClick={() => handleManualScroll("right")}
      >
        &#8250;
      </button>
    </div>
  );
};
Carossel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  speed: PropTypes.number,
  transitionDuration: PropTypes.number,
};

export default Carossel;
