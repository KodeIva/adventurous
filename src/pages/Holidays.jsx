import React from 'react'
import {Link} from 'react-router-dom'
import {SiYourtraveldottv} from 'react-icons/si'
import Carribean from '../assets/caribbean.jpg'
import Tahiti from '../assets/tahiti.jpg'
import Maldives from '../assets/maldives.jpg'
import Thailand from '../assets/thailand.jpg'
import Cyprus from '../assets/cyprus.jpg'


const Holidays = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
     <h1 className='text-3xl my-2  text-teal-600 tracking-wide  '>All Inclusive Resorts</h1>
     <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className='col-span-2 md:col-span-3 row-span-2 w-full hover:contrast-150 transition-all duration-500' src={Carribean} alt={Carribean} />
        <img className='h-[100%] hover:contrast-150 transition-all duration-500' src={Tahiti} alt={Tahiti} />
        <img className='h-[100%] hover:contrast-150 transition-all duration-500' src={Maldives} alt={Maldives} />
        <img className='h-[100%] hover:contrast-150 transition-all duration-500' src={Thailand} alt={Thailand} />
        <img className='h-[100%] hover:contrast-150 transition-all duration-500' src={Cyprus} alt={Cyprus} />
     </div>
    </div>
  )
}

export default Holidays