import React from 'react'
import beachLx from '../assets/beach-lx.mp4'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
     <video autoPlay loop muted 
       className='w-full h-full object-cover' 
       src={beachLx}
     />
    </div>
  )
}

export default Hero