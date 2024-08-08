import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import { useNavigate } from "react-router-dom";

const ProductListing = ({ products }) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" onClick={() => navigate("/view-products")}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            tipo={product.tipo}
            name={product.name}
            price={product.price}
            priceDiscount={product.priceDiscount}
          />
        ))}
      </div>
  );
};

ProductListing.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      priceDiscount: PropTypes.string,
    })
  ).isRequired,
};

export default ProductListing;
