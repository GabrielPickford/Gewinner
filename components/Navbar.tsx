import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <header className='sticky top-0 z-50 w-full h-16 bg-white border-b shadow-md'>
            <nav className='flex justify-between px-5 items-center w-full h-full '>
                <Link href="/" >
                    <Image src="/logo.png" alt="logo" width={144} height={30} />
                </Link>
                <nav className='flex items-center gap-12 text-black'>
                    <Link href="/catalogo">
                        <span className=' hover:text-tertiary'>Hyundai</span>
                    </Link>
                    <Link href="/catalogo">
                        <span className=' hover:text-secondary'>Vulcan</span>
                    </Link>
                    <Link href="/catalogo">
                        <span className='text-20-medium hover:text-black-100'>Catálogo</span>
                    </Link>
                    <Link href="/contacto">
                        <span className='text-20-medium hover:text-green-700'>WhatsApp</span>
                    </Link>
                </nav>
            </nav>
        </header>
    )
}

export default Navbar