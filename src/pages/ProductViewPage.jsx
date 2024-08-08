import React from 'react';
import Gallery from '../components/Gallery.jsx';
import BuyBox from '../components/BuyBox.jsx';
import Section from '../components/Section.jsx';
import ProductListing from '../components/ProductListing.jsx';
import productsData from '../utils/products.js';
import ProductOptions from '../components/ProductOptions.jsx';
import imagens from '../utils/images.js';

const ProductViewPage = () => {

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3 w-full">
          <Gallery
            width="100%"
            height="auto"
            radius="4px"
            showThumbs
            images={imagens}
          />
        </div>
        
        <div className="md:w-1/3 w-full">
          <BuyBox
            name="Tênis Nike Revolution 6 Next Nature Masculino"
            reference="REF12345"
            stars={4.5}
            rating={120}
            price="250,00"
            priceDiscount="199,90"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
          >
            <div className="mt-4">
              <p className="text-sm text-dark-gray-2 mb-2">Tamanho</p>
              <ProductOptions
                options={['39', '40', '41', '42', '43']}
                radius="4px"
                shape="square"
                type="text"
              />
            </div>

            <div className="mt-4">
              <p className="text-sm text-dark-gray-2 mb-2">Tamanho</p>
              <ProductOptions
                options={['#00bcd4', '#e91e63', '#9e9e9e', '#607d8b']}
                shape="circle"
                type="color"
              />
            </div>
          </BuyBox>
        </div>
      </div>

      <div className="mt-12">
        <Section
          title="Produtos recomendados"
          titleAlign="left"
          link={{ text: "Ver todos", href: "/products" }}
        >
          <ProductListing products={productsData} />
        </Section>
      </div>
    </div>
  );
};

export default ProductViewPage;
