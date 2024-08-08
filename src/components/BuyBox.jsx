import React from 'react';
import PropTypes from 'prop-types';
import starIcon from '../assets/star-icon.svg';

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
      <h1 className="text-2xl font-semibold text-dark-gray mb-2">{name}</h1>
      <p className="text-sm text-gray-500">Casual | Nike | REF:{reference}</p>

      <div className="flex items-center mt-4 ">
        <div className="flex items-center bg-yellow-400 rounded-md p-1">
          <span className="bg-yellow-400 text-white  px-2 py-1 text-xs">
            {stars.toFixed(1)}
          </span>
          <img src={starIcon} alt="Star" className="w-4 h-6 ml-2" />
        </div>
        <span className="text-gray-500 text-sm ml-2">({rating} avaliações)</span>
      </div>

      <div className="mt-4">
        {priceDiscount ? (
          <div className="flex items-baseline">
            <span className="text-gray-400 text-lg line-through mr-2">{`R$ ${price}`}</span>
            <span className="text-3xl font-semibold text-dark-gray-2">{`R$ ${priceDiscount}`}</span>
          </div>
        ) : (
          <span className="text-3xl font-semibold text-dark-gray-2">{`R$ ${price}`}</span>
        )}
      </div>

      <p className="text-sm text-gray-600 mt-4">{description}</p>

      <div className="mt-6">{children}</div>

      <button className="mt-6 w-full bg-warning text-white py-3 rounded-lg text-lg font-semibold">
        Comprar
      </button>
    </div>
  );
};

BuyBox.propTypes = {
  name: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  priceDiscount: PropTypes.string,
  description: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BuyBox;
