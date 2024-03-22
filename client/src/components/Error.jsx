import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div className='bg-black text-white  min-h-screen flex flex-col justify-center items-center font-semibold '>
     <h2>Something Went Wrong...</h2>
     <Link to={-1}>
        <div className='p-5 bg-green-700 text-white mt-4 rounded-md hover:bg-green-800 border-cyan-400 '>
             Go Back to Home Page
        </div>
     </Link>
     
    </div>
  )
}

export default Error