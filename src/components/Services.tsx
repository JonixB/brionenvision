import React from 'react';
import pic1 from '../assets/1.jpg'
import pic2 from '../assets/2.jpg'
import pic3 from '../assets/3.jpg'

const ServiceCard: React.FC<{ title: string; image: string; buttonText: string }> = ({ title, image, buttonText }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="mt-4 mb-2 font-bold text-lg">{title}</h2>
      <img
        src={image}
        alt={title}
        style={{ width: '378px', height: '504px' }}
        className="object-cover mb-4"
      />
      <button className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-50">
        {buttonText}
      </button>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="bg-white h-[740px] p-8">
      <div className="flex justify-center gap-x-12">
        <ServiceCard title="PHOTOGRAPHY" image={pic1} buttonText="VIEW PROJECTS" />
        <ServiceCard title="VIDEOGRAPHY" image={pic2} buttonText="VIEW PROJECTS" />
        <ServiceCard title="SOCIAL MEDIA MANAGEMENT" image={pic3} buttonText="FIND OUT MORE" />
      </div>
    </div>
  );
}

export default Services;