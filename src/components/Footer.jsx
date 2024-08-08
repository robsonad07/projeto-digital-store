// src/components/Footer.js
import React from 'react';
import logo from '../assets/logo-footer.svg';
import instagramIcon from '../assets/instagram.svg';
import facebookIcon from '../assets/facebook.svg';
import twitterIcon from '../assets/twitter.svg';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <img src={logo} alt="Digital Store Logo" className="mb-4" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#"><img src={facebookIcon} alt="Facebook" className="w-6 h-6" /></a>
            <a href="#"><img src={instagramIcon} alt="Instagram" className="w-6 h-6" /></a>
            <a href="#"><img src={twitterIcon} alt="Twitter" className="w-6 h-6" /></a>
          </div>
        </div>
        <div className="col-span-1">
          <h3 className="font-semibold mb-4">Informação</h3>
          <ul>
            <li><a href="#" className="hover:underline">Sobre Drip Store</a></li>
            <li><a href="#" className="hover:underline">Segurança</a></li>
            <li><a href="#" className="hover:underline">Wishlist</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Trabalhe conosco</a></li>
            <li><a href="#" className="hover:underline">Meus Pedidos</a></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="font-semibold mb-4">Categorias</h3>
          <ul>
            <li><a href="#" className="hover:underline">Camisetas</a></li>
            <li><a href="#" className="hover:underline">Calças</a></li>
            <li><a href="#" className="hover:underline">Bonés</a></li>
            <li><a href="#" className="hover:underline">Headphones</a></li>
            <li><a href="#" className="hover:underline">Tênis</a></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="font-semibold mb-4">Contato</h3>
          <address>
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161<br />
            (85) 3051-3411
          </address>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>© 2022 Digital College</p>
      </div>
    </footer>
  );
}

export default Footer;
