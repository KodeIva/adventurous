import React from 'react'

const Search = () => {
  return (
   <section className='flex flex-col justify-center items-center sm:flex-col md:bg-red-300 md:flex-row w-full h-auto p-1'> 
    <div className='w-[80%] md:w-[50%]  lg:w-[50%] px-2 py-6'>
      <h2 className='text-3xl md:text-2xl lg:text-3xl mb-4 font-medium text-slate-700'>Special Holiday Travel Offer!</h2>
      <p className='py-2'>Planning your next getway? Now is the perfect time!</p>
      <p className='py-2'>Book your holiday with us and enjoy <span className='font-semibold'>up to 40%</span> on selected travel 
         packages to some of the world's most beautiful destinations.
      </p>
      <p className='py-2'>
        Whether you're dreaming of relaxing beach, exploring a vibrant city, or
        escaping to a peaceful mountain retreat- we have perfect trip waiting for you.
      </p>
      <p className='py-2'>
        This is a <span className='font-semibold'>limited-time offer</span>
        , so don't wait!
      </p>
      <p className='font-semibold'>Let's the adventure begin!</p>
    </div>
    <div className='flex flex-col justify-center items-center w-[80%]  md:w-[45%] lg:w[30%] py-6'>
        <div className='relative flex flex-col w-[80%] border-2 text-blue-900 border-blue-900 py-5 justify-center items-center'>
             <h2 className='uppercase mb-7 tracking-wide md:text-sm lg:text-lg '>Firts time booking - get 15% off</h2>
             <button className='absolute bottom-0 uppercase tracking-wide w-[100%] bg-blue-900 text-white py-1 '>Book now and save</button>
        </div>
        <form className='flex flex-col justify-center items-center w-[80%]'>
            <div className='w-full py-3 flex flex-col'>
                <label className='py-1'>Destination</label>
                <select className='h-10 border-2 rounded-md border-slate-200 pl-1'>
                    <option>Carribean</option>
                    <option>Tahiti</option>
                    <option>Maldives</option>
                    <option>Thailand</option>
                    <option>Cypres</option>
                </select>
            </div>
            <div className='w-full py-3 flex flex-col'>
                <label className='py-1'>Check-in</label>
                <input className='h-10 border-2 rounded-md border-slate-200 pl-1' type="date" />
            </div>
            <div className='w-full py-3 flex flex-col'>
                <label className='py-1'>Check-out</label>
                <input className='h-10 border-2 rounded-md border-slate-200 pl-1' type="date" />
            </div>
        </form>
       
    </div>
   </section>
  )
}

export default Search
