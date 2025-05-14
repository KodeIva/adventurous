import React, { useState } from 'react'
import { IoLocationOutline, IoPersonOutline } from "react-icons/io5";
import { BsCalendar4Range } from "react-icons/bs";
import { TbXboxX } from "react-icons/tb";

const CityBreaks = () => {
  const [isOpen, setIsOpen] = useState()
  const [adultCount, setAdultCount] = useState(0)
  const [childrenCount, setChildrenCount] = useState(0)

  //children minus disabled
  const isChildrenMinusDisabled = childrenCount <= 0
  const minusDisabled = () => {
    if(!isChildrenMinusDisabled) {
      setChildrenCount(childrenCount-1)
    }
  }

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
          {
            isOpen && 
            <div className='absolute p-3 z-50 w-[100%] h-1/2 md:w-96 md:h-96 bg-orange-200 '>
               <div className='flex '>
                <button onClick={() => setIsOpen(isOpen)}>
                  <TbXboxX className='text-3xl'/>
                </button>
                <span className='text-2xl'>Travellers</span>
               </div>
             
                <div className='my-5 py-2 w-[100%]'>
                  <div className='flex items-center w-full h-[50px] justify-between'>
                    <p className='text-xl'>Adults</p>
                    <div className='flex justify-between w-[30%]'>
                      <div 
                        onClick={() => setAdultCount(adultCount - 1)}
                        className=' flex justify-center items-center border-slate-700 text-3xl px-3 w-8 h-8 border-2 rounded-full'>-</div>
                      <div className=' flex justify-center items-center text-2xl font-semibold w-15 h-8 mx-4'>{adultCount}</div>
                      <div 
                        onClick={() => setAdultCount(adultCount + 1)}
                        className=' flex justify-center items-center border-slate-700 text-3xl px-3 w-8 h-8 border-2 rounded-full'>+</div>
                    </div>
                  </div>
                </div>

                <div className='my-5 py-2 w-[100%]'>
                  <div className='flex  items-center w-full h-[50px] justify-between'>
                    <div>
                      <p className='text-xl'>Children</p>
                      <p className='text-md'>Ages 0 to 17</p>
                    </div>
                    
                    <div className='flex justify-between w-[30%]'>
                      <div 
                        onClick={minusDisabled}
                        className={`flex justify-center items-center border-slate-700 text-3xl px-3 w-8 h-8 border-2 rounded-full  ${isChildrenMinusDisabled ? 'border-gray-400 cursor-not-allowed' : 'cursor-pointer'}`} >-</div>
                      <div className=' flex justify-center items-center text-2xl font-semibold w-15 h-8 mx-4'>{childrenCount}</div>
                      <div 
                        onClick={() => setChildrenCount(childrenCount + 1)}
                        className=' flex justify-center items-center border-slate-700 text-3xl px-3 w-8 h-8 border-2 rounded-full'>
                          +
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          }
          </label>
          
          <button 
            type='button' 
            className='bg-blue-600 text-white mt-3 mb-11 m-1 w-80 lg:w-32 h-12 rounded-3xl hover:bg-blue-800 duration-700'
          >
            Search
          </button>
     
        </form>
     </div>
    </section>
  )
}

export default CityBreaks