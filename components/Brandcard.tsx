import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

type CardProps = {
  image: string;
  color: string;
}

const Card = ({ image, color }: CardProps) => {
    return (
        <Link
          href="/catalogo" 
          className={`flex items-center justify-center w-full h-full p-4 ${color} group`}>
            <Image
                src={image}
                alt="Gewinner"
                width={300}
                height={200}
                className="transition-transform duration-300 group-hover:scale-110"
            />
        </Link>
    )
}

export default Card
