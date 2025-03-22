import React from "react";
import './Header.css';
import avatar from '../images/avatar.jpg'; // Import the image

function Header() {
    const handleNavigation = (url) => {
        window.open(url, "_blank");
    };

    return (
        <>
            <header className="header">
                <div className="profile-photo">
                    <img src={avatar} alt="profile" /> {/* Use the imported image */}
                </div>
                <nav className="navbar">
                    <div className="menu">
                        <ul className="nav-list">
                            <li><button onClick={() => handleNavigation("#home")}>Home</button></li>
                            <li><button onClick={() => handleNavigation("#lessons")}>Lessons</button></li>
                            <li><button onClick={() => handleNavigation("#articles")}>Articles</button></li>
                            <li><button onClick={() => handleNavigation("#pastpapers")}>Pastpapers</button></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;