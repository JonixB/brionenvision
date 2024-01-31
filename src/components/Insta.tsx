import React from 'react';
import InstaLink from './InstaLink';

const Insta: React.FC = () => {
  const imageUrl = "https://img1.wsimg.com/isteam/ip/c76b55f4-c936-438c-b5fb-1fcb832792a4/DSC08872.jpg/:/rs=w:388,h:517,cg:true,m/cr=w:388,h:517";
  const reelUrl = "https://www.instagram.com/p/CptndcvjjBe/";

  return (
    <div className="bg-black h-[573px] flex flex-col justify-center items-center gap-y-6">
      <span className="text-white text-4xl font-normal tracking-wider mt-[-40px]" style={{ fontFamily: 'Adamina, serif', lineHeight: '56px', letterSpacing: '0.2em' }}>
        INSTAGRAM
      </span>
      <div className="flex gap-x-12">
        <InstaLink imageUrl={imageUrl} reelUrl={reelUrl} />
        <InstaLink imageUrl={imageUrl} reelUrl={reelUrl} />
        <InstaLink imageUrl={imageUrl} reelUrl={reelUrl} />
        <InstaLink imageUrl={imageUrl} reelUrl={reelUrl} />
      </div>
      <a href="https://www.instagram.com/brionenvision/" target="_blank" rel="noopener noreferrer" className="mt-10 text-gray-400 hover:text-white transition-colors duration-500 cursor-pointer">
        Follow us on Instagram &gt;
      </a>
    </div>
  );
}

export default Insta;
