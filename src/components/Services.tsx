import React from 'react';
import pic1 from '../assets/1.jpg'
import pic2 from '../assets/2.jpg'
import pic3 from '../assets/3.jpg'

const ServiceCard: React.FC<{ title: string; image: string; linkText: string; href: string }> = ({ title, image, linkText, href }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="mt-4 mb-2 font-bold text-lg">{title}</h2>
      <img
        src={image}
        alt={title}
        style={{ width: '325px', height: '480px' }}
        className="object-cover mb-4"
      />
      <a
        href={href}
        className="group px-6 py-2 inline-flex items-center font-medium text-black bg-white"
      >
        <span
          className="underline"
          style={{ textDecorationThickness: '2px', textUnderlineOffset: '10px' }}
        >
          {linkText}
        </span>
        <span className="inline-block transition-transform duration-500 transform group-hover:translate-x-2 ml-2">&gt;</span>
      </a>
    </div>
  );
};



const Services: React.FC = () => {
  return (
    <div className="bg-white h-[795px] flex flex-col items-center justify-center p-8">
      <div className="flex justify-center gap-x-4">
        <ServiceCard title="Real Estate" image={pic1} linkText="VIEW PROJECTS" href='sample' />
        <ServiceCard title="Weddings/Engagements" image={pic2} linkText="VIEW PROJECTS" href='sample' />
        <ServiceCard title="Sports + Fitness" image={pic3} linkText="VIEW PROJECTS" href='sample' />
        <ServiceCard title="Corporate" image={pic3} linkText="VIEW PROJECTS" href='sample' />
      </div>
    </div>
  );
}

export default Services;