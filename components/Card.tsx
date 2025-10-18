import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

type CardProps = {
  id: string;
  image: string;
  title: string;
  text: string;
}

const Card = ({ id, image, title, text }: CardProps) => {
  return (
    <Link href={`/catalogo/${id}`} className='startup-card'>
      <Image
        src={image}
        alt={title}
        width={800}
        height={200}
        className='image'
      />
      <h1 className='text-30-semibold'>{title}</h1>
      <p className='text-16-medium'>{text}</p>
    </Link>
  );
};

export default Card;
