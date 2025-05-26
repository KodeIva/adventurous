import React from 'react'
import { Link } from 'react-router-dom'
import { FaSquareFacebook, FaLinkedin, FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { GiEarthAmerica } from 'react-icons/gi';


const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center w-full h-auto p-3 bg-indigo-900" >
       <div className='flex py-3 border-b-2 items-center justify-end text-white w-full h-auto'>
          <h1>Follow us </h1>
          <ul className='flex flex-row'>
            <li><a href="https://www.facebook.com/"><FaSquareFacebook className='m-2 lg:mx-2 w-6 h-6 lg:w-8 lg:h-8 hover:scale-110 hover:text-blue-300 duration-700' /></a></li>
            <li><a href="https://www.instagram.com/"><FaInstagramSquare className='m-2 lg:mx-2 w-6 h-6 lg:w-8 lg:h-8 hover:scale-110 hover:text-blue-300 duration-700' /></a></li>
            <li><a href="https://www.tiktok.com/"><AiFillTikTok className='m-2 lg:mx-2 w-6 h-6 lg:w-8 lg:h-8 hover:scale-110 hover:text-blue-300 duration-700' /></a></li>
            <li><a href="https://www.youtube.com/"><FaYoutubeSquare className='m-2 lg:mx-2 w-6 h-6 lg:w-8 lg:h-8 hover:scale-110 hover:text-blue-300 duration-700' /></a></li>
            <li><a href="https://www.linkedin.com/"><FaLinkedin className='m-2 lg:mx-2 w-6 h-6 lg:w-8 lg:h-8 hover:scale-110 hover:text-blue-300 duration-700' /></a></li>
            <li><a href="https://www.whatsapp.com/"><FaSquareWhatsapp className='m-2 lg:mx-2 w-6 h-6 lg:w-8 lg:h-8 hover:scale-110 hover:text-blue-300 duration-700' /></a></li>
          </ul>
          <hr className='bg-slate-400 h-2'/>
         </div>
      <div className='flex'>
        <ul className="flex flex-col items-start lg:flex-row w-full h-auto md:justify-center text-center p-9 " >
          <li className='xl:text-xl mb-1 mx-4 text-white bold tracking-wide hover:text-blue-200 hover:-translate-x-2 transition ease-in-out duration-700'>
            <Link to="">About</Link>
          </li>
          <li className='xl:text-xl mb-1 mx-4 text-white bold tracking-wide hover:text-blue-200 hover:-translate-x-2 transition ease-in-out duration-700'>
            <Link to="">Partnership</Link>
          </li>
          <li className='xl:text-xl mb-1 mx-4 text-white bold tracking-wide hover:text-blue-200 hover:-translate-x-2 transition ease-in-out duration-700'>
            <Link to="/">Careers</Link>
          </li>
          <li className='xl:text-xl mb-1 mx-4 text-white bold tracking-wide hover:text-blue-200 hover:-translate-x-2 transition ease-in-out duration-700'>
            <Link to="/">Newsroom</Link>
          </li>
          <li className='xl:text-xl mb-1 mx-4 text-white bold tracking-wide hover:text-blue-200 hover:-translate-x-2 transition ease-in-out duration-700'>
            <Link to="/">Advertising</Link>
          </li>
        </ul>
        <ul className="flex flex-col items-start lg:flex-row w-full h-auto md:justify-center text-center p-9 " >
          <li className='xl:text-xl mb-1 mx-4 text-white bold tracking-wide hover:text-blue-200 hover:-translate-x-2 transition ease-in-out duration-700'>
            <Link to="/">Home</Link>
          </li>
           <li className='xl:text-xl mb-1 mx-4 text-white bold tracking-wide hover:text-blue-200 hover:-translate-x-2 transition ease-in-out duration-700'>
            <Link to="/holidays">Holidays</Link>
          </li>
           <li className='xl:text-xl mb-1 mx-4 text-white bold tracking-wide  hover:text-blue-200 hover:-translate-x-2 transition duration-700 ease-in-out'>
            <Link to="/city-breaks">Cty Breaks</Link>
          </li>
           <li className='xl:text-xl mb-1 mx-4 text-white bold tracking-wide hover:text-blue-200 hover:-translate-x-2 transition ease-in-out duration-700'>
            <Link to="/articles">Articles</Link>
          </li>
         </ul>
         </div>

        <div className='flex flex-col md:flex-col md:justify-center lg:flex-row w-full lg:justify-between lg:items-center'>
           <div className='flex self-center'>
             <Link to="/">
               <span className='flex text-lg xl:text-lg py-2'>
                 <span className='text-blue-100'>ADVENTUR</span>  
                 <span className='text-blue-300'><GiEarthAmerica /></span> 
                 <span className='text-blue-100'>US</span>
              </span>
             </Link>
           </div>
           <div className='text-white'>
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
         </div>   
    </section>
  )
}

export default Footer