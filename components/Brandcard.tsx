import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type CardProps = {
  image: string
  color: string
}

const Card = ({ image, color }: CardProps) => {
  return (
    <Link
      href="/catalogo"
      className={`relative flex items-center justify-center w-full aspect-[3/1] sm:aspect-[4/1] ${color} group overflow-hidden`}>
      <Image
        src={image}
        alt="Gewinner"
        fill
        className="object-contain  transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  )
}

export default Card
