import React from "react";
import Section from "../components/Section";
import PromoCard from "../components/PromoCard";
import promoImage from '../../public/collection-1.png';
import promoImage2 from '../../public/collection-2.png';
import promoImage3 from '../../public/collection-3.png';
import arrowRight from "../assets/arrow-right.svg";
import productsData from '../utils/products.js';
import ProductListing from "../components/ProductListing.jsx";
import airJordan from '/public/air-jordan.png';
import Gallery from "../components/Gallery.jsx";
import imagens from '../utils/images.js';

export default function HomePage() {
  return (
    <div>
      <div className="flex justify-center bg-gray-100 p-16">
        <Gallery
          width="800px"
          height="450px"
          radius="8px"
          showThumbs
          images={imagens}
        />
      </div>


      <div>
        <Section
          title="Produtos em Destaque"
          titleAlign="left"
        >
          <div className="flex justify-center">
            <PromoCard
              discount="30% OFF"
              buttonText="Comprar"
              image={promoImage}
            />
            <PromoCard
              discount="30% OFF"
              buttonText="Comprar"
              image={promoImage2}
            />
            <PromoCard
              discount="30% OFF"
              buttonText="Comprar"
              image={promoImage3}
            />
          </div>

        </Section>
      </div>

      <div>
        <Section
          title="Produtos em alta"
          titleAlign="left"
          link={{ text: 'Ver Todos', img: arrowRight, href: "/products" }}
        >
          <div className="App container mx-auto p-4">
            <ProductListing products={productsData} />
          </div>

        </Section>
      </div>

      <div>
        <div className="flex flex-col bg-gray-100 lg:flex-row items-center justify-between bg-white p-8 rounded-lg shadow-lg">
          <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
            <img src={airJordan} alt="Air Jordan edição de 
            colecionador" className="size-1/2" />
          </div>
          <div className="text-left w-5/12 p-8">
            <p className="text-pink-700 font-bold mb-2">Oferta especial</p>
            <h1 className="text-4xl font-extrabold mb-4">
              Air Jordan edição de
              colecionador
            </h1>
            <p className="text-gray-600 mb-6">
              Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
            </p>
            <button className="bg-pink-600 text-white font-semibold py-3 px-6 rounded-md">
              Ver Ofertas
            </button>
          </div>

        </div>
      </div>



    </div>
  )
}