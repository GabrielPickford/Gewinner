import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <header className='sticky top-0 z-50 px-5 py-3 bg-white shadow-xl font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={144} height={30} />
                </Link>
                <nav className='flex items-center gap-12 text-black'>
                    <Link href="/catalogo">
                        <span className=' hover:text-tertiary'>Hyundai</span>
                    </Link>
                    <Link href="/catalogo">
                        <span className=' hover:text-secondary'>Vulcan</span>
                    </Link>
                    <Link href="/contacto">
                        <span className='text-20-medium hover:text-black-100'>Contacto</span>
                    </Link>
                </nav>
            </nav>
        </header>
    )
}

export default Navbar