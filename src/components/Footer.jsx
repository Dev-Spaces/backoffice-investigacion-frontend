import React from 'react'




const Footer = () => {
    return (

        <footer className='text-gray-100 bg-gray-800'>
            <div className='max-w-3xl mx-auto py-6'>
                <h1 className='text-center text-lg lg:text-2xl '>
                                Proyecto realizado por el grupo
                </h1>
                <h1 className='text-center text-lg lg:text-2xl '>
                                DevSpace para el manejo de proyectos
                </h1>

                <hr className='h-px mt-6 bg-gray-700 border-none'/>

                <div className='flex flex-col items-center justify-between mt-6 md:flex-row'>
                    <div className=''>
                        <a href="#" className='text-xl font-bold text-gray-100 hover:text-gray-400'>DevSpace</a>
                    </div>
                    
                    <div className='flex mt-4 md:m-0'>
                        <div className='-mx-4'>
                            <a href="https://github.com/Dev-Spaces" className='px-4 text-sm text-gray-100 font-medium hover:text-gray-400'>Github</a>
                            <a href="https://www.misiontic2022.gov.co/portal/" className='px-4 text-sm text-gray-100 font-medium hover:text-gray-400'> MinTic</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer