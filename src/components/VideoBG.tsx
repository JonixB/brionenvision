import React from 'react';
import Video from '../assets/Engagement.m4v';

const VideoBG: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={Video}
      >
        Your browser does not support the video tag.
      </video>

      <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-white text-white font-semibold px-8 py-4 hover:bg-white hover:text-black">
        VIEW PROJECTS
      </button>

    </div >
  );
}

export default VideoBG;