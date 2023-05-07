import React from 'react'

import { Link } from 'react-router-dom'

import Social from '../components/Social'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Gallary from '../components/Gallary'
import Footer from '../components/Footer'
import Copyright from '../components/Copy-right'

function Home() {
  return (
    <div className='home'>
      <Social/>
      <Nav/>
      <Header/>
      <Menu/>
      <div className='order-now bg-brown'>
        <div className="wrapper flex justify-center py-6 text-white">
          <div className="info flex gap-5 items-center text-xs">
            <img src="/assets/icons/i.png" alt="" />
            <div className='font-bold text-lg sm:text-xl'>Order Now <a href="https://wa.me/971545574911">+971545574911</a></div>
          </div>
        </div>
      </div>
      <section className="offer">
        <div className="wreapper">
          <div className="info lg:w-1/2 w-full mr-auto flex flex-col justify-center gap-1 items-center height-full text-white text-2xl sm:text-4xl">
            <img src="/assets/images/home/giphy00 1.png" className='giff' alt="" />
            <div className='text-black' >BEEF  'N CHEDDAR </div>
            <div className='text-red-500'>CLASSIC SANDWICHES </div>
          </div>
        </div>
      </section>
      <div className='order-now bg-brown'>
        <div className="wrapper flex justify-center py-6 text-white">
          <div className="info flex gap-5 items-center text-xs">
            <img src="/assets/icons/i.png" alt="" />
            <div className='font-bold text-lg sm:text-xl'>Order Now <a href="https://wa.me/971545574911">+971545574911</a></div>
          </div>
        </div>
      </div>
      <section className="about">
        <div className="wrappper flex md:flex-row flex-col">
          <div className="our-menu relative w-full md:w-1/2 lg:px-28 lg:py-28 sm:p-16 p-5 text-white text-center">
            <div className='overlay absolute w-full h-full top-0 left-0 bg-fade pointer-events-none'></div>
            <div className='sm:text-4xl text-2xl my-7 font-bold'>Our Menu</div>
            <p>Fast food classics made with joy. Enjoy our great-tasting range of products — Fried Chicken, Burgers, Pies, Spaghetti, Rice Bowls, Wraps and many more!</p>
            <Link to="/menu" className='px-5 py-1 text-lg text-center bg-brown rounded-md mx-auto my-7 w-fit block'>View Menu</Link>  
          </div>
          <div className="location relative md:h-auto h-80 w-full md:w-1/2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.723835794544!2d55.1948418!3d25.111208100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b32deb9e1cd%3A0xd112368666188f1f!2sTacosFox!5e0!3m2!1sen!2seg!4v1683357108065!5m2!1sen!2seg" title='TacosFox' width="100%" height="100%" style={{border:"0",filter: "invert(90%)"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className='overlay absolute w-full h-full top-0 left-0 bg-fade pointer-events-none'></div>
            <div className='lg:px-28 lg:py-28 sm:p-16 p-5 text-white text-center absolute w-full h-full top-0 left-0 pointer-events-none'>
              <div className='sm:text-4xl text-2xl my-7 font-bold'>Our Locations</div>
              <p>456V+FWR Nada bulding_barcha1 -- Al Barsha 1 Dubai - United Arab Emirates</p>
              <a href="https://www.google.com/maps?ll=25.119047,55.197166&z=16&t=m&hl=en&gl=EG&mapclient=embed&cid=15065163654374133535" className='px-5 py-1 text-lg text-center bg-brown rounded-md mx-auto my-7 w-fit block relative pointer-events-auto'>View Locations</a>
            </div>
          </div>
        </div>
      </section>
      <Gallary />
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default Home