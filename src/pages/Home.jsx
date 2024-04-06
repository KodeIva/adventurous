import React from 'react'
//import Hero from '../components/Hero'
import '../styles/Home.css'
import { LuSearch } from "react-icons/lu";

const Home = () => {
  return (
    <div className='home absolute justify-center text-center top-0 text-white'>
      <h1 className='text-2xl m-1 '>First Class Travel</h1>
      <h2 className='text-xl mb-2'>Top 1 Locations Worldwide</h2>
      <form className='flex justify-center text-center'>
        <div className='flex flex-row  bg-white shadow-md shadow-gray-600  rounded-2xl '>
          <input 
            type="text" 
            placeholder='Search Destinations...' 
            className='w-[300px] md:w-[400px] p-2 '
             
          />
          <button className='flex justify-center text-center p-2 bg-white'><LuSearch className='text-2xl text-teal-600' /></button>
        </div>
      </form>
      
    </div>
  )
}

export default Home