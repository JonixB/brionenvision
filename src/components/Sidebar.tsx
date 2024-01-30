import React from 'react';
import whitelogo from '../assets/black-logo.png';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen bg-black py-24 text-white text-opacity-85 font-semibold text-lg" style={{ width: '320px' }}>
      <img src={whitelogo} alt="Logo" className="logo-class" />

      <ul className="mt-12">
        <li className="my-2">
          <Link to="/" className="block px-4 py-2 text-left hover:opacity-50">Home</Link>
        </li>
        <li className="my-2">
          <Link to="/real-estate" className="block px-4 py-2 text-left hover:opacity-50">Real Estate</Link>
        </li>
        <li className="my-2">
          <a href="#weddings" className="block px-4 py-2 text-left hover:opacity-50">Weddings/Engagements</a>
        </li>
        <li className="my-2">
          <a href="#sports" className="block px-4 py-2 text-left hover:opacity-50">Sports + Fitness</a>
        </li>
        <li className="my-2">
          <a href="#corporate" className="block px-4 py-2 text-left hover:opacity-50">Corporate</a>
        </li>
        <li className="my-2">
          <a href="#contact" className="block px-4 py-2 text-left hover:opacity-50">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;