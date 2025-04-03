import { Link } from "react-router-dom"


const Signup = () => {
  return (
   <section className="flex justify-center bg-blue-50 w-full h-auto py-5"> 
    <form method="POST" className="bg-red-400 w-[80%] md:w-[50%] lg:w-[30%]">
      <div>
        <h4>Register</h4>
        <div>
          <label htmlFor="">Username</label>
          <input type="text" required/>
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" name="email" required/>
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" name="password" required/>
        </div>
        <button>Register</button>
        <Link to='/signin'>Login</Link>
      </div>

    </form>
   </section> 
  )
}

export default Signup
