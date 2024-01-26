import React from 'react';

type InstaLinkProps = {
  imageUrl: string;
  reelUrl: string;
};

const InstaLink: React.FC<InstaLinkProps> = ({ imageUrl, reelUrl }) => {
  return (
    <a href={reelUrl} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt="Instagram Reel" style={{ width: '378px', height: '504px' }} />
    </a>
  );
};

export default InstaLink;
