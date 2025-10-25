import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type CardProps = {
  id: string;
  image: string;
  title: string;
  text?: string;
  precio?: string; // Añadido precio
};

const Card = ({ id, image, title, text, precio }: CardProps) => {
  return (
    <Link href={`/catalogo/${id}`} className='startup-card group py-5'>
      <div className='overflow-hidden w-full'>
        <Image
          src={image}
          alt={title}
          width={800}
          height={200}
          className='image px-10 transition-transform duration-300 group-hover:scale-105'
        />
      </div>
      <h1 className='text-20-semibold px-10'>{title}</h1>
      <p className='text-16-medium px-10'>{text}</p>
      {precio && (
        <p className='text-16-medium px-10 text-gray-700'>
           {precio}
        </p>
      )}
    </Link>
  );
};

export default Card;
