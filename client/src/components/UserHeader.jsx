import React, { useState } from 'react';
import { GrInherit } from 'react-icons/gr';
import ConnectWallet from './ConnectWallet';

const Header = () => {
  // State to manage the visibility of the user menu
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // Function to toggle the user menu
  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <header className='flex justify-between items-center p-5 bg-gradient-to-r from-black to-gray-950 text-white hover:text-gray-700 shadow-lg fixed top-0 left-0 right-0'>
      <div className='flex justify-start items-center text-xl text-white space-x-1' role="button" tabIndex="0">
        <span>NextHeirs</span>
        <GrInherit />
      </div>

      <div className='flex space-x-2 justify-center'>
        <ConnectWallet />
        
        {/* User menu */}
        <div className="relative">
          <button onClick={toggleUserMenu} className="rounded-full overflow-hidden focus:outline-none">
            {/* Placeholder icon or profile picture */}
            <img src="https://via.placeholder.com/40" alt="Profile" className="w-8 h-8" />
          </button>
          {/* User dropdown menu */}
          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <ul>
                <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Your Profile</li>
                <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Settings</li>
                <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Log Out</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
