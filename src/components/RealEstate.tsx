import React from 'react';
import portfolioImage from '../assets/1.jpg';
import packagesImage from '../assets/1.jpg';

const RealEstate: React.FC = () => {
  return (
    <div className="bg-white py-12 px-4 h-[638px] flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center text-center justify-center">
          <img src={portfolioImage} alt="Portfolio" className="mb-4 rounded-lg shadow-lg" />
          <h3 className="text-xl font-semibold mb-2">PORTFOLIO</h3>
          <p className="mb-4">VIEW OUR PHOTO PORTFOLIO</p>
          <a
            href="#portfolio"
            className="group px-6 py-2 inline-flex items-center font-medium text-black bg-white"
          >
            <span
              className="underline"
              style={{ textDecorationThickness: '2px', textUnderlineOffset: '10px' }}
            >
              CLICK HERE
            </span>
            <span className="inline-block transition-transform duration-500 transform group-hover:translate-x-2 ml-2">&gt;</span>
          </a>
        </div>

        <div className="flex flex-col items-center text-center justify-center">
          <img src={packagesImage} alt="Packages" className="mb-4 rounded-lg shadow-lg" />
          <h3 className="text-xl font-semibold mb-2">PACKAGES</h3>
          <p className="mb-4">FIND PRICES FOR PHOTOGRAPHY SESSIONS</p>
          <a
            href="#packages"
            className="group px-6 py-2 inline-flex items-center font-medium text-black bg-white"
          >
            <span
              className="underline"
              style={{ textDecorationThickness: '2px', textUnderlineOffset: '10px' }}
            >
              CLICK HERE
            </span>
            <span className="inline-block transition-transform duration-500 transform group-hover:translate-x-2 ml-2">&gt;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default RealEstate;
