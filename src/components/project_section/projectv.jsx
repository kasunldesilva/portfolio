import React, { useState, useRef } from 'react';
import './projectv.css';

const IMAGE_ASSETS = Array.from({ length: 24}, (_, i) => `assets/Gym/s${i + 1}.jpeg`);

function ProjectV() {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryRef = useRef(null);

  const handleScroll = (direction) => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: direction === 'next' ? 300 : -300, // Scroll by 300px
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <section className="image-gallery">
        <h3>Mobile App Developer for Gym Management</h3>
        <div className="scroll-container">
          <button className="skip-button" onClick={() => handleScroll('prev')}>◀</button>
          <div className="image-grid-horizontal" ref={galleryRef}>
            {IMAGE_ASSETS.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gym Image ${index + 1}`}
                className="thumbnail-image"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
          <button className="skip-button" onClick={() => handleScroll('next')}>▶</button>
        </div>

        {selectedImage && (
          <div className="overlay" onClick={() => setSelectedImage(null)}>
            <div className="full-size-image-container" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt="Selected Gym" className="full-size-image" />
              <button className="close-button" onClick={() => setSelectedImage(null)}>✖</button>
            </div>
          </div>
        )}
      </section>

      {/* Video Section */}
      <section className="video-section">
       
        <div className="video-container">
          <video 
            width="20%" // Adjust width here
            height="20%"// Automatically adjusts height based on width
            controls
          >
            <source src="assets/videos/GymMate.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
}

export default ProjectV;
