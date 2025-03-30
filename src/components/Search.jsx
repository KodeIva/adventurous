import React from 'react'

const Search = () => {
  return (
   <section> 
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta rerum corporis repellendus esse ratione iste velit in aperiam dolores facere, ad autem quas, asperiores officiis architecto cumque? Exercitationem a quasi ab reiciendis asperiores saepe debitis laudantium? Reiciendis fuga accusamus voluptas voluptates repellendus recusandae, accusantium placeat a suscipit, dicta minus iure!
    </div>
    <div>
        <div>
             <h2>Firts time booking - get 15% off</h2>
             <button>Book now and save</button>
        </div>
        <form>
            <div>
                <label htmlFor="">Destinations</label>
                <select>
                    <option>Carribean</option>
                    <option>Tahiti</option>
                    <option>Maldives</option>
                    <option>Thailand</option>
                    <option>Cypres</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Check-in</label>
                <input type="date" />
            </div>
            <div>
                <label htmlFor="">Check-out</label>
                <input type="date" />
            </div>
        </form>
       
    </div>
   </section>
  )
}

export default Search
