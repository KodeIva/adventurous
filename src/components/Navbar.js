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
    <div className="nav flex flex-row p-3 w-[100%] h-[auto] justify-between " >
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
            <Link to="/">Holidays</Link>
          </li>
           <li className='text-base xl:text-xl mx-4'>
            <Link to="/">City Breaks</Link>
          </li>
           <li className='text-base xl:text-xl mx-4'>
            <Link to="/">Articles</Link>
          </li>
        </ul>
        <div className='flex flex-row items-center text-blue-500 text-2xl '>
         <LuSearch className='m-2 hover:text-blue-800 cursor-pointer' />
         <IoPerson className='m-2 hover:text-blue-800 cursor-pointer' />
        </div>
      </div>  
   
      <div className="flex items-center menu-icon md:hidden w-[70%] h-[auto] bg-slate-100">
       <i className=' text-2xl w-10 h-10 absolute right-5' onClick={() => setClick(!click)}>
        {click 
           ? 
           <LiaTimesSolid className='cursor-pointer z-10 text-4xl text-red-600 absolute right-5' /> 
           : 
           <AiOutlineBars className='cursor-pointer text-4xl text-blue-600 hover:rotate-180 absolute right-5 '/>
        }
       </i>
        {click && 
         <ul className='flex flex-col items-center mob-menu transition-all absolute top-0 right-1  bg-orange-500 w-[100%]' style={{color: 'blue'}}>
           <li className='pr-4 border-b-2  bg-white w-[90%] text-center pb-5 pt-5 '>
            <Link to="/" onClick={() => setClick(!click) }>Home</Link>
           </li>
           <li className='pr-4 border-b-2 bg-white w-[90%] text-center pb-5 pt-5 '>
            <Link to="/holidays" onClick={() => setClick(!click) }>Holidays</Link>
           </li>
           <li className='pr-4 border-b-2 bg-white w-[90%] text-center pb-5 pt-5 '>
            <Link to="/cityBreaks" onClick={() => setClick(!click)}>City Breaks</Link>
           </li>
           <li className='pr-4 border-b-2 bg-white w-[90%] text-center pb-5 pt-5 '>
            <Link to="/articles" onClick={() => setClick(!click)}>Articles</Link>
           </li>
         </ul>
         }
      </div>
     </div>
  </>
  )
}

export default Navbar