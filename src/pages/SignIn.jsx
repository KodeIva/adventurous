import React, { useState } from 'react'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email,password);
  }

  return (
    <form onSubmit={handleSubmit} className='w-full h-[100vh] flex justify-center items-center'>
        <div className='bg-slate-500 w-[80%] sm:w-[60%] lg:w-[40%] xl:w-[30%] h-auto py-9 px-7 mt-[-150px] rounded-xl'>
          <div className="row flex flex-col w-[100%] mb-6 ">
            <label className="label" htmlFor="email">Email</label>
            <input 
               className='h-10 rounded-xl outline-none'
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
              className='h-10 rounded-xl outline-none' 
              type="text" 
              id='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <button className='h-10 rounded-xl outline-none  text-slate-500 bg-white w-[100%]  border-2 my-8 font-semibold tracking-wider hover:bg-slate-500 hover:text-white hover:border-white duration-500'>Sign in</button>
          <div>
            <button className='pr-[20px] text-sm text-blue-300 hover:text-white duration-500'>Forgot Password?</button>
          </div>
          <div className='mt-9'>
            <span className='text-sm text-white'>Need an account? </span>
            <button className='text-sm text-blue-300 hover:text-white duration-500'> Sign up now!</button>
          </div>
        </div>
    </form>
  )
}

export default SignIn