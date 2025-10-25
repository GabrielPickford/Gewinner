import React from 'react'
import Card from './Card'
import Link from 'next/link'

const Interests = () => {
  return (
    <div className='pt-5 w-full'>
      <section className='flex'>
        <h1 className='text-center uppercase px-6 py-3 font-work-sans font-extrabold text-black sm:text-[36px] sm:leading-[64px] text-[24px] leading-[46px] w-full my-5'>Productos más vendidos</h1>
      </section>
      <section className='card_grid '>
        <Card
          id='56419'
          image="/assets/vulcanMotosierra.jpg"
          title="Motosierra a gasolina"
          text="56419"
        />
        <Card
          id='56419'
          image="/assets/vulcanMotosierra.jpg"
          title="Motosierra a gasolina"
          text="56419"
        />
        <Card
          id='56419'
          image="/assets/vulcanMotosierra.jpg"
          title="Motosierra a gasolina"
          text="56419"
        />
        <Card
          id='56419'
          image="/assets/vulcanMotosierra.jpg"
          title="Motosierra a gasolina"
          text="56419"
        />

      </section>
      <section className='flex mb-10 justify-center items-center'>
        <Link
          href="/catalogo"
          className="button-primary flex justify-center  border-primary hover:border-black text-white text-lg rounded-none bg-primary hover:bg-white hover:text-black transition duration-300"
        >
          Ver catálogo
        </Link>
      </section>

    </div>
  )
}

export default Interests