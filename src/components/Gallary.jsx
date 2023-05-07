import React from 'react'

function Gallary() {
  return (
    <section className='gallary relative'>
      <div className="main-title text-center my-6 w-fit mx-auto">
        GALLARY
      </div>
      <div className="wrapper w-full flex justify-center items-center sm:flex-row pt-6 pb-16 sm:px-16 px-3">
        <div className="gallary-item   ">
          <img src='/assets/images/home/gallary/1.png' className='h-4/6 w-full object-cover' alt=''></img>
          <img src='/assets/images/home/gallary/2.png' className='h-2/6 w-full object-cover' alt=''></img>
        </div>
        <div className="gallary-item   ">
          <img src='/assets/images/home/gallary/3.png' className='h-2/6 w-full object-cover' alt=''></img>
          <img src='/assets/images/home/gallary/4.png' className='h-4/6 w-full object-cover' alt=''></img>
        </div>
        <div className="gallary-item   ">
          <img src='/assets/images/home/gallary/5.png' className='h-4/6 w-full object-cover' alt=''></img>
          <img src='/assets/images/home/gallary/6.png' className='h-2/6 w-full object-cover' alt=''></img>
        </div>
        <div className="gallary-item   ">
          <div className='flex h-2/6'><img src='/assets/images/home/gallary/7.png' className='w-1/2 h-full object-cover' alt=''></img><img src='/assets/images/home/gallary/8.png' className='w-1/2 h-full object-cover' alt=''></img></div>
          <img src='/assets/images/home/gallary/9.png' className='h-4/6 w-full object-cover' alt=''></img>
        </div>
        <div className="gallary-item   ">
          <img src='/assets/images/home/gallary/10.png' className='h-3/6 w-full object-cover' alt=''></img>
          <img src='/assets/images/home/gallary/11.png' className='h-3/6 w-full object-cover' alt=''></img>
        </div>
      </div>
    </section>
  )
}

export default Gallary