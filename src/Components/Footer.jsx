import React from "react";
import styles from "../styles/footer.module.css"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Learning System. All rights reserved.</p>
      
      {/* Buttons in a row */}
      <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={() => window.location.href = "https://gdg.community.dev/gdg-on-campus-maseno-university-kisumu-kenya/"}>Join GDG</button>
        <button className={styles.button} onClick={() => alert("Support Clicked!")}>Support</button>
        <button className={styles.button} onClick={() => alert("About Clicked!")}>About </button>
        <button className={styles.button} onClick={() => alert(" contactClicked!")}>Contact us</button>
      </div>
    </footer>
  );
};

export default Footer;
