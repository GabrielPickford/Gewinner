"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <section className="relative overflow-hidden mb-10 w-full ">
            <div className="relative w-50 h-[35vh] md:h-screen ">
                <Image
                    src="/assets/caratula1.jpg"
                    alt="Banner principal"
                    fill
                    className="object-contain object-center"
                    priority
                />
            </div>

            {/* Contenido de texto */}
            <div className="container mx-auto px-0 md:px-8 -m-4 sm:m-0">
                <div className=" relative z-10 md:absolute md:top-1/2 md:left-12 md:-translate-y-1/2 bg-white p-8 flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
                    <h2 className="sm:text-[30px] text-[28px] font-bold text-black mb-4">
                        EQUIPO AGRO DE CALIDAD
                    </h2>
                    <div className='h-0.5 w-20 bg-primary mb-5'></div>
                    <p className="text-sm md:text-md text-gray-600 mb-6">
                        Proporcionamos soluciones de alta calidad para tus proyectos. Descubre nuestro catálogo y transforma tus ideas en realidad.
                    </p>
                    <Link
                        href="/catalogo"
                        className="inline-block px-8 py-3 border border-black hover:text-black font-semibold bg-black hover:bg-white text-white transition"
                    >
                        Ver Catálogo
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Header
