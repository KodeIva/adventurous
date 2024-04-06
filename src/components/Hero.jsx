import React from 'react'
import beachLx from '../assets/beach-lx.mp4'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
     <video autoPlay loop muted  disablePictureInPicture
       className='absolute top-0 ' 
       src={beachLx}
     />
     <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30 z-50'></div>
    </div>
    
  )
}

export default Hero