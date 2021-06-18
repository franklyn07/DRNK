import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {ExternalLink} from 'react-external-link';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='social-media-container'>
                    <ExternalLink href="https://www.facebook.com/">
                        <i className="fab fa-facebook-square"></i>
                    </ExternalLink>
                    <ExternalLink href="https://www.instagram.com/">
                        <i className="fab fa-instagram-square"></i>
                    </ExternalLink>
                    <ExternalLink href="https://www.linkedin.com/">
                        <i className="fab fa-linkedin"></i>
                    </ExternalLink>                 
                </div>
                <div className='address-container'>
                    <div className='address-phone'>
                        <i className="fas fa-phone-square-alt"></i> 
                        <span>+356 79271908/79006117</span>
                    </div>
                    <div className='address-email'>
                        <i className="fas fa-envelope-square"></i>
                        <span>enquiries.drnk@gmail.com</span>
                    </div>                  
                </div>
                <hr/>
                <div className='important-docs-container'>
                    <i className="fas fa-circle"></i>
                    <Link to="/">
                        <i className="fas fa-user-secret"></i>
                        <span>Privacy</span>
                    </Link>
                    <i className="fas fa-circle"></i>
                    <Link to="/">
                        <i className="fas fa-tenge"></i>
                        <span>Terms</span>
                    </Link> 
                    <i className="fas fa-circle"></i>                   
                </div>               
                <div className="rights-container">
                    <i className="far fa-copyright"></i> 
                    <span>DRNK - All Rights Reserved</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
