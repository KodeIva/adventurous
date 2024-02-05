import {useState} from 'react'
import { Link }  from 'react-router-dom'
import {SiYourtraveldottv} from 'react-icons/si'
import { LiaTimesSolid } from "react-icons/lia";
import { AiOutlineBars } from "react-icons/ai";

const Navbar = () => {
 const [click,setClick] = useState(false)
 const [open,setOpen] = useState(true)

  return (
    <div className="nav">
     <div className="nav-container">
      <Link to="/">ADVENTUROUS <SiYourtraveldottv/> </Link>
      <div className="menu-icon">
       <i onClick={() => setClick(!click)}>
        {click ? <LiaTimesSolid /> : <AiOutlineBars/>}
       </i>
        {click && <ul className='mob-menu' style={{color: 'red'}}>
          <li>
            <Link to="/" onClick={() => setClick(!click) }>Home</Link>
          </li>
          <li>
            <Link to="/holiday" onClick={() => setClick(!click) }>Holiday</Link>
          </li>
          <li>
            <Link to="/cityBreaks" onClick={() => setClick(!click)}>City Breaks</Link>
          </li>
          <li>
            <Link to="/articles" onClick={() => setClick(!click)}>Articles</Link>
          </li>
        </ul>}
      </div>
     </div>
    </div>
  )
}

export default Navbar