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
     <h1>All Inclusive Resorts</h1>
     <div className='flex flex-col md:flex-row w-[100%] text-center'>
      <div className='w-[90%]  bg-orange-500 m-2'>
        <img className='m-1 md:w-[50%]' src={Carribean} alt="" />
      </div>
      <div className='flex flex-row flex-wrap w-[90%] bg-orange-500 m-2'>
        <img className='m-1 md:w-[50%]' src={Tahiti} alt="" />
        <img className='m-1 md:w-[50%]' src={Maldives} alt="" />
        <img className='m-1 md:w-[50%]' src={Thailand} alt="" />
        <img className='m-1 md:w-[50%]' src={Cyprus} alt="" />
      </div>
     </div>
    </div>
  )
}

export default Holidays