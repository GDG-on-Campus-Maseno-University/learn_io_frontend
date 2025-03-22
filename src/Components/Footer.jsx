import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Learning System. All rights reserved.</p>
      
      {/* Buttons in a row */}
      <div style={styles.buttonContainer}>
      <button style={styles.button} onClick={() => window.location.href = "https://gdg.community.dev/gdg-on-campus-maseno-university-kisumu-kenya/"}>Join GDG</button>
        <button style={styles.button} onClick={() => alert("Support Clicked!")}>Support</button>
        <button style={styles.button} onClick={() => alert("About Clicked!")}>About </button>
        <button style={styles.button} onClick={() => alert(" contactClicked!")}>Contact us</button>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#094E51",
    color: "#fff",
    textAlign: "center",
    padding: "10px 0",
    position: "fixed,",
    bottom: "0",
    width:"100%",
    transform: "translate(-50%, -50%)",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  },
  button: {
    background: "#FFA500",
    color: "#36454F",
    border: "none",
    padding: "8px 15px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Footer;
