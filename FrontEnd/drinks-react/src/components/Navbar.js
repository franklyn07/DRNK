import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [scrollState, setScrollState] = useState("top");

    useEffect(() => {
        const listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 20) {
                if (scrollState !== "amir") {
                    setScrollState("amir")
                }
            } else {
                if (scrollState !== "top") {
                    setScrollState("top")
                }
            }
        });
        return () => {
            document.removeEventListener("scroll", listener)
        };
    }, [scrollState]);

    return (
        <nav className={`navbar scroll-state-${scrollState}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    DRNK <i className="fas fa-glass-martini"/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu' }>
                    <li className='nav-item'>
                        <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/products' className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/reachout' className='nav-links' onClick={closeMobileMenu}>
                            Reach Out
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/login' className='nav-links' onClick={closeMobileMenu}>
                            Log In
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
