import React from 'react';
import InstaLink from './InstaLink';

const Insta: React.FC = () => {
  const imageUrl = "https://img1.wsimg.com/isteam/ip/c76b55f4-c936-438c-b5fb-1fcb832792a4/DSC08872.jpg/:/rs=w:388,h:517,cg:true,m/cr=w:388,h:517";
  const reelUrl = "https://www.instagram.com/p/CptndcvjjBe/";

  return (
    <div className="bg-black h-[573px] flex flex-col justify-center items-center gap-y-6">
      <span className="text-white text-4xl font-normal tracking-wider mt-[-100px]" style={{ fontFamily: 'Adamina, serif', lineHeight: '56px' }}>
        INSTAGRAM
      </span>
      <div className="flex gap-x-12">
        <InstaLink imageUrl={imageUrl} reelUrl={reelUrl} />
        <InstaLink imageUrl={imageUrl} reelUrl={reelUrl} />
        <InstaLink imageUrl={imageUrl} reelUrl={reelUrl} />
        <InstaLink imageUrl={imageUrl} reelUrl={reelUrl} />
      </div>
      <span className="text-gray-400 hover:text-white transition-colors duration-500 cursor-pointer">
        Follow us on Instagram &gt;
      </span>
    </div>
  );
}

export default Insta;
