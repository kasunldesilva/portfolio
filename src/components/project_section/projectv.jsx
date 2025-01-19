import React, { useState, useRef } from 'react';
import './projectv.css';

const IMAGE_ASSETS = Array.from({ length: 24 }, (_, i) => `assets/Gym/s${i + 1}.jpeg`);
const IMAGE_ASSET = Array.from({ length: 13 }, (_, i) => `assets/varpu/v${i + 1}.png`);

function ProjectV() {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryRef = useRef(null);

  const handleScroll = (direction) => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: direction === 'next' ? 300 : -300, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
     
      <section className="image-gallery">
        <h3>Gym Mate-App</h3>
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

     
      <section className="varpu-image-gallery">
        <h3>Varpu-Admin panel</h3>
        <div className="scroll-container">
          <button className="skip-button" onClick={() => handleScroll('prev')}>◀</button>
          <div className="image-grid-horizontal varpu-grid" ref={galleryRef}>
            {IMAGE_ASSET.map((image, index) => (
              <div key={index} className="varpu-thumbnail-container">
                <img
                  src={image}
                  alt={`Varpu Image ${index + 1}`}
                  className="varpu-thumbnail"
                  onClick={() => setSelectedImage(image)}
                />
              </div>
            ))}
          </div>
          <button className="skip-button" onClick={() => handleScroll('next')}>▶</button>
        </div>

        {selectedImage && (
          <div className="overlay" onClick={() => setSelectedImage(null)}>
            <div className="full-size-image-container" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt="Selected Varpu" className="full-size-image" />
              <button className="close-button" onClick={() => setSelectedImage(null)}>✖</button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default ProjectV;
