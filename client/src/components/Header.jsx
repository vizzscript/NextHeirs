import React from 'react'
import {GrInherit} from 'react-icons/gr'
const Header = () => {
  return (
    <header className='flex justify-between items-center p-5 bg-gradient-to-r from-black  to-gray-950 text-white
    hover:text-gray-700 shadow-lg fixed top-0 left-0 right-0'>
        <a href="#" className='flex justify-start items-center text-xl text-white space-x-1'>
            <span>NextHeirs</span>
            <GrInherit/>
        </a>

        <div className='flex space-x-2 justify-center'>
            {/* <button type='button'
            className='inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 '>Connect Wallet
            </button> */}
            {/* <ConnectWallet/> */}
        </div>
        </header>
  )
}
//            
export default Header