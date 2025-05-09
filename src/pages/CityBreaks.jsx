import React from 'react'
import { IoLocationOutline, IoPersonOutline } from "react-icons/io5";
import { BsCalendar4Range } from "react-icons/bs";

const CityBreaks = () => {
  return (
    <section className='w-full h-auto lg:bg-yellow-300 xl:bg-orange-500'>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-2xl lg:text-3xl text-slate-700 font-medium'>Search City Bbreaks Packages</h2>
        <form action="" className='flex flex-col lg:flex-row'>
          <label htmlFor="" className='flex justify-center items-center w-80 lg:w-56 xl:w-64  h-12 m-1 border-2 rounded-md border-slate-600'>
            <IoLocationOutline className='text-3xl' /> 
            <input type="text" className='h-9 w-72' placeholder='Leaving from' />   
          </label>
          <label htmlFor="" className='flex justify-center items-center w-80 lg:w-56 xl:w-64 h-12 m-1 border-2 rounded-md border-slate-600'>
            <IoLocationOutline className='text-3xl' /> 
            <input type="text" className='h-9 w-72' placeholder='Going to' />   
          </label>
          <label htmlFor="" className='flex justify-center items-center w-80 lg:w-56 xl:w-64 h-12 m-1 border-2 rounded-md border-slate-600'>
            <BsCalendar4Range className='text-2xl pr-1' /> 
            <input type="calendar" className='h-9 w-72' placeholder='Date' />   
          </label>
      <label htmlFor="" className='flex justify-center items-center w-80 lg:w-56 xl:w-64 h-12 m-1 border-2 rounded-md border-slate-600'>
        <IoPersonOutline className='text-2xl pr-1' /> 
        <input type="text" className='h-9 w-72' placeholder='2 travelers, 1 room' />   
      </label>
      <button type='button' className='bg-blue-600 text-white m-1 w-80 lg:w-32 h-12 rounded-3xl hover:bg-blue-800 duration-700'>Search</button>
     </form>
     </div>
    </section>
  )
}

export default CityBreaks