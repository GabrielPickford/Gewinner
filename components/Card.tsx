import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type CardProps = {
  id: string;
  image: string;
  title: string;
  text?: string;
  precio?: string;
};

const Card = ({ id, image, title, text, precio }: CardProps) => {
  return (
    <Link
      href={`/catalogo/${id}`}
      className='startup-card group py-5 w-full sm:w-[90%] md:w-auto mx-auto'
    >
      <div className='overflow-hidden w-full'>
        <Image
          src={image}
          alt={title}
          width={800}
          height={200}
          className='w-full h-72 sm:h-80 object-contain px-6 sm:px-10 transition-transform duration-300 group-hover:scale-105'
        />
      </div>

      <h1 className='text-20-semibold px-6 sm:px-10'>{title}</h1>

      {text && (
        <p className='text-16-medium px-6 sm:px-10 text-gray-600'>{text}</p>
      )}

      {precio && (
        <div>
          <p className="text-16-medium px-6 sm:px-10">
            <span className="text-gray-800">{precio}</span>
            <span className="text-20 "> Bs</span>
          </p>
        </div>
      )}
    </Link>
  );
};

export default Card;
