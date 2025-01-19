import React from 'react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='footer'>
            <p>
                {year} &copy; Designed & Built by 
                <a 
                    href="https://www.linkedin.com/in/kasun-your-profile" // Replace with your actual LinkedIn or portfolio URL
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer-link"
                >
                    Kasun
                </a>
            </p>
        </footer>
    );
};

export default Footer;
