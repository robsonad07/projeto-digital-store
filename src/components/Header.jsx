import React from 'react';
import logo from "../assets/logo-header.svg";
import cart from "../assets/mini-cart.svg";
import Navbar from './Nav';

export default function Header() {
  return (
    <div className='bg-white p-8 shadow-sm'>
      <header className=" flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Digital Store" className="h-8 mr-4" />

        </div>

        <div className='w-2/4'>
          <input
            type="text"
            placeholder="Pesquisar produto..."
            className="w-3/4 border rounded-md py-2 px-4 focus:outline-none"
          />
          <button className="ml-2 bg-white rounded-md py-1 px-3">
            <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        <div className="flex justify-around space-x-4 mr-8">
          <button className="bg-white hover:bg-gray-200 rounded-md py-2 px-8">Cadastre-se</button>
          <button className="bg-pink-600 text-white hover:bg-pink-800 rounded-md py-2 px-8">Entrar</button>
          <button className="relative">
            <img src={cart} alt="Carrinho" className="h-6 w-6" />
          </button>
        </div>
      </header>

      <div className="mt-8">
        <Navbar />
      </div>
    </div>
  )
}