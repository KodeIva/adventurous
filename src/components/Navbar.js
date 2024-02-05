import { Link }  from 'react-router-dom'
import {SiYourtraveldottv} from 'react-icons/si'

const Navbar = () => {
  return (
    <div className="nav">
     <div className="nav-container">
      <Link to="/">ADVENTUROUS <SiYourtraveldottv/> </Link>
     </div>
    </div>
  )
}

export default Navbar