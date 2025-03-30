import React from 'react'

const Search = () => {
  return (
   <section className='flex flex-col justify-center items-center md:flex-row w-full h-auto p-1'> 
    <div className='w-[80%] md:w-[50%] lg:w-[50%] px-2 py-6'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta rerum corporis repellendus esse ratione iste velit in aperiam dolores facere, ad autem quas, asperiores officiis architecto cumque? Exercitationem a quasi ab reiciendis asperiores saepe debitis laudantium? Reiciendis fuga accusamus voluptas voluptates repellendus recusandae, accusantium placeat a suscipit, dicta minus iure!
    </div>
    <div className='flex flex-col justify-center items-center w-[80%] md:w-[40%] lg:w[30%] py-6'>
        <div className='relative flex flex-col w-[80%] border-2 text-blue-900 border-blue-900 py-5 justify-center items-center'>
             <h2 className='uppercase mb-7 tracking-wide'>Firts time booking - get 15% off</h2>
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
