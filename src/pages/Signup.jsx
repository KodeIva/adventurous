

const Signup = () => {
  return (
   <section> 
    <form method="POST">
      <div>
        <h4>Register</h4>
        <div>
          <label htmlFor="">Username</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" name="password" />
        </div>
        <button>Register</button>
      </div>

    </form>
   </section> 
  )
}

export default Signup
