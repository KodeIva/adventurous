import {useState} from 'react'
import { Link }  from 'react-router-dom'
import {SiYourtraveldottv} from 'react-icons/si'
import { LiaTimesSolid } from "react-icons/lia";
import { AiOutlineBars } from "react-icons/ai";

const Navbar = () => {
 const [click,setClick] = useState(false)

  return (
    <div className="nav">
     <div className="nav-container">
      <Link to="/">ADVENTUROUS <SiYourtraveldottv/> </Link>
      <div className="menu-icon">
       <i onClick={() => setClick(!click)}>
        {click ? <LiaTimesSolid /> : <AiOutlineBars/>}
       </i>
      </div>
     </div>
    </div>
  )
}

export default Navbar