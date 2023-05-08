import React from 'react'

import {FaLinkedinIn,FaFacebookF,FaInstagram} from "react-icons/fa"
import {BsTwitter,BsPinterest} from "react-icons/bs"

function Social() {
  return (
    <div className='social-links p-2 md:px-16 bg-brown'>
      <div className="wrapper flex flex-row gap-3 items-center justify-around text-white">
      <div className="info flex gap-1 items-center text-xs">
          <img src="/assets/icons/.png" alt="" />
          <div>Free Hot Delivery : <a href="https://wa.me/971545574911">+971545574911</a></div>
        </div>
        <div className="social flex items-center gap-5 text-xs">
          <a href="https://www.facebook.com/tacosfoxuae/"><FaFacebookF/></a>
          <a href="https://twitter.com/tacosfoxuae"><BsTwitter/></a>
          <a href="https://www.instagram.com/tacosfoxuae/"><FaInstagram/></a>
          <a href="https://www.linkedin.com/company/tacosfoxuae/"><FaLinkedinIn/></a>
          <a href="https://www.pinterest.com/tacosfoxuae/"><BsPinterest/></a>
        </div>
      </div>
    </div>
  )
}

export default Social