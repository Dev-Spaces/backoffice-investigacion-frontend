import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";

const Principal = () => {
    return (
        <div className='bg-blue-100'>
        <Navbar/>
            <main>
            <div className='bg-blue-300 text-white rounded-md p-5  m-10 my-32
                shadow-2xl mt-7'>
                    <h1 class="text-6xl">Dev Space</h1> 
                    <h2 className='text-4xl'>welcome</h2>
			                <p class="text-4xl mt-32">Bienvenido a su administrados de proyectos, donde podras crear proyectos, ingresar usuarios y mas.</p> 
                    
                </div>             
            </main> 
        <Footer/>
        </div>
    )
}

export default Principal
