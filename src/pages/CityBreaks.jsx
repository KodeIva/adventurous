import React, { useState } from 'react'
import { IoLocationOutline, IoPersonOutline } from "react-icons/io5";
import { BsCalendar4Range } from "react-icons/bs";

const CityBreaks = () => {
  const [isOpen, setIsOpen] = useState()
  return (
    <section className='w-full h-auto'>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-2xl my-5 lg:text-3xl text-slate-700 font-semibold'>Search City Bbreaks Packages</h2>
        <form action="" className='flex flex-col lg:flex-row'>
          <label htmlFor="" className='flex justify-center items-center mt-3 w-80 lg:w-56 xl:w-64  h-12 m-1 border-2 rounded-md border-slate-600'>
            <IoLocationOutline className='text-3xl' /> 
            <input type="text" className='h-9 bg-transparent outline-none w-72' placeholder='Leaving from' />   
          </label>
          <label htmlFor="" className='flex justify-center items-center mt-3 w-80 lg:w-56 xl:w-64 h-12 m-1 border-2 rounded-md border-slate-600'>
            <IoLocationOutline className='text-3xl' /> 
            <input type="text" className='h-9 bg-transparent outline-none w-72' placeholder='Going to' />   
          </label>
          <label htmlFor="" className='flex justify-center items-center mt-3 w-80 lg:w-56 xl:w-64 h-12 m-1 border-2 rounded-md border-slate-600'>
            <BsCalendar4Range className='text-2xl pr-1' /> 
            <input type="calendar" className='h-9 bg-transparent outline-none w-72' placeholder='Date' />   
          </label>
          <label htmlFor="" className='flex justify-center items-center mt-3 w-80 lg:w-56 xl:w-64 h-12 m-1 border-2 rounded-md border-slate-600'>
            <IoPersonOutline className='text-2xl pr-1' /> 
            <input 
              type="text" 
              className='h-9 bg-transparent outline-none w-72' placeholder='2 travelers, 1 room'
              onClick={() => setIsOpen(!isOpen)}
           />   
          
          </label>
          
          <button 
            type='button' 
            className='bg-blue-600 text-white mt-3 mb-11 m-1 w-80 lg:w-32 h-12 rounded-3xl hover:bg-blue-800 duration-700'
          >
            Search
          </button>
          {!isOpen && <div className='w-96 h-96 bg-orange-200'></div>}
        </form>
     </div>
    </section>
  )
}

export default CityBreaks