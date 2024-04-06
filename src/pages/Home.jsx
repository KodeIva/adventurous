import React from 'react'
//import Hero from '../components/Hero'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home absolute justify-center text-center top-0 text-white'>
      <h1 className='text-2xl'>First Class Travel</h1>
      <h2 className='text-xl'>Top 1 Locations Worldwide</h2>
      <form action="">
        <div>
          <input type="text" placeholder='Search Destinations...' className='p-3' />
        </div>
      </form>
      
    </div>
  )
}

export default Home