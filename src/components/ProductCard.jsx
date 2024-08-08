import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ image, tipo, name, price, priceDiscount }) => {
  return (
    <div className="rounded-lg p-4 text-center hover:cursor-pointer">
      <div className="shadow-md">
        <img src={image} alt={name} className="bg-gray-50 w-72 h-80  mx-auto mb-4" />
      </div>

      <div className="bg-gray-50">
        <p>{tipo}</p>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        {priceDiscount ? (
          <div className="mb-2">
            <span className="text-light-gray line-through text-xl">{price}</span>
            <span className="text-dark-gray text-2xl ml-2">{priceDiscount}</span>
          </div>
        ) : (
          <p className="text-dark-gray text-2xl mb-2">{price}</p>
        )}
      </div>

    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceDiscount: PropTypes.string,
};

export default ProductCard;
