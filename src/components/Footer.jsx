import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div >
    <ul >
          <li className='gb-rink-700 text-base xl:text-xl mx-4'>
            <Link to="/">Home</Link>
          </li>
           <li className='text-base xl:text-xl mx-4'>
            <Link to="/holidays">Holidays</Link>
          </li>
           <li className='text-base xl:text-xl mx-4'>
            <Link to="/city-breaks">City Breaks</Link>
          </li>
           <li className='text-base xl:text-xl mx-4'>
            <Link to="/articles">Articles</Link>
          </li>
        </ul>
    </div>
  )
}

export default Footer