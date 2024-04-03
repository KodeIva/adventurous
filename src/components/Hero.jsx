import React from 'react'
import beachLx from '../assets/beach-lx.mp4'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
     <video src={beachLx}></video>
    </div>
  )
}

export default Hero