import { Link } from "react-router-dom"


const Signup = () => {
  return (
   <section> 
    <form method="POST">
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
