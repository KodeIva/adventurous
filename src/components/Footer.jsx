import React from 'react'
import { Link } from 'react-router-dom'
import { FaSquareFacebook, FaLinkedin, FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";

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
         <div className='bg-green-800 flex py-3 items-center justify-center text-white w-full h-auto'>
          <ul className='flex flex-row'>
            <li ><a href=""><FaSquareFacebook className='m-2 lg:mx-5 w-6 h-6 lg:w-8 lg:h-8' /></a></li>
            <li><a href=""><FaInstagramSquare className='m-2 lg:mx-5 w-6 h-6 lg:w-8 lg:h-8' /></a></li>
            <li><a href=""><AiFillTikTok className='m-2 lg:mx-5 w-6 h-6 lg:w-8 lg:h-8' /></a></li>
            <li><a href=""><FaYoutubeSquare className='m-2 lg:mx-5 w-6 h-6 lg:w-8 lg:h-8' /></a></li>
            <li><a href=""><FaLinkedin className='m-2 lg:mx-5 w-6 h-6 lg:w-8 lg:h-8' /></a></li>
            <li><a href=""><FaSquareWhatsapp className='m-2 lg:mx-5 w-6 h-6 lg:w-8 lg:h-8' /></a></li>
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