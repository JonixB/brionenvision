import React from 'react';
import whitelogo from '../assets/black-logo.png';

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen bg-black py-24 text-white text-opacity-85 font-semibold text-lg" style={{ width: '320px' }}>
      <img src={whitelogo} alt="Logo" className="logo-class" />

      <ul className="mt-12">
        <li className="my-2">
          <a href="#home" className="block px-4 py-2 text-left hover:opacity-50">Home</a>
        </li>
        <li className="my-2">
          <a href="#photography" className="block px-4 py-2 text-left hover:opacity-50">Photography</a>
        </li>
        <li className="my-2">
          <a href="#videography" className="block px-4 py-2 text-left hover:opacity-50">Videography</a>
        </li>
        <li className="my-2">
          <a href="#social-media-management" className="block px-4 py-2 text-left hover:opacity-50">Social Media Management</a>
        </li>
        <li className="my-2">
          <a href="#contact" className="block px-4 py-2 text-left hover:opacity-50">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;