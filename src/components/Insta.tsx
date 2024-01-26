import React from 'react';
import InstaLink from './InstaLink';

const Insta: React.FC = () => {
  const imageUrl = "https://img1.wsimg.com/isteam/ip/c76b55f4-c936-438c-b5fb-1fcb832792a4/DSC08872.jpg/:/rs=w:388,h:517,cg:true,m/cr=w:388,h:517";
  const reelUrl = "https://www.instagram.com/p/CptndcvjjBe/";

  return (
    <div className="bg-black h-[573px] flex justify-center items-center gap-x-12">
      <InstaLink imageUrl={imageUrl} reelUrl={reelUrl} />
      <InstaLink imageUrl={imageUrl} reelUrl={reelUrl} />
      <InstaLink imageUrl={imageUrl} reelUrl={reelUrl} />
      <InstaLink imageUrl={imageUrl} reelUrl={reelUrl} />
    </div>
  );
}

export default Insta;
