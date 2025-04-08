import { Link } from "react-router-dom"


const Signup = () => {
  return (
   <section className="flex justify-center bg-blue-50 w-full h-auto py-5"> 
    <form method="POST" className="bg-red-400 w-[80%] md:w-[50%] lg:w-[30%]">
      <div>
        <h4>Register</h4>
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
