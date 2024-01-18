import React from 'react';

const VideoBG: React.FC = () => {
  return (
    <div className="relative">
      <video 
        autoPlay 
        loop 
        muted 
        className="w-full" 
        src="path_to_your_video.mp4"
      >
        Your browser does not support the video tag.
      </video>

      <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Projects
      </button>
    </div>
  );
}

export default VideoBG;