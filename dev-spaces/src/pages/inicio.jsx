import React from 'react'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import Fondo from 'media/fondo.jpeg'

const inicio = () => {
    return (
        <div className='bg-blue-100'>
        <Navbar/>
            <main>
            <div className='bg-blue-300 text-white rounded-md p-5  m-7
                shadow-2xl mt-7'>
                    <h1 class="text-2xl">Ahorrity +</h1> 
			                <p class="text-xs mt-32">Esta plataforma ayuda a tomar el control de tus finanzas, permite ingresar tu salario tus gastos y tiene la opcion de empezar un ahorro mensual, tambien cuenta con otra opcion educativa que te informara brevemente como tener una buena educacion financiera que te ayudara a tener un mejor manejo con el dinero y hacer mas efectivo el objetivo de la plataforma que es informar positivamente como la persona esta manejando su dinero.</p> 
                    <h2 className='text-2xl'>wellcome</h2>
                    <p>Awesome Tailwind login</p>
                    <p className='text-xs mt-32'>Tailwind is awesome</p>
                </div>             
            </main>
        <Footer/>     
        </div>
    )
}

export default inicio