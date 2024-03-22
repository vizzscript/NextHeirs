import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Connect from '../components/Connect';
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className="flex flex-col items-center justify-center h-full w-full space-x-2 bg-gradient-to-r from-black to-gray-950">
        <div className="p-4 m-4">
          <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-r from-green-900 via-green-400 to-green-300 bg-clip-text text-transparent text-center">Welcome to NextHeirs!!</h1>
          <p className="text-gray-400 py-4 max-w-4xl text-center">NextHeirs is an Inheritance Management System powered by blockchain technology. Manage your wills, assets, and beneficiaries securely and transparently.</p>
        </div>
        <div className="space-x-2 flex
                justify-center items-center mt-10 flex-col
                md:flex-row">

          <Link to="/registration" className="flex items-center justify-center h-16 w-56 px-6 py-2.5 bg-green-700  text-white font-medium text-xl leading-tight uppercase rounded-full shadow-md hover:bg-transparent hover:text-green-600 hover:border border-green-600">Register</Link>
          <br />
          <Link to="/login" className="flex items-center justify-center h-16 w-56 px-4 py-2.5 border border-green-600  text-green-600 font-medium text-xl leading-tight uppercase rounded-full shadow-md hover:bg-green-700 bg-transparent hover:text-white">Login</Link>
        </div>
      </div>
      <Connect/>
      <Footer/>
    </div>
  );
};


export default Home;




