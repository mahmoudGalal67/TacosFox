import React from 'react'

import {FaLinkedinIn,FaFacebookF,FaInstagram} from "react-icons/fa"
import {BsTwitter} from "react-icons/bs"
import { Link } from 'react-router-dom'

function Footer() {
  return (
  <footer className="relative text-white md:text-start text-center">
    <div className='overlay absolute w-full h-full top-0 left-0 bg-fade2 pointer-events-none'></div>
    <div className="wrapper flex justify-center md:px-36 py-8 flex-wrap text-sm">
      <div className="main-links xl:w-1/3 md:w-1/2 w-full xl:pl-24">
        <div className="mb-5 relative z-10 font-bold text-lg">Main Links</div>
        <ul>
          <li className="text-gray-200"><Link to="/">Home</Link></li>
          <li className="text-gray-200"><Link to="/gallary">Gallary</Link></li>
          <li className="text-gray-200"><Link to="/menu">Menu</Link></li>
          <li className="text-gray-200"><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="get-toutch xl:w-1/3 md:w-1/2 w-full">
        <div className="mb-5 relative z-10 font-bold text-lg">Get in touch</div>
        <p className="my-2 text-gray-200">
          Address: Al Barsha 1-Dubai UAE
        </p>
        <p className="my-2 text-gray-200">
          Email:
          <a href="mailto:admin@cedartreehospitality.com">admin@cedartreehospitality.com</a>
        </p>
        <div
          className="my-2 text-gray-200 flex gap-3 justify-center md:justify-start items-center"
        >
          <span>Mobile:</span>
            <a href="tel:+971545574911">+971545574911</a>
        </div>
        <div
          className="my-2 text-gray-200 flex gap-3 justify-center md:justify-start items-center"
        >
          <span>Land Line:</span>
            <a href="tel:+971545574911">+971545574911</a>
        </div>
        <div className="relative z-10 font-bold text-lg">Secure Payment</div>
        <img
          className="md:inline relative z-10 block m-auto"
          src="/assets/images/home/layer-23.png.png"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="icons mx-auto relative z-10 xl:w-1/3 md:w-1/2 w-full">
        <img
          src="/assets/images/logo.png"
          className="logo md:inline block m-auto w-60 relative z-10"
          alt=""
        />
        <div
          className="icon-wrapper my-5 flex items-center  justify-center gap-3"
        >
          <div
            className="icon w-10 p-3 rounded-full flex justify-center items-center bg-iconB hover:bg-brown"
          >
            <a href="/"><FaLinkedinIn/></a>
          </div>
          <div
            className="icon w-10 p-3 rounded-full flex justify-center items-center bg-iconB hover:bg-brown"
          >
            <a href="/"><FaFacebookF/></a>
          </div>
          <div
            className="icon w-10 p-3 rounded-full flex justify-center items-center bg-iconB hover:bg-brown"
          ><a href="/"><FaInstagram/></a></div>
          <div
            className="icon w-10 p-3 rounded-full flex justify-center items-center bg-iconB hover:bg-brown"
          >
            <a href="/"><BsTwitter/></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer