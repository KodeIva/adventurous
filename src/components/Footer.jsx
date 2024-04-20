import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="flex w-full h-auto p-3 bg-teal-200" >
     <ul className="flex flex-row w-full h-auto justify-center text-center p-9 bg-slate-500" >
          <li className='gb-rink-700 text-base xl:text-xl mx-4 text-blue-500 bold tracking-wide'>
            <Link to="/">Home</Link>
          </li>
           <li className='text-base xl:text-xl mx-4 text-blue-500 bold tracking-wide'>
            <Link to="/holidays">Holidays</Link>
          </li>
           <li className='text-base xl:text-xl mx-4 text-blue-500 bold tracking-wide'>
            <Link to="/city-breaks">City Breaks</Link>
          </li>
           <li className='text-base xl:text-xl mx-4 text-blue-500 bold tracking-wide'>
            <Link to="/articles">Articles</Link>
          </li>
        </ul>
    </div>
  )
}

export default Footer