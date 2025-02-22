import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
  const styles = {
    app: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "space-between",
      backgroundColor: "#094E51",
      color: "#FFFFFF",
      padding: "20px",
      boxSizing: "border-box",
      position: "relative",
    },
    navbar: {
      backgroundColor: "#FFFFFF",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "20px",
      position: "relative",
    },
    userProfileButton: {
      backgroundColor: "#FFA500",
      border: "none",
      borderRadius: "50%",
      width: "60px", // Set equal dimensions
      height: "60px", // Set equal dimensions
      color: "#FFFFFF",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "28px",
      cursor: "pointer",
      position: "absolute",
      top: "10px",
      left: "10px",
      textDecoration: "none",
    },
  };

  const UserProfileButton = () => {
    return (
      <Link to="/user-profile" style={styles.userProfileButton}>
        👤
      </Link>
    );
  };

  const UserProfilePage = () => {
    return (
      <div>
        <h1>User Profile Page</h1>
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={styles.app}>
              <nav style={styles.navbar}>
                <UserProfileButton />
              </nav>
            </div>
          }
        />
        <Route path="/user-profile" element={<UserProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;