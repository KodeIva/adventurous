import React from 'react'

const ResetPassword = () => {
  return (
        <section className='flex flex-col items-center justify-center bg-blue-50 w-full h-auto py-5'> 
         <h4 className="text-3xl text-slate-600 mt-5 mb-[-26px]">Reset Password</h4>
         <form className='w-full h-[100vh] flex justify-center items-center'>
           
             <div className='bg-slate-500 w-[80%] sm:w-[60%] lg:w-[40%] xl:w-[30%] h-auto py-9 px-7 mt-[-150px] rounded-xl'>
               <div className="row flex flex-col w-[100%] mb-6 ">
                 <label className="label" htmlFor="email">Email</label>
                 <input 
                    className='signin-input'
                    type="text" 
                    id='email'
                    name='email'
                     
                    required
                   
                 />
               </div>
               
                 <button 
                   type='submit' 
                    className='h-10 rounded-xl outline-none  text-slate-500 bg-white w-[100%]  border-2 my-8 font-semibold tracking-wider hover:bg-slate-500 hover:text-white hover:border-white duration-500'
                 >
                   Next
                </button>
             </div>
         </form>
         </section> 
  )
}

export default ResetPassword
