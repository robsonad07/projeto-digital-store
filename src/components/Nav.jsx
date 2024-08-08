import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(1); // Inicializa com id 1 selecionado

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Produtos', path: '/products' },
    { id: 3, text: 'Categorias', path: '/' },
    { id: 4, text: 'Meus Pedidos', path: '/' },
  ];

  const handleClick = (id) => {
    setSelectedItem(id);
  };

  return (
    <div className='flex justify-start items-center h-16 max-w-[1240px] text-black font-semibold'>
      <ul className='hidden md:flex'>
        {navItems.map((item) => (
          <li key={item.id} className='mr-2'>
            <Link
              to={item.path}
              className={`block p-4 rounded-xl cursor-pointer duration-300 ${
                selectedItem === item.id ? 'text-pink-700 underline' : 'hover:text-black'
              }`}
              onClick={() => handleClick(item.id)}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
