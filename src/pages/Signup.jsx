import { Link } from "react-router-dom"


const Signup = () => {
  return (
   <section className="flex flex-col items-center justify-center bg-blue-50 w-full h-auto py-5 mb-20"> 
    <h4 className="text-3xl text-slate-600 mb-3">Register</h4>
    <form method="POST" className="bg-slate-500 w-[80%] sm:w-[60%] lg:w-[40%] xl:w-[30%] h-auto py-9 px-7 rounded-xl">
      <div>
        
        <div className="flex flex-col">
          <label className="mt-5 mb-2" htmlFor="">Username</label>
          <input className="border-2 border-md border-slate-400 rounded-md h-12 pl-5 " type="text" required/>
        </div>
        <div className="flex flex-col">
          <label className="mt-5 mb-2" htmlFor="">Email</label>
          <input className="border-2 border-md border-slate-400 rounded-md h-12 pl-5" type="email" name="email" required/>
        </div>
        <div className="flex flex-col">
          <label className="mt-5 mb-2" htmlFor="">Password</label>
          <input className="border-2 border-md border-slate-400 rounded-md h-12 pl-5" type="password" name="password" required/>
        </div>
        <button>Register</button>
        <Link to='/signin'>Login</Link>
      </div>

    </form>
   </section> 
  )
}

export default Signup
