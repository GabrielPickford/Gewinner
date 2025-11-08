import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDroprightCircle } from "react-icons/io";

type CardProps = {
  id: string;
  image: string;
  title: string;
  category?: string;
  text?: string;
  precio?: string;
};

const Card = ({ id, image, title, text, precio, category }: CardProps) => {
  return (
    <Link
      href={`/catalogo/${id}`}
      className='startup-card group py-5 w-full sm:w-[90%] md:w-auto'
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

      <h1 className='text-lgs text-black font-semibold px-6 sm:px-10 pb-4'>{title}</h1>

      {category && (
        <div>
          <p className="text-sm px-6 sm:px-10 pb-4">
            <span className=" text-gray-800 "> Categoría: </span>
            <span className="text-gray-600">{category}</span>

          </p>
        </div>
      )}

      {text && (
        <p className='text-16-medium px-6 sm:px-10 text-gray-600'>{text}</p>
      )}

      {precio && (
        <div>
          <p className="text-lg font-bold px-6 sm:px-10 flex justify-between items-center">
            <span className="text-black">{precio} Bs</span>
            <span> <IoIosArrowDroprightCircle className='text-4xl' /> </span>
          </p>
        </div>
      )}


    </Link>
  );
};

export default Card;
