import React from 'react'

const SignIn = () => {
  return (
    <form action="" className=' bg-red-300 w-full h-[100vh] sm:bg-yellow-200 lg:bg-orange-500 flex justify-center items-center'>
        <div className='bg-slate-500 w-[80%] sm:w-[60%] lg:w-[40%] xl:w-[30%] h-auto py-9 px-7 rounded-xl'>
          <div className="row flex flex-col w-[100%] mb-6 ">
            <label className="text-white tracking-wider mb-1 pl-2" htmlFor="">Email</label>
            <input className='h-10 rounded-xl outline-none' type="text" />
          </div>
          <div className="row flex flex-col w-[100%] mb-4">
            <label className='text-white tracking-wider mb-1 pl-2' htmlFor="">Password</label>
            <input className='h-10 rounded-xl outline-none' type="text" />
          </div>
          <button className='h-10 rounded-xl outline-none  text-slate-500 bg-white w-[100%] my-8 font-semibold tracking-wider'>Sign in</button>
        </div>
    </form>
  )
}

export default SignIn