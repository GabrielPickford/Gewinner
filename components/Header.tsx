import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <div className='relative w-full h-screen overflow-hidden -mt-7'>

            {/* Imagen de fondo */}
            <div className='absolute w-full 
                            h-screen top-0 left-0 
                            md:h-[65vh] md:top-1/2 md:-translate-y-1/2 z-0'>
                <Image
                    src="/assets/caratula1.jpg"
                    alt="Vulcan"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority
                />
                {/* Capa oscura encima para contraste */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Contenido centrado sobre la imagen */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white text-center p-4">
                <h1 className="heading text-3xl font-bold">Gewinner</h1>
                <Link
                    href="/catalogo"
                    className="button-primary mt-5 flex justify-center items-center border-2 border-white text-white text-lg rounded-none bg-transparent hover:bg-white hover:text-black transition duration-300"
                >
                    Catálogo
                </Link>
            </div>

        </div>
    )
}

export default Header
