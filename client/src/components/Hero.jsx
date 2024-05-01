const Hero = () => {
    return (
      <div className="text-center bg-white text-gray-800 h-screen py-36 w-full">
      <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
          <span className="capitalize">
          Your Legacy, Their Future</span>
              <br />
              <span className="uppercase text-green-600">
                  NextHeirs.
                  </span>
                  </h1>
                  <div className="flex justify-center items-center space-x-2">
                  <button type='button'
              className='inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 '>Add Wills
              </button>
              <button type='button'
              className='inline-block px-6 py-2.5 bg-green-600 border border-green-600  text-green-600 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 bg-transparent hover:text-white'>Add Assets
              </button>
                  </div>
  
                  <div className="flex
                  justify-center items-center mt-10 flex-col
                  md:flex-row">
                      <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
                          <span  className="text-lg font-bold text-green-900 leading-5">{0}</span>
                          <span>Wills</span>
                          
                      </div>
                      <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
                          <span  className="text-lg font-bold text-green-900 leading-5">{0}</span>
                          <span>Assets</span>
                          
                      </div>
                      <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
                          <span  className="text-lg font-bold text-green-900 leading-5">{0} ETH</span>
                          <span>Donated</span>
                          
                      </div>
                  </div>
                  </div>
    )
  }
  
  export default Hero