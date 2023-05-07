import React from 'react'

import { Link } from 'react-router-dom'


function Header() {
  return (
    <header>
      <div className="wreapper">
        <div className="info md:w-1/2 w-full ml-auto flex flex-col justify-center gap-5 items-center height-full text-white text-4xl sm:text-6xl">
          <div >Best Quality </div>
          <div >Good Taste </div>
          <Link to="/menu" className='px-5 py-1 text-xl text-center bg-brown rounded-md mt-5'>Menu</Link>
        </div>
      </div>
    </header>
  )
}

export default Header