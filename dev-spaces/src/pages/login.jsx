import { Link } from 'react-router-dom';
import NavbarLogin from 'components/NavbarLogin'
import Footer from 'components/Footer'

import React from 'react'

const   Login = () => {
    return (
        <div>
        <NavbarLogin/>
        <div className='h-screen flex justify-center items-center bg-blue-100'>
           
            <div className='flex flex-col relative w-full m-10'>
                <div className='bg-blue-300 text-white rounded-md p-5  m-7
                shadow-2xl mt-7'>
                    <h2 className='text-2xl'>welcome</h2>
                    <p>Awesome Tailwind login</p>
                    <p className='text-xs mt-32'>Tailwind is awesome</p>
                </div>
                <div className="absolute right-12 bg-white rounded-md p-2 w-44
                flex flex-col justify-center items-center shadow-xl py-4">
                    <h2 className='text-red-300 mb-3 text-sm font-bold'>Log In </h2>
                    <div className="bg-red-300 shadow-xl rounded-full w-12 h-12
                    mb-4">
                </div>
                <input type="email" placeholder='ingresa tu correo' className='text-xs w-full p-1 
                focus:outline-none border-b-2 border-gray-600 focus:border-red-500
                bg-transparent mb-2'/>
                <input type="password" placeholder='ingresa tu contraseña' className='text-xs w-full p-1 
                focus:outline-none border-b-2 border-gray-600 focus:border-red-500
                bg-transparent'/>
                <button className='bg-red-400 hover:bg-red-500
                text-xs text-black w-full mt-4 mb-7 focus:outline-none p-2'>Login</button>
                <a href="#" className='text-red-500 mb-5 text-xs'></a>
                </div>  
               
            </div>
        </div> 
        <Footer/>
        </div>
    )
}

export default Login;
