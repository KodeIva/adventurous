import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const routeChange = () => {
    let path = `/signin`
    navigate(path)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username,email,password);
    routeChange()
  }

  return (
   <section className="flex flex-col items-center justify-center bg-blue-50 w-full h-auto py-10 pb-20"> 
    <h4 className="text-3xl text-slate-600 mb-3">Register</h4>
    <form method="POST" onSubmit={handleSubmit}  className="bg-slate-500 w-[80%] sm:w-[60%] lg:w-[40%] xl:w-[30%] h-auto py-9 px-7 rounded-xl">
      <div>
        
        <div className="flex flex-col">
          <label className="mt-3 mb-2 label" htmlFor="">Username</label>
          <input 
            className="signin-input" 
            type="text" name="username" 
            required 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="mt-3 mb-2 label" htmlFor="">Email</label>
          <input 
            className="signin-input" 
            type="email" name="email" 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="mt-3 mb-2 label" htmlFor="">Password</label>
          <input 
            className="signin-input" 
            type="password" 
            name="password" 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <button className="bg-white text-slate-500 font-semibold w-full mt-7 border-2 border-md border-white rounded-xl h-10 pl-5 pr-[20px] hover:text-white hover:bg-slate-500 duration-500">Register</button>
        
        <div className="mt-9">
          <span className='text-sm text-white'>Already registered? </span>
          <Link className="link" to='/signin'> Login</Link>
        </div>
        
      </div>

    </form>
   </section> 
  )
}

export default Signup
