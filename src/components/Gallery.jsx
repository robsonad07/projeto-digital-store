import React, { useState } from 'react';
import PropTypes from 'prop-types';

import arrowRight from '../assets/arrow-right.svg';
import arrowLeft from '../assets/arrow-left.svg';

const Gallery = ({ className, width, height, radius, showThumbs, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleThumbClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`relative ${className}`} style={{ width: width, height: height }}>
      <div className="" style={{ borderRadius: radius }}>
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full"
          style={{ borderRadius: radius }}
        />
      </div>

      <button
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 p-1 bg-white rounded-full shadow ${currentIndex === 0 && 'opacity-50 cursor-not-allowed'}`}
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        <img src={arrowLeft} alt="Previous" />
      </button>

      <button
        className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-white rounded-full shadow ${currentIndex === images.length - 1 && 'opacity-50 cursor-not-allowed'}`}
        onClick={handleNext}
        disabled={currentIndex === images.length - 1}
      >
        <img src={arrowRight} alt="Next" />
      </button>

      {showThumbs && (
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className={`w-[75px] h-[55px] object-cover cursor-pointer ${index === currentIndex ? 'border-2 border-primary' : ''}`}
              style={{ borderRadius: radius }}
              onClick={() => handleThumbClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
  showThumbs: PropTypes.bool,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired
    })
  ).isRequired
};

Gallery.defaultProps = {
  className: '',
  width: '100%',
  height: 'auto',
  radius: '0px',
  showThumbs: false
};

export default Gallery;
