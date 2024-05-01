import React, { useState } from 'react';

// Helper function to format large numbers
const formatCount = (count) => {
  if (count >= 1000) {
    return `${Math.floor(count / 1000)}k+`; // Show 1k+ when >= 1000
  }
  return count;
};

const Hero = () => {
  // State variables for the counters
  const [willsCount, setWillsCount] = useState(0);
  const [assetsCount, setAssetsCount] = useState(0);
  const [donatedCount, setDonatedCount] = useState(0);

  // Increment functions
  const incrementWills = () => setWillsCount(willsCount + 1);
  const incrementAssets = () => setAssetsCount(assetsCount + 1);
  const incrementDonated = () => setDonatedCount(donatedCount + 1); // Increment by 1 ETH for simplicity

  return (
    <div className="text-center bg-white text-gray-800 h-screen py-36 w-full">
      <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
        <span className="capitalize">Your Legacy, Their Future</span>
        <br />
        <span className="uppercase text-green-600">NextHeirs.</span>
      </h1>
      <p className="text-gray-400 py-4 max-w-4xl text-center">
        NextHeirs is an Inheritance Management System powered by blockchain technology. Manage your wills, assets, and beneficiaries securely and transparently.
      </p>
      <div className="flex justify-center items-center space-x-2">
        <button
          type="button"
          onClick={incrementWills} // Event handler to increment wills count
          className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700"
        >
          Add Wills
        </button>
        <button
          type="button"
          onClick={incrementAssets} // Event handler to increment assets count
          className="inline-block px-6 py-2.5 bg-green-600 border border-green-600 text-green-600 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 bg-transparent hover:text-white"
        >
          Add Assets
        </button>
      </div>

      <div className="flex justify-center items-center mt-10 flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
          <span className="text-lg font-bold text-green-900 leading-5">{formatCount(willsCount)}</span> {/* Use the formatted count */}
          <span>Wills</span>
        </div>
        <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
          <span className="text-lg font-bold text-green-900 leading-5">{formatCount(assetsCount)}</span> {/* Use the formatted count */}
          <span>Assets</span>
        </div>
        <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
          <span className="text-lg font-bold text-green-900 leading-5">{formatCount(donatedCount)} ETH</span> {/* Use the formatted count */}
          <span>Donated</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
