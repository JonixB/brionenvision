import React from 'react';
import whitelogo from '../assets/black-logo.png';

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen bg-black py-24 text-white" style={{ width: '320px' }}>
      <img src={whitelogo} alt="Logo" className="logo-class" />

      <ul className="mt-12">
        <li className="my-2">Home</li>
        <li className="my-2">Photography</li>
        <li className="my-2">Videography</li>
        <li className="my-2">Social Media Management</li>
        <li className="my-2">Contact</li>
      </ul>
    </div>
  );
}

export default Sidebar;