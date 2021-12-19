import React from 'react'
// import Logo from 'media/logo.jpeg'

import { Link } from 'react-router-dom'
// import Menu from 'media/menu.png'

 const btn = document.querySelector("button.mobile-menu-button");
 const menu = document.querySelector(".mobile-menu");

 
const Navbar = () => {
    return (
        <nav className='bg-blue-700'>
            <div className=' max-w-6xl mx-auto px-8'>
                <div className='flex justify-between '>
                    <div className='flex space-x-4'>
                        <div>
                            <a href='#' className='flex items-center py-5 px-2 text-gray-700 hover:text-blue-300'>
                                {/* <img src={Logo} alt='logo' className='h-20 w-25 mr-2'/> */}
                            </a>
                        </div>
                        
                        <div className='hidden md:flex items-center space-x-1'>
                            <a href='https://github.com/Dev-Spaces' className='py-5 px-3 text-white hover:text-gray-400'></a>   
                        </div>
                    </div>

                    <div className='hidden md:flex items-center space-x-1 px-4'>
                    <Link to ='/'>
                        <a href="#" className='py-3 px-3 bg-red-300 hover:bg-red-400 text-red-900 
                        hover:text-red-800 rounded-xl transition duration-300'>salir</a>
                    </Link>
                    </div>

                    <div className='md:hidden flex items-center'>
                        <button className='mobile-menu-button'>
                        {/* <img src={Menu} alt='logo' className='w-10 h-10'/> */}
                        </button>
                    </div>

                </div>
            </div>
            
            <div className='mobile-menu hidden md:hidden'>
                <a Link to ='/' className='block py-2 px-4 text-sm hover:bg-blue-300 rounded'>salir</a>
            </div>
        </nav>
        
    )
}

// btn.addEventListener("click", () => {
//     menu.classList.toggle("hidden");
//   });

export default Navbar