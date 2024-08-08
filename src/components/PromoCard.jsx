import React from 'react';
import PropTypes from 'prop-types';

const PromoCard = ({ discount, buttonText, image }) => {
  return (
    <div className="relative bg-white rounded-lg  shadow-lg m-2" style={{ width: '350px', height: '250px' }}>
      <img src={image} alt="Promo" className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 p-4 flex flex-col justify-between">
        <div>
          <span className="bg-lime-200 text-black font-bold py-1 px-2 rounded">{discount}</span>
        </div>
        <button className="bg-white w-2/5 text-pink-700 py-2 px-4 rounded">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

PromoCard.propTypes = {
  discount: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PromoCard;
