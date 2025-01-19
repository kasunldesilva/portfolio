import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className='nav-wrapper'>
        <div className="nav-content">
          <h1>Portifolio</h1>

          <ul>
            <li className={activeTab === 'home' ? 'active' : ''}>
              <a className='menu-item' href="#home" onClick={() => handleClick('home')}>Home</a>
            </li>

            <li className={activeTab === 'skills' ? 'active' : ''}>
              <a className='menu-item' href="#skills" onClick={() => handleClick('skills')}>Skills</a>
            </li>

            <li className={activeTab === 'work-experience' ? 'active' : ''}>
              <a className='menu-item' href="#work-experience" onClick={() => handleClick('work-experience')}>Work Experience</a>
            </li>

            <li className={activeTab === 'contact' ? 'active' : ''}>
              <a className='menu-item' href="#contact" onClick={() => handleClick('contact')}>Contact Me</a>
            </li>

            <button className='contact-btn' onClick={() => {}}>
              Hire Me
            </button>
          </ul>

          <button className='menu-btn' onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
