import React from 'react';
import whitelogo from '../assets/black-logo.png';

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen bg-black py-24 text-white text-opacity-85 font-semibold text-lg" style={{ width: '320px' }}>
      <img src={whitelogo} alt="Logo" className="logo-class" />

      <ul className="mt-12">
        <li className="my-2 px-4 py-2 text-left mx-auto" style={{ width: '90%' }}>Home</li>
        <li className="my-2 px-4 py-2 text-left mx-auto" style={{ width: '90%' }}>Photography</li>
        <li className="my-2 px-4 py-2 text-left mx-auto" style={{ width: '90%' }}>Videography</li>
        <li className="my-2 px-4 py-2 text-left mx-auto" style={{ width: '90%' }}>Social Media Management</li>
        <li className="my-2 px-4 py-2 text-left mx-auto" style={{ width: '90%' }}>Contact</li>
      </ul>
    </div>
  );
}

export default Sidebar;