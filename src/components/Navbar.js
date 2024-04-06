import {useState} from 'react'
import { Link }  from 'react-router-dom'
import {SiYourtraveldottv} from 'react-icons/si'
import { LiaTimesSolid } from "react-icons/lia";
import { AiOutlineBars } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";

const Navbar = () => {
 const [click,setClick] = useState(false)
 //const [open,setOpen] = useState(true)

  return (
    <>
    <div className="nav flex flex-row p-3 w-[100%] h-[auto] justify-between" >
     <div className="nav-container">
       <Link to="/">
        <span className='flex text-2xl xl:text-3xl p-2 text-blue-600'>
          <span className='text-blue-600'>ADVENTUR</span>  
          <span className='text-blue-800'><SiYourtraveldottv/></span> 
          <span className='text-blue-600'>US</span></span>
       </Link>
      </div>
      <div className='hidden md:flex w-[70%] justify-center '>
        <ul className='w-[80%] flex flex-row justify-center items-center text-blue-600'>
          <li className=' text-base xl:text-xl mx-4'>
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
        <div className='flex flex-row items-center text-blue-500 text-2xl '>
         <LuSearch className='m-2 hover:text-blue-800 cursor-pointer' />
         <IoPerson className='m-2 hover:text-blue-800 cursor-pointer' />
        </div>
      </div>  
   
      <div className="flex items-center menu-icon md:hidden w-[70%] h-[auto] z-50">
       <i className=' text-2xl w-10 h-10 absolute right-5' onClick={() => setClick(!click)}>
        {click 
           ? 
           <LiaTimesSolid className='cursor-pointer z-10 text-4xl text-red-600 absolute right-5 transition duration-700' /> 
           : 
           <AiOutlineBars className='cursor-pointer text-4xl text-blue-600 hover:rotate-180 absolute right-5 transition duration-700'/>
        }
       </i>
        {click && 
         <ul className='flex flex-col items-center mob-menu absolute top-0 right-0 bg-teal-100/90 w-[100%] ' style={{color: 'blue'}}>
           <li className='pr-4 border-b-2  border-blue-100 w-[90%] text-center pb-5 pt-5 '>
            <Link to="/" onClick={() => setClick(!click) }>Home</Link>
           </li>
           <li className='pr-4 border-b-2 border-blue-100 w-[90%] text-center pb-5 pt-5 '>
            <Link to="/holidays" onClick={() => setClick(!click) }>Holidays</Link>
           </li>
           <li className='pr-4 border-b-2 border-blue-100 w-[90%] text-center pb-5 pt-5 '>
            <Link to="/cityBreaks" onClick={() => setClick(!click)}>City Breaks</Link>
           </li>
           <li className='pr-4 border-b-2 border-blue-100 w-[90%] text-center pb-5 pt-5 '>
            <Link to="/articles" onClick={() => setClick(!click)}>Articles</Link>
           </li>
           <div className='flex flex-col w-[90%]'>
            <button className='w-[100%]  my-2 bg-gradient-to-r from-teal-500 to-teal-300 rounded-lg hover:bg-white hover:bg-gradient-to-l hover:from-teal-500 hover:to-teal-300 text-white pb-3 pt-3 transition duration-700'>Search</button>
            <button className='w-[100%] border-2 border-transparent my-2 bg-teal-300 rounded-lg hover:bg-white hover:text-teal-300 hover:border-2 hover:border-teal-300 text-white pb-3 pt-3 transition duration-700'>Account</button>
           </div>
         </ul>
         }
      </div>
     </div>
  </>
  )
}

export default Navbar