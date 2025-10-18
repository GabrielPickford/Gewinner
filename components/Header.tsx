import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
    return (
        <div className='relative w-full h-screen overflow-hidden -mt-7  '>

            <div className='absolute top-1/2 left-0 w-full h-[65vh] -translate-y-1/2 z-0'>
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
                {/* <p className="sub-heading text-base max-w-3xl ">Líderes en calidad</p> */}
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
