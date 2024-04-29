import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="flex flex-col w-full h-auto p-3 bg-teal-200" >
     <ul className="flex flex-row w-full h-auto justify-center text-center p-9 " >
          <li className='gb-rink-700 text-base xl:text-xl mx-4 text-blue-500 bold tracking-wide hover:text-blue-800 hover:font-semibold hover:underline hover:leading-4 hover:decoration-2 transition duration-700 ease-in-out'>
            <Link to="/">Home</Link>
          </li>
           <li className='gb-rink-700 text-base xl:text-xl mx-4 text-blue-500 bold tracking-wide hover:text-blue-800 hover:font-semibold hover:underline hover:leading-4 hover:decoration-2 transition duration-700 ease-in-out'>
            <Link to="/holidays">Holidays</Link>
          </li>
           <li className='text-base xl:text-xl mx-4 text-blue-500 bold tracking-wide  hover:text-blue-800 hover:font-semibold hover:underline hover:leading-4 hover:decoration-2 transition duration-700 ease-in-out'>
            <Link to="/city-breaks">City Breaks</Link>
          </li>
           <li className='text-base xl:text-xl mx-4 text-blue-500 bold tracking-wide hover:text-blue-800 hover:font-semibold hover:underline hover:leading-4 hover:decoration-2 transition duration-700 ease-in-out'>
            <Link to="/articles">Articles</Link>
          </li>
        </ul>
        <div>
          <span>
            {new Date().getFullYear()} 
            <a href="https://kodeiva.netlify.app" target='blank'>@KodeIva</a> 
          </span>
          </div>
    </div>
  )
}

export default Footer