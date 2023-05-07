import React from 'react'

import { Link ,useLocation} from 'react-router-dom'



function Nav() {

  const location = useLocation()
  const url = location.pathname.split("/")[1]

  return (
    <nav className="top-nav md:px-36 px-16">
      <Link to="/"><img src="/assets/images/logo.png" className='logo' alt="" /></Link>
      <input id="menu-toggle" type="checkbox" />
      <label className='menu-button-container' htmlFor="menu-toggle">
        <div className='menu-button'></div>
      </label>
      <ul className="menu font-bold text-md">
        <li><Link to="/" className={url===""?"active":"normal"}>Home</Link></li>
        <li><Link to="/gallary" className={url==="gallary"?"active":"normal"}>Gallary</Link></li>
        <li><Link to="/menu" className={url==="menu"?"active":"normal"}>Menu</Link></li>
        <li><Link to="/contact" className={url==="contact"?"active":"normal"}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav