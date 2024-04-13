import React from 'react'
import {Link} from 'react-router-dom'
import {SiYourtraveldottv} from 'react-icons/si'
import Carribean from '../assets/caribbean.jpg'
import Tahiti from '../assets/tahiti.jpg'
import Maldives from '../assets/maldives.jpg'
import Thailand from '../assets/thailand.jpg'
import Cyprus from '../assets/cyprus.jpg'
import { useState } from 'react'


const Holidays = () => {
  const [isClicked, setIsClicked] = useState('false')

  function showText() {
    setIsClicked(!isClicked)
  }
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
     <h1 className='text-3xl my-2  text-teal-600 tracking-wide  '>All Inclusive Resorts</h1>
     <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img 
          className='col-span-2 md:col-span-3 row-span-2 w-full hover:contrast-150 transition-all duration-500' 
          src={Carribean}
          alt={Carribean} 
          onClick={showText}  
          />
        <img className='h-[100%] hover:contrast-150 transition-all duration-500' src={Tahiti} alt={Tahiti} />
        <img className='h-[100%] hover:contrast-150 transition-all duration-500' src={Maldives} alt={Maldives} />
        <img className='h-[100%] hover:contrast-150 transition-all duration-500' src={Thailand} alt={Thailand} />
        <img className='h-[100%] hover:contrast-150 transition-all duration-500' src={Cyprus} alt={Cyprus} />
     </div>
     {isClicked && <div className='flex flex-col justify-center items-center  w-[100%] h-[auto] py-8 bg-slate-600'>
      <h2 className='w-[80%] text-2xl tracking-wide text-teal-600 my-4 py-4 bg-blue-950 '>Carribean</h2>
      <p className='w-[80%] bg-orange-700 '>      
       Situated largely on the Caribbean Plate, the region has more than 700 islands, islets, reefs, and cays. Island arcs delineate the northern and eastern edges of the Caribbean Sea:[7] the Greater Antilles in the north and the Lesser Antilles, which includes the Leeward Antilles, in the east and south. The nearby Lucayan Archipelago, comprising The Bahamas and the Turks and Caicos Islands, is considered to be a part of the Caribbean despite not bordering the Caribbean Sea. All the islands in the Antilles plus the Lucayan Archipelago form the West Indies, which is often interchangeable with the term Caribbean.
      </p>
     </div>
     }
     
    </div>
  )
}

export default Holidays