import React, {useState,useEffect} from 'react';
import UserHeader from './UserHeader';
import { Link } from 'react-router-dom';

const formatNumber = (num) => {
  if (num >= 1000) {
    const kValue = Math.floor(num / 1000);
    return `${kValue}k+`;
  }
  return num;
};

const User = () => {
  const [wills, setWills] = useState(0);
  const [assets, setAssets] = useState(0);
  const [donated, setDonated] = useState(0);

  useEffect(() => {
    const willsInterval = setInterval(() =>{
      setWills((prev)=>prev+1);
    },10);

    const assetsInterval = setInterval(() =>{
      setAssets((prev)=>prev+1);
    },10);

    const donatedInterval = setInterval(() =>{
      setDonated((prev)=>prev+1);
    },10);

    return () => {
      clearInterval(willsInterval);
      clearInterval(assetsInterval);
      clearInterval(donatedInterval);
    }
  },[]);

  return (
    <div>
      <UserHeader />
      <div className="text-center bg-gradient-to-r from-black to-gray-950 text-white h-screen py-36 w-full">
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
          <span className="capitalize">Your Legacy, Their Future</span>
          <br />
          <span className="uppercase text-green-600">NextHeirs.</span>
        </h1>
        <div className="flex justify-center items-center space-x-2">
          <Link to='/login/user/wills' type='button' className='inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 '>Add Wills</Link>
          <Link to='/login/user/assets' type='button' className='inline-block px-6 py-2.5 bg-green-600 border border-green-600  text-green-600 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 bg-transparent hover:text-white'>Add Assets</Link>
        </div>

        <div className="flex justify-center items-center mt-10 flex-col md:flex-row">
          <div className="flex flex-col justify-center items-center h-20 border border-gray-900 shadow-md w-full">
            <span className="text-lg font-bold text-green-500 leading-5">{formatNumber(wills)}</span>
            <span>Wills</span>
          </div>
          <div className="flex flex-col justify-center items-center h-20 border border-gray-900 shadow-md w-full">
            <span className="text-lg font-bold text-green-500 leading-5">{formatNumber(assets)}</span>
            <span>Assets</span>
          </div>
          <div className="flex flex-col justify-center items-center h-20 border border-gray-900 shadow-md w-full">
            <span className="text-lg font-bold text-green-500 leading-5">{formatNumber(donated)} ETH</span>
            <span>Donated</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
