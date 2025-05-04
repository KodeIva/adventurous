import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center w-full h-auto p-3 bg-teal-200" >
      <div className='flex'>
        <ul className="flex flex-col items-start lg:flex-row w-full h-auto md:justify-center text-center p-9 " >
          <li className='gb-rink-700 text-base xl:text-xl mx-4 text-blue-500 bold tracking-wide hover:text-blue-800 hover:-translate-y-2 transition ease-in-out duration-700'>
            <Link to="">About</Link>
          </li>
          <li className='gb-rink-700 text-base xl:text-xl mx-4 text-blue-500 bold tracking-wide hover:text-blue-800 hover:-translate-y-2 transition ease-in-out duration-700'>
            <Link to="">Partnership</Link>
          </li>
          <li className='gb-rink-700 text-base xl:text-xl mx-4 text-blue-500 bold tracking-wide hover:text-blue-800 hover:-translate-y-2 transition ease-in-out duration-700'>
            <Link to="/">Careers</Link>
          </li>
          <li className='gb-rink-700 text-base xl:text-xl mx-4 text-blue-500 bold tracking-wide hover:text-blue-800 hover:-translate-y-2 transition ease-in-out duration-700'>
            <Link to="/">Newsroom</Link>
          </li>
          <li className='gb-rink-700 text-base xl:text-xl mx-4 text-blue-500 bold tracking-wide hover:text-blue-800 hover:-translate-y-2 transition ease-in-out duration-700'>
            <Link to="/">Advertising</Link>
          </li>
        </ul>
        <ul className="flex flex-col items-start lg:flex-row w-full h-auto md:justify-center text-center p-9 " >
          <li className='text-base xl:text-xl mx-4 text-blue-500 bold tracking-wide hover:text-blue-800 hover:-translate-y-2 transition ease-in-out duration-700'>
            <Link to="/">Home</Link>
          </li>
           <li className='text-base xl:text-xl mx-4 text-blue-500 bold tracking-wide hover:text-blue-800 hover:-translate-y-2 transition ease-in-out duration-700'>
            <Link to="/holidays">Holidays</Link>
          </li>
           <li className='items-start text-base xl:text-xl mx-4 text-blue-500 bold tracking-wide  hover:text-blue-800 hover:-translate-y-2 transition duration-700 ease-in-out'>
            <Link to="/city-breaks">Cty Breaks</Link>
          </li>
           <li className='text-base xl:text-xl mx-4 text-blue-500 bold tracking-wide hover:text-blue-800 hover:-translate-y-2 transition ease-in-out duration-700'>
            <Link to="/articles">Articles</Link>
          </li>
         </ul>
         </div>
        <div className='text-blue-600'>
           <span> @ Copyright 
             <span> {new Date().getFullYear()} - </span> 
             <a 
              href="https://kodeiva.netlify.app" 
              target='blank'
              className='font-serif text-lg font-medium tracking-wider hover:text-blue-800  transition-transform ease-in-out duration-700'
             >
             KodeIva
             </a> 
           </span>
          </div>
    </section>
  )
}

export default Footer