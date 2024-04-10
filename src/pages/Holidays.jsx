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
     <div>
      <div>
        <img src={Carribean} alt="" />
      </div>
      <div>
        <img src={Tahiti} alt="" />
        <img src={Maldives} alt="" />
        <img src={Thailand} alt="" />
        <img src={Cyprus} alt="" />
      </div>
     </div>
    </div>
  )
}

export default Holidays