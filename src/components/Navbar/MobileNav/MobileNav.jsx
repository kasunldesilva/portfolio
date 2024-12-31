import React from 'react';
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <ul>
            <li className='menu-item'>Home</li>
            <li className='menu-item'>Skills</li>
            <li className='menu-item'>Work Experience</li>
            <li className='menu-item'>Contact Me</li>
            <button className='contact-btn' onClick={() => { }}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
