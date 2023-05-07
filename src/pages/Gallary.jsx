import React from 'react'

import Social from '../components/Social'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Copyright from '../components/Copy-right'

function Gallary() {
  return (
    <div id='Gallary'>
      <Social/>
      <Nav/>
      <div className="gallary-video">
        <div className="wrapper md:p-24 p-12">
          <img src="/assets/images/gallary/Annotation 2022-12-07 194839 1.jpg" alt="" />
        </div>
        <div className='insta-feed'>
          <img src="/assets/images/gallary/divvc_row-640a408aac6fd.png" alt="" />
        </div>
      </div>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default Gallary