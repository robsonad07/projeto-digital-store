import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductOptions = ({ options, radius, shape, type }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex space-x-2 mt-4">
      {options.map((option, index) => (
        <div
          key={index}
          className={`cursor-pointer flex items-center justify-center ${
            shape === 'square' ? 'w-12 h-12' : 'w-8 h-8 rounded-full'
          } ${
            selectedOption === option ? 'border-primary border-2' : 'border border-gray-300'
          }`}
          style={{
            borderRadius: shape === 'square' ? radius : '50%',
            backgroundColor: type === 'color' ? option : 'transparent',
          }}
          onClick={() => handleOptionClick(option)}
        >
          {type === 'text' && (
            <span className="text-dark-gray-2 text-lg">{option}</span>
          )}
        </div>
      ))}
    </div>
  );
};

ProductOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  radius: PropTypes.string,
  shape: PropTypes.oneOf(['square', 'circle']).isRequired,
  type: PropTypes.oneOf(['text', 'color']).isRequired,
};

ProductOptions.defaultProps = {
  radius: '4px',
};

export default ProductOptions;
