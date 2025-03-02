import React from 'react';

const AvatarInterface = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="w-11/12 h-5/6 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* This container handles the cropping */}
        <div className="relative w-full h-full overflow-hidden">
          <iframe 
            src="http://localhost/avatar" 
            className="w-full h-full border-0"
            style={{
              position: 'absolute',
              left: '-80px', /* Crop more from the left */
              top: '0',
              width: 'calc(100% + 80px)', /* Compensate for left offset */
              height: '100%',
            }}
            title="DASION Application"
            scrolling="no" /* Prevents iframe scrolling */
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          />
        </div>
      </div>
    </div>
  );
};

export default AvatarInterface;