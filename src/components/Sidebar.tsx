import React from 'react';
import whitelogo from '../assets/black-logo.png';

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen bg-black py-24" style={{ width: '320px' }}>
      <img src={whitelogo} alt="Logo" className="logo-class" />
    </div>
  );
}

export default Sidebar;