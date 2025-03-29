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
                  <Link  to="/userprofile" > <img src={avatar} alt="profile" /> {/* Use the imported image */}</Link> 
                </div>
                <nav className={styles.navbar}>
                    <div className={styles.menu}>
                        <ul className={styles.navlist}>
                            <li><button><Link to="/login" >Login</Link></button></li>
                            <li><button><Link to="/lesson" >Course</Link></button></li>
                            <li><button><Link to="/register" >Register</Link></button></li>
                            <li><button><Link to="/articles" >Article</Link></button></li>
                            <li><button ><Link to="/course" > lesson</Link></button></li>
                            <li><button ><Link to="/instr" > Instructor</Link></button></li>
                            <li><button ><Link to="/findpp" > FindPastPaer</Link></button></li>

                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;