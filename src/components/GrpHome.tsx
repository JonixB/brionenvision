import React from 'react';
import VideoBG from './VideoBG';
import Services from './Services';
import Insta from './Insta';
import Contact from './Contact';

const GrpHome: React.FC = () => {
  return (
    <div>
      <VideoBG />
      <Services />
      <Insta />
      <Contact />
    </div>
  );
};

export default GrpHome;
