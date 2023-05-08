import React from 'react'

import Social from '../components/Social'
import Nav from '../components/Nav'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Copyright from '../components/Copy-right'

function MenuPage() {
  return (
    <div id='Menu'>
      <Social/>
      <Nav/>
      <Menu/>
      <section id='Menu-items'>
        <div className="wrapper">
          <div className="item flex lg:flex-row flex-col w-full">
            <img className='menu-image lg:w-1/2 w-full' src="/assets/images/menu/pizza.png" alt="" />
            <div className="menu-info lg:w-1/2 w-full px-4  sm:px-12 py-8">
              <div className='text-3xl text-center text-brown my-3'>Pizzas</div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/pizza.png" alt=""/>
                <div className='text-lg text-gray-500'>Special Pizza</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$29.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/pizza.png" alt=""/>
                <div className='text-lg text-gray-500'>Greek Pizza</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$21.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/pizza.png" alt=""/>
                <div className='text-lg text-gray-500'>Margherita</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$15.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/pizza.png" alt=""/>
                <div className='text-lg text-gray-500'>Italian Pizza</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$17.99</div>
              </div>
              <a href="/menu" className='px-7 mx-auto block w-fit text-white py-1 text-xl text-center bg-brown rounded-md mt-5'>More</a>
            </div>
          </div>
          <div className="item flex lg:flex-row flex-col w-full">
            <img className='menu-image lg:w-1/2 w-full' src="/assets/images/menu/burger.png" alt="" />
            <div className="menu-info lg:w-1/2 w-full px-4  sm:px-12 py-8">
              <div className='text-3xl text-center text-brown my-3'>Burgers</div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/burger.png" alt=""/>
                <div className='text-lg text-gray-500'>Cheeseburger</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$29.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/burger.png" alt=""/>
                <div className='text-lg text-gray-500'>Hamburger</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$25.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/burger.png" alt=""/>
                <div className='text-lg text-gray-500'>Chicken Burger</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$18.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/burger.png" alt=""/>
                <div className='text-lg text-gray-500'>Mashroom Burger</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$17.99</div>
              </div>
              <a href="/menu" className='px-7 mx-auto block w-fit text-white py-1 text-xl text-center bg-brown rounded-md mt-5'>More</a>
            </div>
          </div>
          <div className="item flex lg:flex-row flex-col w-full">
            <img className='menu-image lg:w-1/2 w-full' src="/assets/images/menu/tacos.png" alt="" />
            <div className="menu-info lg:w-1/2 w-full px-4  sm:px-12 py-8">
              <div className='text-3xl text-center text-brown my-3'>Paris tacos</div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/plates.png" alt=""/>
                <div className='text-lg text-gray-500'>Vegan taco</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$29.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/plates.png" alt=""/>
                <div className='text-lg text-gray-500'>Deadly taco</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$25.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/plates.png" alt=""/>
                <div className='text-lg text-gray-500'>European taco</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$18.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/plates.png" alt=""/>
                <div className='text-lg text-gray-500'>Golf taco</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$17.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/plates.png" alt=""/>
                <div className='text-lg text-gray-500'>Porcine Supreme Tacos</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$17.99</div>
              </div>
              <a href="/menu" className='px-7 mx-auto block w-fit text-white py-1 text-xl text-center bg-brown rounded-md mt-5'>More</a>
            </div>
          </div>
          <div className="item flex lg:flex-row flex-col w-full">
            <img className='menu-image lg:w-1/2 w-full' src="/assets/images/menu/salad.png" alt="" />
            <div className="menu-info lg:w-1/2 w-full px-4  sm:px-12 py-8">
              <div className='text-3xl text-center text-brown my-3'>Salads</div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/salad.png" alt=""/>
                <div className='text-lg text-gray-500'>Caesar Salad</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$ 29.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/salad.png" alt=""/>
                <div className='text-lg text-gray-500'>Greek Salad</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$25.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/salad.png" alt=""/>
                <div className='text-lg text-gray-500'>Chicken Salad</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$18.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/salad.png" alt=""/>
                <div className='text-lg text-gray-500'>Chinese Salad</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$17.99</div>
              </div>
              <a href="/menu" className='px-7 mx-auto block w-fit text-white py-1 text-xl text-center bg-brown rounded-md mt-5'>More</a>
            </div>
          </div>
          <div className="item flex lg:flex-row flex-col w-full">
            <img className='menu-image lg:w-1/2 w-full' src="/assets/images/menu/pasta.png" alt="" />
            <div className="menu-info lg:w-1/2 w-full px-4  sm:px-12 py-8">
              <div className='text-3xl text-center text-brown my-3'>Pastas</div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/plates.png" alt=""/>
                <div className='text-lg text-gray-500'>Pastas</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$17.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/plates.png" alt=""/>
                <div className='text-lg text-gray-500'>our pennes</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$25.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/plates.png" alt=""/>
                <div className='text-lg text-gray-500'>Tagliatelles</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$18.99</div>
              </div>
              <a href="/menu" className='px-7 mx-auto block w-fit text-white py-1 text-xl text-center bg-brown rounded-md mt-5'>More</a>
            </div>
          </div>
          <div className="item flex lg:flex-row flex-col w-full">
            <img className='menu-image lg:w-1/2 w-full' src="/assets/images/menu/sandwish.png" alt="" />
            <div className="menu-info lg:w-1/2 w-full px-4  sm:px-12 py-8">
              <div className='text-3xl text-center text-brown my-3'>sandwich</div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/burger.png" alt=""/>
                <div className='text-lg text-gray-500'>Fox</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$29.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/burger.png" alt=""/>
                <div className='text-lg text-gray-500'>Steak</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$25.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/burger.png" alt=""/>
                <div className='text-lg text-gray-500'>Chicken</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$18.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/burger.png" alt=""/>
                <div className='text-lg text-gray-500'>Mixed</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$17.99</div>
              </div>
              <a href="/menu" className='px-7 mx-auto block w-fit text-white py-1 text-xl text-center bg-brown rounded-md mt-5'>More</a>
            </div>
          </div>
          <div className="item flex lg:flex-row flex-col w-full">
            <img className='menu-image lg:w-1/2 w-full' src="/assets/images/menu/plates.png" alt="" />
            <div className="menu-info lg:w-1/2 w-full px-4  sm:px-12 py-8">
              <div className='text-3xl text-center text-brown my-3'>plates </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/plates.png" alt=""/>
                <div className='text-lg text-gray-500'>chicken</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$17.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/plates.png" alt=""/>
                <div className='text-lg text-gray-500'>Kofta</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$25.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/plates.png" alt=""/>
                <div className='text-lg text-gray-500'>skewers</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$18.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/plates.png" alt=""/>
                <div className='text-lg text-gray-500'>Mixed</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$17.99</div>
              </div>
              <a href="/menu" className='px-7 mx-auto block w-fit text-white py-1 text-xl text-center bg-brown rounded-md mt-5'>More</a>
            </div>
          </div>
          <div className="item flex lg:flex-row flex-col w-full">
            <img className='menu-image lg:w-1/2 w-full' src="/assets/images/menu/crepe.png" alt="" />
            <div className="menu-info lg:w-1/2 w-full px-4  sm:px-12 py-8">
              <div className='text-3xl text-center text-brown my-3'>savory crepe</div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/burger.png" alt=""/>
                <div className='text-lg text-gray-500'>Vegetarian crepe</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$29.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/burger.png" alt=""/>
                <div className='text-lg text-gray-500'>Milanese</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$25.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/burger.png" alt=""/>
                <div className='text-lg text-gray-500'>Tonato</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$18.99</div>
              </div>
              <div className='flex my-3 gap-1 w-full items-center'>
                <img src="/assets/icons/burger.png" alt=""/>
                <div className='text-lg text-gray-500'>French crepe</div>
                <div className='dots'></div>
                <div  className='text-xs text-gray-500'>$17.99</div>
              </div>
              <a href="/menu" className='px-7 mx-auto block w-fit text-white py-1 text-xl text-center bg-brown rounded-md mt-5'>More</a>
            </div>
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
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default MenuPage