import React, { useState } from 'react'

import Social from '../components/Social'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Copyright from '../components/Copy-right'
import Gallary from '../components/Gallary'

import { toast } from 'react-toastify';

function Contact() {

  const [contactInfo, setcontactInfo] = useState({
    name:"",
    email:"",
    message:""
  })

  const emailConfig = {
    Username: "Leo.events.dubai@gmail.com",
    Password: "AC2E2B2031CC8A4939480C02C7BBF2C540B7",
    Host: "smtp.elasticemail.com",
    Post: 2525,
    To : 'Leo.events.dubai@gmail.com',
    From : "Leo.events.dubai@gmail.com",
    Subject : "Tacos Fox Support",
      Body: `New booking from ${contactInfo.name}<br/><br/><br/>
      Email : ${contactInfo.email}<br/>
      Mesaage : ${contactInfo.message}<br/>
      `
  }

  const handleSubmit =async (e) => {
    e.preventDefault()
      if (window.Email) {
        window.Email.send(emailConfig).then(() => {
        setcontactInfo({name:"",email:"",message:""})
        toast.success('Your message has been sent successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
  })}
}

  return (
  <div id='Contact'>
    <Social/>
    <Nav/>
    <div className="contact h-screen">
      <div className="wrapper h-full">
        <form onSubmit={handleSubmit} className=' lg:w-1/2 w-full h-full py-6 md:pl-24 px-8 flex flex-col  justify-center gap-7'>
          <div className='contact-title text-4xl md:text-6xl'>Contact US</div>
          <div className="item flex flex-col gap-2">
            <label className='text-white text-xl' htmlFor="name">Your name</label>
            <input value={contactInfo.name} required name='name' className='w-8/12 p-4' id='name'  type="text" onChange={(e)=>setcontactInfo((prev)=>({...prev , [e.target.name]:e.target.value }))}/>
          </div>
          <div className="item flex flex-col gap-2">
            <label className='text-white text-xl' htmlFor="email">Your email</label>
            <input value={contactInfo.email} required name='email' className='w-8/12 p-4' id='email' type="email" onChange={(e)=>setcontactInfo((prev)=>({...prev , [e.target.name]:e.target.value }))}/>
          </div>
          <div className="item flex flex-col gap-2">
            <label className='text-white text-xl' htmlFor="message">Your message</label>
            <textarea value={contactInfo.message} required  name='message' className='p-8' id="message" cols="60" rows="4" onChange={(e)=>setcontactInfo((prev)=>({...prev , [e.target.name]:e.target.value }))}></textarea>
          </div>
          <button className='px-8 py-1 ml-auto text-2xl text-center w-fit text-white bg-brown hover:text-brown hover:bg-white rounded-md mt-5'>Submit</button>
        </form>
      </div>
    </div>
    <div className="contact-info">
      <div className="wrapper px-16 md:py-36 sm:py-12 py-8 flex flex-wrap justify-around">
        <div className='item  my-5 flex items-center gap-4 md:w-1/3 sm:w-1/2 w-full'>
          <img src="/assets/images/contact/i.png" alt=""/>
          <div>
            <div className='text-2xl text-brown font-bold'>Phone</div>
            <a href="tel:971545574911">+971545574911</a>
          </div>
        </div>
        <div className='item  my-5 flex items-center gap-4 md:w-1/3 sm:w-1/2 w-full'>
          <img src="/assets/images/contact/i (1).png" alt="" />
          <div>
            <div className='text-2xl text-brown font-bold'>Email</div>
            <a href="mailto:tacosfoxuae@gmail.com">tacosfoxuae@gmail.com</a>
          </div>
        </div>
        <div className='item  my-5 flex items-center gap-4 md:w-1/3 sm:w-1/2 w-full'>
          <img src="/assets/images/contact/i (2).png" alt="" />
          <div>
            <div className='text-2xl text-brown font-bold'>Address</div>
            <span>+Al Barsha 1-Dubai  UAE</span>
          </div>
        </div>
      </div>
    </div>
    <Gallary/>
    <Footer/>
    <Copyright/>
  </div>
  )
}

export default Contact