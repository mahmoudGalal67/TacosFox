import React from 'react'

import { Link } from 'react-router-dom'


function Menu() {
  return (
    <section className='relative menu-food pt-6 pb-28'> 
    <div className='backG absolute object-cover w-full h-full top-0 left-0 z-10' alt=''></div>
    <div className='backG2 absolute w-full h-full top-0 left-0'></div>
      <div className='main-title text-center my-6 w-fit mx-auto'>Our Menu</div>
      <div className="wrapper flex gap-5 flex-wrap justify-around md:px-36 px-12">
        <div className="menu-item relative flex items-center justify-center text-white font-bold text-3xl rounded-md">
          <div className='title'>
          Pastas
          </div>
          <div className='view-menu hidden'>
          <Link to="/menu">View Menu</Link>
          </div>
          <div className='overlay absolute w-full h-full top-0 left-0 bg-fade opacity-0'></div>
        </div>
        <div className="menu-item relative flex items-center justify-center text-white font-bold text-3xl rounded-md">
          <div className='title'>
          Burgers
          </div>
          <div className='view-menu hidden'>
          <Link to="/menu">View Menu</Link>
          </div>
          <div className='overlay absolute w-full h-full top-0 left-0 bg-fade opacity-0'></div>
        </div>
        <div className="menu-item relative flex items-center justify-center text-white font-bold text-3xl rounded-md">
          <div className='title'>
          Pizzas
          </div>
          <div className='view-menu hidden'>
          <Link to="/menu">View Menu</Link>
          </div>
          <div className='overlay absolute w-full h-full top-0 left-0 bg-fade opacity-0'></div>
        </div>
        <div className="menu-item relative flex items-center justify-center text-white font-bold text-3xl rounded-md">
          <div className='title'>
          Salads
          </div>
          <div className='view-menu hidden'>
          <Link to="/menu">View Menu</Link>
          </div>
          <div className='overlay absolute w-full h-full top-0 left-0 bg-fade opacity-0'></div>
        </div>
      </div>
    </section>
  )
}

export default Menu