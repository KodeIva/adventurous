import React, { useState } from 'react'
import { LuHeading1 } from 'react-icons/lu'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const navigate = useNavigate()
  const routeChange = () => {

    let path = `/`
    navigate(path)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email,password);
    routeChange()
  }

  return (
    <>
    {!submitted && (
    <form onSubmit={handleSubmit} className='w-full h-[100vh] flex justify-center items-center'>
        <div className='bg-slate-500 w-[80%] sm:w-[60%] lg:w-[40%] xl:w-[30%] h-auto py-9 px-7 mt-[-150px] rounded-xl'>
          <div className="row flex flex-col w-[100%] mb-6 ">
            <label className="label" htmlFor="email">Email</label>
            <input 
               className='signin-input'
               type="text" 
               id='email'
               name='email'
               value={email}   
               onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="row flex flex-col w-[100%] mb-4">
            <label className='label' htmlFor="password">Password</label>
            <input 
              className='signin-input' 
              type="text" 
              id='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          
            <button 
              type='submit' 
               className='h-10 rounded-xl outline-none  text-slate-500 bg-white w-[100%]  border-2 my-8 font-semibold tracking-wider hover:bg-slate-500 hover:text-white hover:border-white duration-500'
            >
              Sign in
           </button>
          
          <div>
            <button className='pr-[20px] text-sm text-blue-300 hover:text-white duration-500'>Forgot Password?</button>
          </div>
          <div className='mt-9'>
            <span className='text-sm text-white'>Need an account? </span>
            <Link to='/signup' className='text-sm text-blue-300 hover:text-white duration-500'> Sign up now!</Link>
          </div>
        </div>
    </form>
    )}
    
    </>
  )
}

export default SignIn