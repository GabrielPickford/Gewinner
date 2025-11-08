import React from 'react'
import Card from './Card'
import Link from 'next/link'
import { products as allProducts } from '@/lib/products'

const Interests = () => {
  // Buscar 3 productos específicos por ID
  const producto1 = allProducts.find(p => p.id === 'VSL550')
  const producto2 = allProducts.find(p => p.id === 'HG8500ET')
  const producto3 = allProducts.find(p => p.id === 'VR520H')

  return (
    <div className='pt-5'>
      <section className='flex  w-full pb-10 px-20' >
        <h2 className="sm:text-[36px] text-[32px] font-bold text-black mb-6 border-b-2 border-primary-100 pb-2">Productos más vendidos</h2>
      </section>

      <section className='card_grid'>
        {producto1 && (
          <Card
            id={producto1.id}
            image={producto1.image}
            title={producto1.title}
            precio={producto1.precio}
          />
        )}

        {producto2 && (
          <Card
            id={producto2.id}
            image={producto2.image}
            title={producto2.title}
            precio={producto2.precio ?? ''}
          />
        )}

        {producto3 && (
          <Card
            id={producto3.id}
            image={producto3.image}
            title={producto3.title}
            precio={producto3.precio ?? ''}
          />
        )}
      </section>

      <section className='flex mb-10 justify-center items-center'>
        <Link
          href="/catalogo"
          className="button-primary flex justify-center border-primary hover:border-black text-white text-lg rounded-none bg-primary hover:bg-white hover:text-black transition duration-300"
        >
          Ver catálogo
        </Link>
      </section>
    </div>
  )
}

export default Interests
