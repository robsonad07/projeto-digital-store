import React, { useState } from 'react';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import FilterGroup from '../components/FilterGroup';
import productsData from '../utils/products.js';

const ProductListingPage = () => {
  const [products, setProducts] = useState(productsData);
  const [sortOrder, setSortOrder] = useState('default');

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setSortOrder(sortValue);

    let sortedProducts = [...products];
    if (sortValue === 'lowest') {
      sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortValue === 'highest') {
      sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }
    setProducts(sortedProducts);
  };

  return (
    <div className="flex">
      <div className="w-80 p-4">
        <div className="mb-4">
          <label className="text-dark-gray-2 text-lg block mb-2">Ordenar por</label>
          <select 
            className="w-full h-12 text-dark-gray-2 border rounded-md p-2"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="default">Selecione</option>
            <option value="lowest">Menor preço</option>
            <option value="highest">Maior preço</option>
          </select>
        </div>
        <div>
          <p>Filtrar por</p>
          <FilterGroup
            title="Marks"
            inputType="checkbox"
            options={[
              { text: "Adidas" },
              { text: "Nike" },
              { text: "Puma" },
              { text: "Toper" }
            ]}
          />
          <FilterGroup
            title="Categoria"
            inputType="checkbox"
            options={[
              { text: "Esporte e lazer" },
              { text: "Casual" },
              { text: "Utilitário" },
              { text: "Corrida" }
            ]}
          />
          <FilterGroup
            title="Gênero"
            inputType="checkbox"
            options={[
              { text: "Masculino" },
              { text: "Feminino" },
              { text: "Unisex" }
            ]}
          />
          <FilterGroup
            title="Estado"
            inputType="radio"
            options={[
              { text: "Novo" },
              { text: "Usado" }
            ]}
          />
        </div>
        
      </div>
      <div className="flex-1 p-4">
        <Section title={`${products.length} produtos encontrados`} titleAlign="left">
          <ProductListing products={products} />
        </Section>
      </div>
    </div>
  );
};

export default ProductListingPage;
