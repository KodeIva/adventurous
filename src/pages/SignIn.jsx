import React from 'react'

const SignIn = () => {
  return (
    <form action="" className='w-full h-[70vh] flex justify-center items-center'>
        <div className='bg-slate-500 w-[80%] h-auto py-9 px-7 rounded-xl'>
          <div className="row flex flex-col mb-6 ">
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <div className="row flex flex-col mb-4">
            <label htmlFor="">Password</label>
            <input type="text" />
          </div>
        </div>
     
    </form>
  )
}

export default SignIn