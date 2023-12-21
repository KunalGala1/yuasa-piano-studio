'use client';
import React, { useEffect, useState } from 'react';

const Loading: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the visibility of the overlay to avoid a flash for quick loads
    const timeoutId = setTimeout(() => setIsVisible(true), 300); // Adjust delay as needed

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-opacity-60 z-50 bg-slate-300 flex justify-center items-center transition-opacity duration-500 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900'></div>
    </div>
  );
};

export default Loading;
