import React from "react";
import { Link } from "react-router-dom";
import  styles from '../styles/Header.module.css';
import avatar from '../images/avatar.jpg'; // Import the image

function Header() {
    const handleNavigation = (url) => {
        window.open(url, "_blank");
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.profilephoto}>
                    <img src={avatar} alt="profile" /> {/* Use the imported image */}
                </div>
                <nav className={styles.navbar}>
                    <div className={styles.menu}>
                        <ul className={styles.navlist}>
                            <li><button><Link to="/login" >Login</Link></button></li>
                            <li><button><Link to="/lesson" >Lesson</Link></button></li>
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