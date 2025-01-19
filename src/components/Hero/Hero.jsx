import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className="hero-content">
            <h2>Hi, I'm <strong>H.K.de Silva</strong></h2>
            <h2>Software Developer</h2>
            <p className='title-desc'>
                I'm passionate about Software Development, Programming, Mobile development in general.
                I'm always eager to learn new technologies and create solutions that drive business success for my clients.
            </p>
            <p>
                <a className='cv-link' href="#" target="_blank">
                    <span>My Resume</span> 
                </a>
            </p>
            <p>
                <a href="./assets/files/kasun-cv.pdf" download>
                    <button className="download-btn">Download My CV</button>
                </a>
            </p>
        </div>

        <div className="hero-img">
            <div className="image-container">
                <img className="main-image" src="./assets/images/Mypic.jpg" alt="Profile" />
            </div>

            <div>
                <a href="www.linkedin.com/in/kasun-lakmal-de-silva" target="_blank" rel="noopener noreferrer" className="tech-icon">
                    <img src="./assets/images/linkedin.png" alt="LinkedIn" />
                </a>
                <a href="https://github.com/kasunldesilva" target="_blank" rel="noopener noreferrer" className="tech-icon">
                    <img src="./assets/images/github.png" alt="GitHub" />
                </a>
            </div>
        </div>
    </section>
  );
};

export default Hero;
