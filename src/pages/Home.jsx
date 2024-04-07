import React from 'react'
import { useState } from 'react'
//import Hero from '../components/Hero'
import '../styles/Home.css'
import { LuSearch } from "react-icons/lu";

const Home = () => {
  const [inputValue,setInputValue] = useState('')

  function handleSubmit(e) {
   e.preventDefault()
   console.log(inputValue);
   let link = `https://en.wikipedia.org/wiki/${inputValue}`
   console.log(link);
  }

  return (
    <div className='home absolute justify-center text-center top-0 text-white'>
      <h1 className='text-2xl m-1 '>First Class Travel</h1>
      <h2 className='text-xl mb-2'>Top Locations Worldwide</h2>
      <form className='flex justify-center text-center'>
        <div className='flex flex-row shadow-md shadow-gray-600  rounded-2xl '>
          <input 
            type="text" 
            placeholder='Search Destinations...' 
            className='w-[300px] md:w-[400px] p-2 outline-none rounded-tl-md rounded-bl-md bg-gray-50/90 text-slate-700'  
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button 
            type='submit'
            className='flex justify-center text-center text-slate-800 p-2 px-3 bg-white rounded-br-md rounded-tr-md'
            onClick={(e) => handleSubmit(e)}
            >
            <LuSearch className='text-2xl text-teal-600 hover:scale-125 transition-all duration-500  ' onClick={(e) => handleSubmit(e)} />
          </button>
        </div>
      </form>
      
    </div>
  )
}

export default Home