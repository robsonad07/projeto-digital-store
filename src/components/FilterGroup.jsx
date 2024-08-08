import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FilterGroup = ({ title, inputType, options }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    if (inputType === 'checkbox') {
      setSelectedOptions((prev) =>
        prev.includes(value)
          ? prev.filter((option) => option !== value)
          : [...prev, value]
      );
    } else if (inputType === 'radio') {
      setSelectedOptions([value]);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg mb-4">
      <h3 className="text-dark-gray-2 font-bold text-lg mb-2">{title}</h3>
      <hr className="border-light-gray-2 mb-4" />
      {options.map((option, index) => (
        <label key={index} className="flex items-center mb-2 text-dark-gray-2">
          <input 
            type={inputType} 
            value={option.value || option.text} 
            checked={selectedOptions.includes(option.value || option.text)}
            onChange={handleChange}
            className="w-5 h-5 text-primary mr-2 checked:bg-pink-700" 
          />
          {option.text}
        </label>
      ))}
    </div>
  );
};

FilterGroup.propTypes = {
  title: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string,
    })
  ).isRequired,
};

export default FilterGroup;
