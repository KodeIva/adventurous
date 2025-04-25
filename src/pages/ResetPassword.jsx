import { useState } from 'react'

const ResetPassword = () => {
  const [email, setEmail] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email);
  }

  return (
        <section className='flex flex-col items-center justify-center bg-blue-50 w-full h-auto py-5'> 
         <h4 className="text-3xl text-slate-600 mt-7">Reset Password</h4>
         <p className='pt-5'>Reset your password by providing your registered email below. </p>
         <form onSubmit={handleSubmit} className='w-full h-[100vh] flex justify-center items-center mt-[-20px]'>
           
             <div className='bg-slate-500 w-[80%] sm:w-[60%] lg:w-[40%] xl:w-[30%] h-auto py-9 px-7 mt-[-150px] rounded-xl'>
               <div className="row flex flex-col w-[100%] mb-6 ">
                 <label className="label" htmlFor="email">Email</label>
                 <input 
                    className='signin-input'
                    type="text" 
                    id='email'
                    name='email'   
                    required
                    onChange={(e) => setEmail(e.target.value)}
                 />
               </div>
               
                 <button 
                   type='submit' 
                    className='h-10 rounded-xl outline-none  text-slate-500 bg-white w-[100%]  border-2 my-6 font-semibold tracking-wider hover:bg-slate-500 hover:text-white hover:border-white duration-500'
                 >
                   Next
                </button>
             </div>
         </form>
         </section> 
  )
}

export default ResetPassword
