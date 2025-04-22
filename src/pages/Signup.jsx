import { Link } from "react-router-dom"


const Signup = () => {
  return (
   <section className="flex flex-col items-center justify-center bg-blue-50 w-full h-auto py-10 pb-20"> 
    <h4 className="text-3xl text-slate-600 mb-3">Register</h4>
    <form method="POST" className="bg-slate-500 w-[80%] sm:w-[60%] lg:w-[40%] xl:w-[30%] h-auto py-9 px-7 rounded-xl">
      <div>
        
        <div className="flex flex-col">
          <label className="mt-3 mb-2 label" htmlFor="">Username</label>
          <input className="signin-input" type="text" required/>
        </div>
        <div className="flex flex-col">
          <label className="mt-3 mb-2 label" htmlFor="">Email</label>
          <input className="signin-input" type="email" name="email" required/>
        </div>
        <div className="flex flex-col">
          <label className="mt-3 mb-2 label" htmlFor="">Password</label>
          <input className="signin-input" type="password" name="password" required/>
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
