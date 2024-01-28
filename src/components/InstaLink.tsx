import React from 'react';
import { FiInstagram } from 'react-icons/fi';

type InstaLinkProps = {
  imageUrl: string;
  reelUrl: string;
};

const InstaLink: React.FC<InstaLinkProps> = ({ imageUrl, reelUrl }) => {
  return (
    <a href={reelUrl} target="_blank" rel="noopener noreferrer" className="relative group">
      <img src={imageUrl} alt="Instagram Reel" className="transition duration-300 ease-in-out group-hover:opacity-50" style={{ width: '272px', height: '272px' }} />
      <FiInstagram className="absolute bottom-2 right-2 w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out" />
    </a>
  );
};

export default InstaLink;
