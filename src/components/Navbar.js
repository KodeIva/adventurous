import {useState} from 'react'
import { Link }  from 'react-router-dom'
import {SiYourtraveldottv} from 'react-icons/si'
import { LiaTimesSolid } from "react-icons/lia";
import { AiOutlineBars } from "react-icons/ai";

const Navbar = () => {
 const [click,setClick] = useState(false)
 //const [open,setOpen] = useState(true)

  return (
    <div className="nav bg-orange-300 flex flex-row p-3 w-[100%] h-[auto] justify-between  " >
     <div className="nav-container">
       <Link to="/">
        <span className='flex text-3xl p-2 text-blue-600'>
          <span className='text-blue-600'>ADVENTUR</span>  
          <span className='text-blue-800'><SiYourtraveldottv/></span> 
          <span className='text-blue-600'>US</span></span>
       </Link>
      </div>
      <div className='hidden md:flex bg-yellow-600 w-[70%] justify-center '>
        <ul className='w-[100%] flex flex-row justify-center items-center '>
          <li className='text-xl mx-4 text-white'>
            <Link to="/" onClick={() => setClick(!click) }>Home</Link>
          </li>
           <li className='text-xl mx-4 text-white'>
            <Link to="/" onClick={() => setClick(!click) }>Holidays</Link>
          </li>
           <li className='text-xl mx-4 text-white'>
            <Link to="/" onClick={() => setClick(!click) }>City Breaks</Link>
          </li>
           <li className='text-xl mx-4 text-white'>
            <Link to="/" onClick={() => setClick(!click) }>Articles</Link>
          </li>
        </ul>
      </div>
      <div className="menu-icon md:hidden bg-pink-300 w-[100%] h-[auto]">
       <i onClick={() => setClick(!click)}>
        {click ? <LiaTimesSolid className='text-5xl text-red-600 absolute right-5' /> : <AiOutlineBars className='text-5xl text-blue-600 hover:rotate-180 absolute right-5 '/>}
       </i>
        {click && 
         <ul className='mob-menu transition-all  ' style={{color: 'white'}}>
           <li className='ml-4 mt-8'>
            <Link to="/" onClick={() => setClick(!click) }>Home</Link>
           </li>
           <li className='ml-4 mt-8'>
            <Link to="/holidays" onClick={() => setClick(!click) }>Holidays</Link>
           </li>
           <li className='ml-4 mt-8'>
            <Link to="/cityBreaks" onClick={() => setClick(!click)}>City Breaks</Link>
           </li>
           <li className='ml-4 mt-8 mb-8'>
            <Link to="/articles" onClick={() => setClick(!click)}>Articles</Link>
           </li>
         </ul>}
      
     </div>
    </div>
  )
}

export default Navbar